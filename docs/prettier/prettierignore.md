---
sidebar_position: 5
---

# 如何設定 .prettierignore

`.prettierignore` 檔案用於指定哪些檔案或目錄應該被 Prettier 忽略。這類似於 `.gitignore` 檔案，可以協助你排除不需要格式化的檔案。

:::warning
除非特殊情況，請不要隨意排除檔案。
:::

## 新增 .prettierignore 檔案

在專案的根目錄下新增一個名為 `.prettierignore` 的檔案，然後新增你想忽略的檔案或目錄。例如：

```plaintext
# 忽略 node_modules 目錄
node_modules

# 忽略所有編譯輸出目錄
dist
build

# 忽略特定檔案類型
*.min.js
*.bundle.js

# 忽略特定檔案
src/ignore-this-file.js
```

## 常見忽略項目

以下是一些常見的 `.prettierignore` 組態項：

- **忽略依賴套件目錄**：

  ```plaintext
  node_modules
  ```

- **忽略編譯輸出目錄**：

  ```plaintext
  dist
  build
  ```

- **忽略特定檔案類型**：

  ```plaintext
  *.min.js
  *.bundle.js
  ```

- **忽略特定組態檔**：

  ```plaintext
  .env
  ```

## 使用規範

1. **注釋**：使用 `#` 開頭的行表示注釋，會被忽略。
2. **通配符號**：支持使用 `*` 作為通配符號來匹配主檔名或副檔名。
3. **目錄**：直接指定目錄名稱，忽略整個目錄。

## 檢查忽略規則

你可以使用以下命令來檢查 `.prettierignore` 檔案的效果，確認指定的檔案是否已被忽略：

```bash
prettier --check .
```

這個命令會列出所有未被忽略並且需要格式化的檔案。

## 與其他忽略檔案的關係

`.prettierignore` 檔案的作用類似於 `.gitignore`，但僅影響 Prettier 的格式化範圍。這意味著 `.prettierignore` 檔案中的規則不會影響到 Git 的忽略規則，反之亦然。
