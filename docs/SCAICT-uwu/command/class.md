---
sidebar_position: 4
authors: [iach526526]
slug: class
title: 身分組
description: 本條目包括創建、發送、領取特殊身分組
---
中電喵支援輸入兌換代碼獲得一些不公開的身分組，這項功能提供主題課程、~~工人交接~~、~~特殊身分組購買~~使用。到 #🎁兌換區 輸入擁有的兌換代碼就會生效兌換成獎勵

![alt text](../../../static/img/exchange.png)

> 註：不公開身分組指的是你無法在頻道與身分組列表透過點選主動獲得的身分組

# 創建
- 限制使用權限:true
  - admin only
> ```add_class {class_code} {name} {theme}{teacher}{time}```
- class_code：兌換代碼
- name：代碼對應分送的身分組名稱
- theme：課程主題，用於領取時顯示領了什麼課的身分組
- time：課程時間，用於領取顯示課程時間

這些參數會在資料庫 (JSON) 寫入一筆資料，提供日後的輸入做比對
<!-- 我覺得它應該被改成 SQL 或 SOL lite配合日後的其他禮物領取 -->
## 領取身分組
到 #🎁兌換區 點擊按鈕即可輸入
