# 關於這個專案



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
## Link start！中電喵，啟動！！！


### \.github
在 GitHub repository 的



### 中電喵本體
中電喵聊天程式從 main.py 開始，會先從 cog/ 讀取相依 .py檔案，cog/*.py 定義了斜線指令要執行的行為，若指令有一些非常通用或冗長的函式:例如資料庫接等其他特殊行為。獨立出來的 python 檔案會放在 cog/core 提供引用

### 中電商店
中電商店的主程式則是 app.py，引入 \templates、\static 靜態資源渲染，使用 \cog\core 裡面的程式存取資料庫。
