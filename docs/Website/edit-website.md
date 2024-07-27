---
sidebar_position: 4
---

## 編輯時機

在以下情況你需要直接編輯網頁原始碼:

* 調整網頁排版、字體大小
* 新增贊助廠商
* 新增參與社團
* 更改介紹文字及目標
* 更改社群連結

以下情況請**不要編輯**此倉庫，麻煩移駕至 [website-data](https://github.com/SCAICT/website-data)

* 更改首頁 LCD 屏幕公告
* 新增/編輯活動

## 部屬流程

```mermaid
  graph LR;
      a[push 至 main]—>b[壓縮至 publish 分支]—>c[部屬至 Vercel]
```

## 編輯指引

### 我看不懂 HTML

_那拜託不要亂動_

其實不用擔心，原則上你只需要找到你要編輯的文字並修改即可。

### 格式化

建議使用 [Prettier](https://prettier.io/) 格式化代碼。以下為建議設定:

```json
{
    “arrowParens”: “avoid”,
    “bracketSpacing”: true,
    “endOfLine”: “lf”,
    “htmlWhitespaceSensitivity”: “css”,
    “insertPragma”: true,
    “singleAttributePerLine”: false,
    “bracketSameLine”: false,
    “jsxBracketSameLine”: false,
    “jsxSingleQuote”: false,
    “printWidth”: 80,
    “proseWrap”: “preserve”,
    “quoteProps”: “as-needed”,
    “requirePragma”: false,
    “semi”: true,
    “singleQuote”: false,
    “tabWidth”: 4,
    “trailingComma”: “es5”,
    “useTabs”: false,
    “embeddedLanguageFormatting”: “auto”,
    “vueIndentScriptAndStyle”: false,
    “parser”: “babel”
  }
```

## 注意事項

* 要製作分頁請開資料夾，並命名檔案為 `index.html`
* 特殊活動有開倉庫可以直接[使用 GitHub Pages 部屬](如何使用-Github-Pages-部屬營隊網站%3F)。