---
sidebar_position: 6
---

# GitHub Actions 自動化

使用 GitHub Actions 可以自動化你的開發流程，包括在每次 push 或 pull request 時自動檢查和格式化代碼，如果有問題會自動修復並提交 pull request。這裡我們將介紹如何設定和使用 GitHub Actions 來實現這一目標。

## 設定 GitHub Actions

首先，你需要在專案根目錄下新增一個 `.github/workflows` 目錄，並在該目錄下新增一個名為 `prettier.yml` 的檔案。這個檔案將包含 GitHub Actions 的組態。

### 範例組態檔

以下是一個範例組態檔，用於在每次 push 或 pull request 時自動檢查和格式化代碼：

```yaml
name: Prettier Check

on: [push, pull_request]

jobs:
  prettier:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: ‘20’

      - name: Install dependencies
        run: npm install prettier

      - name: Run Prettier check
        id: prettier
        run: npx prettier —check .

      - name: Run Prettier format (if needed)
        if: ${{ failure() }}
        run: npx prettier —write .

      - name: Create Pull Request
        if: ${{ failure() }}
        uses: peter-evans/create-pull-request@v5
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          commit-message: ‘fix: format code with Prettier’
          branch: prettier-fixes
          committer: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>
          author: ${{ github.actor }} <${{ github.actor_id }}+${{ github.actor }}@users.noreply.github.com>
          signoff: true
          delete-branch: true
          title: ‘fix: format code with Prettier’
          body: ‘This pull request fixes the code formatting issues identified by Prettier.’
```

### 組態說明

- **`name`**: 為這個工作流程命名，例如 `Prettier Check`。
- **`on`**: 定義在何種情況下觸發這個工作流程，這裡設定為在 `push` 和 `pull_request` 事件時觸發。
- **`jobs`**: 定義一個或多個作業（jobs），這裡我們只定義了一個名為 `prettier` 的作業。
- **`runs-on`**: 指定作業運行的環境，這裡設定為 `ubuntu-latest`。
- **`steps`**: 定義作業中的每一個步驟：
- **Checkout repository**: 將專案的程式碼檢出到 runner 環境中，使後續步驟可以存取代碼。
- **Set up Node.js**: 設定 Node.js 環境，這裡我們使用了版本 20。
- **Install dependencies**: 安裝 Prettier 作為依賴套件，確保我們可以在後續步驟中使用它。
- **Run Prettier check**: 使用 `npx prettier —check .` 檢查所有檔案是否符合 Prettier 的格式規範。如果任何檔案不符合規範，這一步會失敗。
- **Run Prettier format (if needed)**: 如果上一步檢查失敗，這裡會執行 `npx prettier —write .` 自動格式化所有不符合規範的檔案。
- **Create Pull Request**: 如果有檔案被格式化，這一步會自動建立一個新的 pull request，提交格式化後的程式碼。使用 `peter-evans/create-pull-request@v5` 操作來自動建立 PR，並設定相關的 commit 資訊和 PR 標題、描述。

## 部署和使用

1. **建立工作流程檔案**: 將上述組態儲存到專案根目錄下的 `.github/workflows/prettier.yml` 檔案中。
2. **推送程式碼**: 將工作流程檔案推送到 GitHub repository。
3. **檢查執行情況**: 每次 push 或 pull request 事件觸發時，可以在 GitHub 上的 Actions 標籤下查看工作流程的執行情況。
