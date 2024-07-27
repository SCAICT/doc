---
sidebar_position: 3
---

# 如何在 VSCode 安裝及使用 Prettier？

Visual Studio Code (VSCode) 是一個流行的代碼編輯器，Prettier 提供了專屬的擴充功能來幫助你在編寫代碼時自動格式化文件。這裡我們將介紹如何在 VSCode 中安裝和配置 Prettier。

## 安裝 Prettier 擴充功能

1. **打開 VSCode**：啟動你的 VSCode 編輯器。
2. **打開擴充功能市場**：點擊左側活動欄中的擴充功能圖標，或使用快捷鍵 `Ctrl+Shift+X`。
3. **搜尋 Prettier**：在搜尋欄中輸入 `Prettier - Code formatter`。
4. **安裝擴充功能**：找到由 `Prettier` 提供的擴充功能，點擊 `Install` 按鈕進行安裝。

## 配置 Prettier

安裝完成後，你需要對 VSCode 進行一些配置來啟用 Prettier。

1. **打開設定檔**：點擊右上角的齒輪圖標，選擇 `Settings`，或使用快捷鍵 `Ctrl+,`。
2. **搜尋 Prettier**：在設定搜尋欄中輸入 `Prettier`。
3. **設置為預設格式化工具**：找到 `Editor: Default Formatter` 設定，將其設置為 `Prettier - Code formatter`。
4. **啟用保存時自動格式化**：找到 `Editor: Format On Save` 設定，勾選此選項。

這樣，在保存文件時，VSCode 會自動使用 Prettier 來格式化你的代碼。

## 使用 Prettier 格式化代碼

有了以上配置，Prettier 將自動在你保存文件時格式化代碼。如果你想手動格式化某個文件，可以使用以下方法：

1. **右鍵格式化**：右鍵點擊文件編輯區，選擇 `Format Document`。
2. **快捷鍵格式化**：使用快捷鍵 `Shift+Alt+F` 格式化當前打開的文件。

## 問題排查

如果你發現 Prettier 沒有按預期工作，可以嘗試以下步驟：

1. **檢查擴充功能安裝**：確認 `Prettier - Code formatter` 擴充功能已正確安裝並啟用。
2. **檢查設定檔**：確保 `Default Formatter` 和 `Format On Save` 設定已正確配置。
3. **檢查 .prettierrc 文件**：確認專案根目錄下是否有 `.prettierrc` 配置文件，並且配置無誤。