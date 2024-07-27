—
sidebar_position: 6


# GitHub Actions 自動化

使用 GitHub Actions 可以自動化你的開發流程，包括在每次 push 或 pull request 時自動檢查和格式化代碼，如果有問題會自動修復並提交 pull request。這裡我們將介紹如何配置和使用 GitHub Actions 來實現這一目標。

## 設置 GitHub Actions

首先，你需要在專案根目錄下創建一個 `.github/workflows` 目錄，並在該目錄下創建一個名為 `prettier.yml` 的文件。這個文件將包含 GitHub Actions 的配置。

### 範例配置

以下是一個範例配置，用於在每次 push 或 pull request 時自動檢查和格式化代碼：

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

### 配置解釋

- **`name`**: 為這個工作流命名，例如 `Prettier Check`。
- **`on`**: 定義在何種情況下觸發這個工作流，這裡設置為在 `push` 和 `pull_request` 事件時觸發。
- **`jobs`**: 定義一個或多個作業（jobs），這裡我們只定義了一個名為 `prettier` 的作業。
- **`runs-on`**: 指定作業運行的環境，這裡設置為 `ubuntu-latest`。
- **`steps`**: 定義作業中的每一步操作：
- **Checkout repository**: 將專案的代碼檢出到 runner 環境中，使後續步驟可以訪問代碼。
- **Set up Node.js**: 設置 Node.js 環境，這裡我們使用了版本 20。
- **Install dependencies**: 安裝 Prettier 作為依賴，確保我們可以在後續步驟中使用它。
- **Run Prettier check**: 使用 `npx prettier —check .` 檢查所有文件是否符合 Prettier 的格式規範。如果任何文件不符合規範，這一步會失敗。
- **Run Prettier format (if needed)**: 如果上一步檢查失敗，這裡會運行 `npx prettier —write .` 自動格式化所有不符合規範的文件。
- **Create Pull Request**: 如果有文件被格式化，這一步會自動創建一個新的 pull request，提交格式化後的代碼。使用 `peter-evans/create-pull-request@v5` 動作來自動創建 PR，並設置相關的 commit 信息和 PR 標題、描述。

## 部署和使用

1. **創建工作流文件**: 將上述配置保存到專案根目錄下的 `.github/workflows/prettier.yml` 文件中。
2. **推送代碼**: 將工作流文件推送到 GitHub repository。
3. **檢查運行情況**: 每次 push 或 pull request 事件觸發時，可以在 GitHub 上的 Actions 標籤下查看工作流的運行情況。