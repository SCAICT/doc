---
sidebar_position: 1
authors: [iach526526]
slug: about
title: 關於這個專案
description: 介紹一下
---

# 關於這個專案

恭喜你成為中電喵飼養員，為了成為稱職的飼養員，你需要有以下先備知識：
- python 程式設計
- SQL 資料庫維護
- 億點點 Linux 操作技巧

以下是中電喵專案的檔案樹，為了篇幅省略了一些小檔案或不重要的資料夾（如 .git ），這裡定義重資料夾之間的相對關係。
```
|   app.py
|   main.py
|   requirements.txt
|   token.json
|   
+---.github
|   |   FUNDING.yml
|   |   
|   +---ISSUE_TEMPLATE
|   |       bug_report.md
|   |       feature_request.md
|   |       
|   \---workflows
|           notion.yml
|           pylint.yml
|           
+---build
|       build.py
|       __init__.py
|       
+---cog
|   |   admin_role.py
|   |   check_point.py
|   |   class_role.py
|   |   
|   \---core
|           secret.py
|           sql.py
|           sql_acc.py
|           __init__.py
|           
+---DataBase
|       clas.json
|       ctf.json
|       products.json
|       server.config-alpha.json
|       server.config.json
|       slot.json
|       
+---doc
|       
+---static
|       404.jpg...
|       
+---templates
|       404.html
|       already.html
|       home.html
|       slot.html
|       star_success.html
|       
\---test
```
## 中電喵，啟動！


### \.github
在 GitHub repository 的自動化執行腳本。目前有的自動化腳本：
- pylint
    - Python 程式碼風格檢查程式，變數名稱亂寫可是不能成功 PR 的喔！
- notion API
  - 連接中電會工人 notion 代辦事項和 Discord hook ，用來顯示中電喵 repo 的 issue


### 中電喵本體
中電喵聊天程式從 main.py 開始，會先從 cog/ 讀取相依 .py檔案，cog/*.py 定義了斜線指令要執行的行為，若指令有一些非常通用或冗長的函式:例如資料庫接等其他特殊行為。獨立出來的 python 檔案會放在 cog/core 提供引用

### 中電商店
中電商店的主程式是 app.py，網頁框架使用 flask。引入 \templates、\static 靜態資源渲染，使用 \cog\core 裡面的程式和資料庫溝通。


### DataBase
在中電喵的幼貓時期，其實是把所有成員的電電點、CTF題目等動態資料用 JSON 儲存在/DataBase，現在這裡只有幾個檔案需要留意：
- class.json
  - 中電喵有個指令是管理者創建課程，使用者可以在兌換區輸入課程行前信的課程代碼領取課程身分組存取課程用頻到，這個檔案儲存了可兌換的課程資料
- server.config.json
  - 存放中電會 Discord 伺服器內的特殊頻道、表情符號 ID。程式運行中會
- server.config-alph.json
  - server.config 的複製檔案，但是所有頻道和表情 ID 都是來自另一個和中電會 Discord 社群相同的伺服器，開發人員可以使用自己的 bot 在 alph 伺服器測試開發中的功能
- slot.json
  - 中電商店抽獎券

