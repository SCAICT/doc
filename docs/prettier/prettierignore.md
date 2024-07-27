---
sidebar_position: 5
---

# 如何設定 .prettierignore

`.prettierignore` 文件用於指定哪些文件或目錄應該被 Prettier 忽略。這類似於 `.gitignore` 文件，可以幫助你排除不需要格式化的文件。

:::warning

除非特殊情況，請不要隨意排除檔案。

:::

## 創建 .prettierignore 文件

在專案的根目錄下創建一個名為 `.prettierignore` 的文件，然後添加你想忽略的文件或目錄。例如：

```plaintext
# 忽略 node_modules 目錄
node_modules

# 忽略所有編譯輸出目錄
dist
build

# 忽略特定文件類型
*.min.js
*.bundle.js

# 忽略特定文件
src/ignore-this-file.js
```

## 常見忽略項目

以下是一些常見的 `.prettierignore` 配置項目：

- **忽略依賴目錄**：
  ```plaintext
  node_modules
  ```

- **忽略編譯輸出目錄**：
  ```plaintext
  dist
  build
  ```

- **忽略特定文件類型**：
  ```plaintext
  *.min.js
  *.bundle.js
  ```

- **忽略特定配置文件**：
  ```plaintext
  .env
  ```

## 使用規範

1. **注釋**：使用 `#` 開頭的行表示注釋，會被忽略。
2. **通配符**：支持使用 `*` 作為通配符來匹配文件名或擴展名。
3. **目錄**：直接指定目錄名稱，忽略整個目錄。

## 檢查忽略規則

你可以使用以下命令來檢查 `.prettierignore` 文件的效果，確認指定的文件是否被忽略：

```bash
prettier —check .
```

這個命令會列出所有未被忽略並且需要格式化的文件。

## 與其他忽略文件的關係

`.prettierignore` 文件的作用類似於 `.gitignore`，但僅影響 Prettier 的格式化範圍。這意味著 `.prettierignore` 文件中的規則不會影響到 Git 的忽略規則，反之亦然。