---
sidebar_position: 4
---

# 設定 .prettierrc 規範

`.prettierrc` 檔案用於設定 Prettier 的格式化規範。這些設定將會套用到專案中的所有檔案，確保程式碼風格一致。

## 新增 .prettierrc 檔案

在專案的根目錄下新增一個名為 `.prettierrc` 的檔案，然後新增組態項。這裡是一些常見的組態項，也是中電會目前習慣的組態項：

```json
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "avoid",
  "endOfLine": "lf"
}
```

## 組態項說明

- **`printWidth`**: 每行的最大長度，預設為 80 個字元。超過這個長度的行會被拆行。
- **`tabWidth`**: 設定一個 tab 等於多少個空格，預設為 2。
- **`useTabs`**: 使用 tab 而不是空格縮排，預設為 `false`。
- **`semi`**: 在語句結尾是否加上分號，預設為 `true`。
- **`singleQuote`**: 使用單引號代替雙引號，預設為 `true`。
- **`trailingComma`**: 在多行結構的最後一行是否加上逗號，有效值包括 `"none"`, `"es5"`, `"all"`，預設為 `"all"`。
- **`bracketSpacing`**: 在物件字面量中的括號兩側加上空格，預設為 `true`。
- **`jsxBracketSameLine`**: 在 JSX 中把 `>` 放在最後一個屬性所在行的末尾，而不是單獨成行，預設為 `false`。
- **`arrowParens`**: 在只有一個參數的箭頭函數中省略括號，有效值包括 `"always"`, `"avoid"`，預設為 `"avoid"`。
- **`endOfLine`**: 設定行尾的換行字元，有效值包括 `"lf"`, `"crlf"`, `"cr"`, `"auto"`，預設為 `"lf"`。

## 其他設定方式

除了 `.prettierrc` 檔案，你還可以使用以下方式設定 Prettier：

1. **`.prettierrc.json`**: 使用 JSON 格式。
2. **`.prettierrc.yaml`**: 使用 YAML 格式。
3. **`.prettierrc.yml`**: 使用 YAML 格式。
4. **`prettier.config.js`**: 使用 JavaScript 格式。
5. **`package.json`**: 在 `package.json` 中加上 `prettier` 欄位。

例如，在 `package.json` 中新增以下組態項：

```json
{
  "prettier": {
    "printWidth": 80,
    "tabWidth": 2,
    "useTabs": false,
    "semi": true,
    "singleQuote": true,
    "trailingComma": "all",
    "bracketSpacing": true,
    "jsxBracketSameLine": false,
    "arrowParens": "avoid",
    "endOfLine": "lf"
  }
}
```

不過還是建議以 `.prettierrc` 檔案進行操作。
