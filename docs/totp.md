---
sidebar_position: 5
---

# Google 兩步驟驗證

## 背景介紹

為了保障帳號安全，中電會要求所有成員在使用 Google 帳號登入時必須啟用雙重認證。這一額外的安全措施能有效防止未經授權的存取，保護您的個人資料和敏感資訊。本文將詳細介紹如何完成這一認證過程，並提供必要的技術組態和操作指引。

## 兩步驟驗證原理

雙重認證（2-factor authentication），也稱為多重認證（MFA，multi-factor authentication），是在您輸入密碼後，要求您再提供一個額外的驗證碼。這個驗證碼通常由專門的應用程序生成，如 Google Authenticator，或者由安全網站動態生成和發送。這樣，即使密碼被盜，攻擊者也無法進入您的帳戶，因為他們無法獲取該驗證碼。

## 使用方式

### 1. 登入 Google 帳號

首先，當您在登入中電會網站時，會跳轉到 Google 的認證頁面，要求您輸入帳號和密碼。這是登入的第一步。

### 2. 啟動兩步驟驗證

在成功輸入正確的帳號和密碼後，系統將提示您進行雙重認證。此時，您需要根據以下步驟操作：

1. **點擊「試試其他方法」**
   當系統提示需要驗證碼時，選擇「試試其他方法」選項。
2. **從 Google Authenticator 應用程式取得驗證碼**
   通過以下網址取得臨時認證碼（該認證碼在30秒後自動銷毀）：[https://auth.scaict.org](https://auth.scaict.org)。在這個網址需要先登入您的 Google 帳號，才能取得認證碼。

### 3. 加入白名單

如果您需要加入白名單以便使用此認證服務，請在以下 GitHub 頁面建立一個新的 issue：
[https://github.com/SCAICT/google-totp/issues/new/choose](https://github.com/SCAICT/google-totp/issues/new/choose)。建立 issue 後，請有權限的人員在 `app/config.ts` 檔案中加入您的 email。

### 4. 範例組態

以下是 `app/config.ts` 檔案的範例組態：

```javascript
export const Config = {
  authUrl: "https://accounts.google.com/o/oauth2/v2/auth",
  clientId: "376162470712-ph439pqes52snidcvoluamh36e36j23s.apps.googleusercontent.com",
  redirectLocation: "totp",
  issueUrl: "https://github.com/SCAICT/google-totp/issues/new/choose"
};

export const AllowedEmails = [
  "leolee50910@gmail.com",
  "elvismao.070512@gmail.com",
  "lzspriv@gmail.com", // https://github.com/SCAICT/google-totp/issues/1
  "abel960717@gmail.com", // https://github.com/SCAICT/google-totp/issues/2
  "iach526526@gmail.com", // For Google App Script
  "cw8289502@gmail.com", // https://github.com/SCAICT/google-totp/issues/5
  "genden80@gmail.com", // tyc4d
  "tmting39@gmail.com" // 六月主題課程
];
```


## 注意事項

1. **請勿設定其他金鑰**
   為了避免他人無法登入，請勿設定其他金鑰，所有金鑰必須透過上述設定和流程來產生和管理。
2. **驗證碼安全性**
   驗證碼具有時效性，請確保在規定的時間內使用，過期後需重新取得。

## 結論

雙重認證是保護您帳號安全的有效措施。透過上述步驟，您可以輕鬆完成中電會 Google 帳號的雙重認證過程。這不僅增加了帳號的安全性，也為您的個人和工作資訊提供了更多的保障。如果在使用過程中遇到任何問題，請隨時在 Discord 尋求協助。
