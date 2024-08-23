---
sidebar_position: 2
---

# 如何在本地安裝 Prettier？

在本地安裝 Prettier 可以讓你在編寫代碼時自動格式化檔案。這裡我們將介紹如何使用 npm 來安裝 Prettier，並簡單介紹如何使用 yarn 和 npx。

## 使用 npm 安裝

### 全域安裝

全域安裝讓你可以在任何專案中使用 Prettier。運行以下命令：

```bash
npm install -g prettier
```

安裝完成後，你可以通過以下命令檢查版本：

```bash
prettier —version
```

### 在專案中安裝

在專案中安裝 Prettier 可以讓你的專案有特定的依賴版本。首先，確保你在專案的根目錄下，然後運行：

```bash
npm install —save-dev prettier
```

安裝完成後，可以在 `package.json` 檔案中看到 Prettier 被列為開發依賴。

## 使用 yarn 安裝

如果你更喜歡使用 yarn，可以通過以下命令全域安裝 Prettier：

```bash
yarn global add prettier
```

或者在專案中安裝：

```bash
yarn add —dev prettier
```

## 使用 npx 執行

如果你不想全域安裝 Prettier，可以使用 npx 來執行它。這個方法適合臨時使用：

```bash
npx prettier —version
```

## 檢查和格式化代碼

安裝完成後，你可以開始使用 Prettier 檢查和格式化代碼。

### 檢查代碼格式

使用以下命令來檢查你的代碼是否符合 Prettier 的格式：

```bash
prettier —check .
```

### 自動格式化代碼

如果需要格式化代碼，可以使用：

```bash
prettier —write .
```

這個命令會自動格式化當前目錄下的所有檔案。