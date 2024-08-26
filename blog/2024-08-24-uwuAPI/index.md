---
slug: gift-api
title: 中電喵送禮 by Discord API
authors: [iach526]
tags: [HITCON 2024,SCAICT-uwu,中電喵]
---

中電會報名了 HITCON 2024 的社群擺攤，為此我們資訊組設計了[中電 bar](https://github.com/SCAICT/2024-HITCON-barcode) 讓大家來攤位遊玩。遊戲過關後會私訊通知並發送獎勵，但之前做的發送獎勵只能透過在頻道使用斜線指令使用 pycord 傳訊息 ，在這個 case 得直接用在網頁程式裡面呼叫，這勢必得修改一點點程式，因此催生了這篇部落格教學
<!-- truncate -->

要操控中電喵(或你的 bot) 的形象幫忙發訊息是一個很常見的需求，中電喵公告也是用相同的原理。Discord 提供了 API 讓我們呼叫，只要給 API bot token 和要傳送的訊息，就能達成我們的目的。本篇文章會用 python 的 request 套件示範

## 常數定義
```
discord_token = "Discord Bot Token"
target_user_id = "要送訊息的目標帳號 ID"
guild_id = "伺服器 ID ，我們會希望私訓的對象和 bot 在同一個伺服器"
```
<!-- 我沒有嘗試過如果沒有共同伺服器能不能發訊息 -->
## 步驟 0: 驗證該使用者是否存在
```
url = f"https://discord.com/api/v10/guilds/{guild_id}/members/{target_user_id}"
headers = {
    "Authorization": f"Bot {discord_token}",
    "Content-Type": "application/json",
}

response = requests.get(url, headers=headers, timeout=10)
user_data = response.json()

if response.status_code != 200:
    return jsonify({"error": "Failed to fetch user information in tg id"}), response.status_code
```
## 步驟 1: 設定 API 參數

首先，我們需要準備發送請求所需的 API 參數。這包括 API 的網址、請求標頭(headers) 和發送的內容 (payload)。

```python
url = f"https://discord.com/api/v10/channels/{dm_room}/messages"
headers = {
    "Authorization": f"Bot {discord_token}",
    "Content-Type": "application/json",
}
```

- **`url`**: 用來指定發送訊息的目標頻道，這裡的 `dm_room` 是一個私訊頻道的 ID。
- **`headers`**: 包含了機器人的授權 token 和內容類型 (JSON)。

## 步驟 2: 設計訊息內容

接下來，我們來設計訊息的內容，包括一個嵌入消息和一個按鈕。

### Embeds 訊息

Embeds 訊息 是一種格式化的訊息，可以包含標題、描述、顏色等豐富的內容。在這個範例中，我們創建了一個簡單的嵌入消息來表示收到的禮物。

```python
embed = {
    "title": f"你收到了 {count} {gift_type}!",
    "color": 3447003,  # 藍色
    "description": ":gift:",
}
```

