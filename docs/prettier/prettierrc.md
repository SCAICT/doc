---
sidebar_position: 4
---

# 設定 .prettierrc 規範

`.prettierrc` 文件用於配置 Prettier 的格式化規範。這些設定將會應用到專案中的所有文件，確保代碼風格一致。

## 創建 .prettierrc 文件

在專案的根目錄下創建一個名為 `.prettierrc` 的文件，然後添加你的配置。這裡是一些常見的配置選項，也是中電會目前習慣的配置選項：

```json
{
  “printWidth”: 80,
  “tabWidth”: 2,
  “useTabs”: false,
  “semi”: true,
  “singleQuote”: true,
  “trailingComma”: “all”,
  “bracketSpacing”: true,
  “jsxBracketSameLine”: false,
  “arrowParens”: “avoid”,
  “endOfLine”: “lf”
}
```

## 配置說明

- **`printWidth`**: 每行的最大長度，默認是 80 個字符。超過這個長度的行會被折行。
- **`tabWidth`**: 設定一個 tab 等於多少個空格，默認是 2。
- **`useTabs`**: 使用 tab 而不是空格縮進，默認是 `false`。
- **`semi`**: 在語句結尾是否添加分號，默認是 `true`。
- **`singleQuote`**: 使用單引號代替雙引號，默認是 `true`。
- **`trailingComma`**: 在多行結構的最後一行是否添加逗號，有效值包括 `”none”`, `”es5”`, `”all”`，默認是 `”all”`。
- **`bracketSpacing`**: 在對象字面量中的括號兩側添加空格，默認是 `true`。
- **`jsxBracketSameLine`**: 在 JSX 中把 `>` 放在最後一個屬性所在行的末尾，而不是單獨成行，默認是 `false`。
- **`arrowParens`**: 在只有一個參數的箭頭函數中省略括號，有效值包括 `”always”`, `”avoid”`，默認是 `”avoid”`。
- **`endOfLine`**: 設定行尾的符號，有效值包括 `”lf”`, `”crlf”`, `”cr”`, `”auto”`，默認是 `”lf”`。

## 其他配置方式

除了 `.prettierrc` 文件，你還可以使用以下方式配置 Prettier：

1. **`.prettierrc.json`**: 使用 JSON 格式。
2. **`.prettierrc.yaml`**: 使用 YAML 格式。
3. **`.prettierrc.yml`**: 使用 YAML 格式。
4. **`prettier.config.js`**: 使用 JavaScript 格式。
5. **`package.json`**: 在 `package.json` 中添加 `prettier` 字段。

例如，在 `package.json` 中添加以下配置：

```json
{
  “prettier”: {
    “printWidth”: 80,
    “tabWidth”: 2,
    “useTabs”: false,
    “semi”: true,
    “singleQuote”: true,
    “trailingComma”: “all”,
    “bracketSpacing”: true,
    “jsxBracketSameLine”: false,
    “arrowParens”: “avoid”,
    “endOfLine”: “lf”
  }
}
```

不過還是建議以 `.prettierrc` 文件進行操作。