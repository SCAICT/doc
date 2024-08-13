---
sidebar_position: 1
authors: [iach526526]
slug: about
title: Link Start!
description: 介紹一下
---
# 程式碼專區
> 屎山何其多

## 簡介
每頁會解釋中電喵 cog 裡面的 Python 檔案，相關的功能會放在同一個檔案，日後有新功能務必用檔名聯想這是幹什麼用的。cog 裡面的程式基本上都是核心的聊天指令，太胖或是太通用的 function 可以放到 cog/core 裡面方便引入。

- 舉例：

cog/core SQL.py 檔有一個 function write 需要呼叫，應該寫成：
```py
from cog.core.SQL import write
```

注意盡量不要單獨 import 整個檔案

- 錯誤示範

```py
import cog.core.SQL as SQL
# call function
SQL.write(argv...)
```

## 資料庫設計

下表是中電喵連接的資料庫需要存在且使用的表格，接下來會分別講解每個表格的功能

```bash
> show tables;
+-------------------+
| Tables_in_Discord |
+-------------------+
| CommentPoints     |
| USER              |
| ctf_data          |
| ctf_history       |
| game              |
| gift              |
+-------------------+
```

### CommentPoints


### USER


### ctf_data


### ctf_history


### game


### gift

