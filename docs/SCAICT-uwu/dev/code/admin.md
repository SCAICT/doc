---
sidebar_position: 2
authors: [iach526526]
slug: admin-code
title: admin_role
description: 管理者指令
---
# admin_role
admin_role 裡面的指令使用都和伺服器管理有關，大部分都是擁有伺服器最高管理權限的帳號才可以使用的指令。使用前應該先檢查發起命令的用戶：
```ctx.author.guild_permissions.administrator```
若得到 false 應該直接拒絕執行。

## 發送禮物指令

使用 ```discord.utils.find``` 搜尋使用者名並發起私訊傳送獎勵按鈕，因為遍歷需要花一點時間，所以呼叫 ```await ctx.defer()``` 先在 Discord 顯示中電喵正在思考，避免回應超時被 Discord kill 掉。

Discord 會在按鈕傳送時給每個按鈕一個唯一 ID，btnID （即是訊息 ID），中電喵會把 btnID、獎品類型、贈送數量、收件者存入 gift 表格。
```bash
DB> describe gift;
+-----------+-------------------------------+------+-----+---------+-------+
| Field     | Type                          | Null | Key | Default | Extra |
+-----------+-------------------------------+------+-----+---------+-------+
| btnID     | bigint                        | NO   | PRI | NULL    |       |
| type      | enum('電電點','抽獎券')        | YES  |     | NULL    |       |
| count     | int                           | YES  |     | NULL    |       |
| recipient | varchar(32)                   | YES  |     | NULL    |       |
+-----------+-------------------------------+------+-----+---------+-------+
```

當收件者按下按鈕時，中電喵會用按鈕 ID 檢索得到管理員設定給這個按鈕的的禮物和數量並算入收件人持有的物品紀錄，此時獎品才會正式包含在該使用者的持有點數表格裡面，並從 gift 刪除這筆待領取紀錄。

### 常見問題

- 禮物送錯人怎麼辦？
  - 刪除私訊的禮物按鈕（未實裝）
  - 刪除 SQL 資料庫裡面對應的資料，建議使用唯一的 btnID 比對直接刪除，如果不確定 btnID 必須使用至少兩個 column 的狀態比對精準刪除（例如收件人名稱和 btnID），否則可能會誤刪資料
  - 刪除範例：```DELETE FROM `gift` WHERE `btnID`={btnID} AND recipient={somebody}```

### 小~~事故~~（故事）

在送禮指令剛被新增的時候收件者點下按鈕後是讀取儲存於按鈕物件的屬性裡面的，但是沒過多久發現只要重新啟動服務後物件屬性存放的資料就會消失，點下去就是空包彈，會幫收件人的持有點數 +0 ，才改成用 btnID 去比對資料庫中既存未被點擊的按鈕。
