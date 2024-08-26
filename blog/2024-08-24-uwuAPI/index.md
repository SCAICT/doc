---
slug: gift-api
title: 中電喵送禮 by Discord API
authors: [iach526]
tags: [HITCON 2024,SCAICT-uwu]
---

中電會報名了 HITCON 2024 的社群擺攤，為此資訊組設計了[中電 bar](https://github.com/SCAICT/2024-HITCON-barcode) 讓大家來攤位遊玩。遊戲過關後會私訊通知並發送獎勵，但之前做的發送獎勵只能透過在頻道使用斜線指令使用 pycord 傳訊息 ，在這個 case 得直接用在網頁程式裡面呼叫，這勢必得修改一點點程式，因此催生了這篇部落格教學
<!-- truncate -->

要操控中電喵(或你的 bot) 的形象幫忙發訊息是一個很常見的需求，中電喵公告也是用相同的原理。Discord 提供了 API 讓我們呼叫，只要給 API bot token 和要傳送的訊息，就能達成我們的目的。本篇文章會用 python 的 request 套件示範

## 常數定義
本文章中若該程式碼區塊若沒有另外定義以下變數值，均採用這裡的定義方式。
```python
discord_token = "Discord Bot Token"
target_user_id = "要送訊息的目標帳號 ID"
guild_id = "伺服器 ID ，我們會希望私訓的對象和 bot 在同一個伺服器"
```
## 步驟 0: 驗證該使用者是否存在
這同時也是一個簡單且完整的 GET 請求示範，設定 header、url 和 payload並發出請求。我建議在發送 DM 訊息之前先檢查使用者是否在伺服器裡面。如果不存在，會回傳 JSON：```{'message': 'Unknown Member', 'code': 10007}```
<!-- 我沒有嘗試過如果沒有共同伺服器能不能發訊息 -->
```python
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
:::tip
requests.get 一定要設定 timeout，否則網路不穩定或對方沒有回應時會一直等待回應，非常占用資源 ~~，而且不這樣寫 pylint 也不會過~~
::::
## 步驟 1: 設定 API 參數

我們需要準備發送訊息 API 需要的參數。包括 API 的網址、請求標頭(headers) 和發送的內容 (payload)。

```python
url = f"https://discord.com/api/v10/channels/{dm_room}/messages"
headers = {
    "Authorization": f"Bot {discord_token}",
    "Content-Type": "application/json",
}
```

- **`url`**: 用來指定發送訊息的目標頻道，這裡的 `dm_room` 是一個私訊頻道的 ID。
- **`headers`**: 包含了機器人的 token 和內容類型 (JSON)。

## 步驟 2: 填入訊息內容

接下來，我們來設計訊息的內容，你可以只塞字串做成純文字訊息，這裡我加入一個 embed 和一個 button。

### Embeds

Embeds 是一種格式化的訊息，可以包含標題、描述、顏色等豐富的內容。

```python
embed = {
    "title": f"你收到了 {count} {gift_type}!",
    "color": 3447003,  # 藍色
    "description": ":gift:",
}
```

### 按鈕 (Components)

按鈕是一個互動元件，當用戶點擊時可以觸發一個動作。在 Discord 中，按鈕可以有多種樣式 (style)，例如：一次性按鈕、連結按鈕等等。

```python
button = {
    "type": 1,
    "components": [
        {
            "type": 2,
            "label": "前往確認",
            "style": 5,  # `5` 表示 Link Button
            "url": "https://store.scaict.org",  # 要導向的連結
        }
    ],
}
```

- **`type`**: 表示這是一個互動元件的容器 (Action Row)，`1` 代表 Action Row。
- **`components`**: 是一個包含具體元件的列表，在這個範例中，我們有一個按鈕。
  - **`type`**: `2` 表示這是一個按鈕。
  - **`label`**: 按鈕上顯示的文字。
  - **`style`**: 按鈕的樣式，`5` 表示這是一個連結按鈕 (Link Button)。
  - **`url`**: 按鈕的目標網址，點擊後將導向此連結。

#### 下表為 components 底下元素常用的屬性，更多內容可以參考(官方文檔)[https://discord.com/developers/docs/interactions/message-components]

| 屬性        | 類型   | 說明                                                                                             |
| ----------- | ------ | ------------------------------------------------------------------------------------------------ |
| `type`      | 整數   | 按鈕的類型。`1` 表示 Action Row，用來包含多個按鈕；`2` 表示按鈕本身。                            |
| `label`     | 字串   | 按鈕上顯示的文本。最多 80 個字元。                                                               |
| `style`     | 整數   | 按鈕的樣式。可選值包括 `1` (Primary)、`2` (Secondary)、`3` (Success)、`4` (Danger)、`5` (Link)。 |
| `url`       | 字串   | 當 `style` 設為 `5` 時，需要設置此屬性，指定按鈕指向的 URL。                                     |
| `custom_id` | 字串   | 用於識別按鈕的唯一 ID（僅在 `style` 不為 `5` 時使用）。                                          |
| `disabled`  | 布林值 | 是否禁用此按鈕。`True` 為禁用，`False` 為啟用。默認為 `False`。                                  |


| `style` 數值 | 按鈕樣式         | 說明                                          |
| ------------ | ---------------- | --------------------------------------------- |
| `1`          | Primary Button   | 藍色按鈕，用於主要操作。                      |
| `2`          | Secondary Button | 灰色按鈕，用於次要操作。                      |
| `3`          | Success Button   | 綠色按鈕，用於表示成功或正面的操作。          |
| `4`          | Danger Button    | 紅色按鈕，用於表示危險或破壞性的操作。        |
| `5`          | Link Button      | 透明背景帶下劃線的文字按鈕，用開啟 URL 連結。 |
## 步驟 3: 組裝請求的 JSON 資料

最後，需要將 Embeds  message 和按鈕組裝成一個 JSON 物件，並透過 API 發送請求。

```python
json_data = {
    "embeds": [embed],
    "components": [button],
    "tts": False,  # Text-to-speech, 默認為 False
}
```

這裡我們將 Embeds  message 放入 `embeds` 中，並將按鈕放入 `components` 中。

## 步驟 4: 發送請求

當所有的參數準備好後，我們可以使用 `requests` 模組來發送 POST 請求。

```python
response = requests.post(url, headers=headers, json=json_data)
if response.status_code == 200:
    print("訊息發送成功!")
else:
    print(f"發送失敗，錯誤代碼: {response.status_code}")
```

## 總結
這篇 blog 教你先用 GET 看看用戶是否存在某伺服器，然後傳送一個包含按鈕、embed 的 DM 訊息給對方。你學會了嗎？