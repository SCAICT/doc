---
sidebar_position: 5
---

# 如何新增公告及活動?

在以下情況請**直接編輯**此倉庫

* 調整網頁排版、字體大小
* 新增贊助廠商
* 新增參與社團
* 更改介紹文字及目標
* 更改社群連結

以下中電會網站資料請至[website-data](https://github.com/SCAICT/website-data)編輯

* 更改首頁 LCD 屏幕公告
* 新增/編輯活動

## 如何添加公告?

> 以下操作皆在 [website-data](https://github.com/SCAICT/website-data)

### 首頁公告

![](https://raw.githubusercontent.com/SCAICT/website-data/main/img/home%20boolean.png)

請編輯 [home.json](https://github.com/SCAICT/website-data/blob/main/home.json) 檔案的公告。

```json
{
    “lcd”: {
        “text”: “顯示文字”,
        “link”: “下方按鈕連結”
    }
}
```

### 活動

請以**完全相同格式**添加活動至 [events.md](https://github.com/SCAICT/website-data/blob/main/events.md) 檔案。沒有長度限制，過期活動需手動移除。

```markdown
# 中電會聯合迎新

*   一年一度中電會的電資社團聯合迎新開始報名了！<br>這次的地點在台中高工。透過這次的聯合迎新，各位可以多多認識其他社團和結交各大電神喔！另外，這次活動包含 Python 基礎和爬蟲，也是個學習 Python 的好機會，快點來報名吧！
*   11/12（日）9：30 ～ 17：00
*   台中高工 資訊科工廠四
*   200 元
*   https://scaict.org/src/img/%E8%83%8C%E5%BD%B1.webp
```

#### 注意事項

* 請勿添加其他 markdown 語法，若需要換行請使用 `<br>`。空白行將忽略，可視整潔需求添加。
* 為維持版面整潔，請盡量保持活動訊息在三行以內，日期、時間、地點、費用一行以內。
* 圖片可選，請貼上圖片連結。若無圖片可以省略。
*活動部屬需要約 30 秒，請耐心等待。

## 活動公告部屬流程

GitHub Action 會在你編輯活動公告後自動將其轉成 Json 格式供網站前端使用

```mermaid
graph TD
  A[Push Event] —>|events.md, convert.js| B(Trigger Workflow)
  B —> C{Paths Match}
  C —>|Yes| D[Checkout Code]
  D —> E[Setup Node.js]
  E —> F[Run Script]
  F —> G[Commit and Push if Changed]
  G —>|Yes| H[Update events.json]
  G —>|No| I[No changes in events.json]
  H —> J[Finish]
  I —> J[Finish]
  C —>|No| J[Finish]

```