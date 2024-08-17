# Jitsi 常用指令

中電會的視訊會議系統是使用Jitsi 作為核心，並使用 ssh 進行維護。

以下指令並不是最完美的做法，但能夠跑起來...

## 晚安 瑪卡巴卡

把整個服務直接砍掉。

```python
 docker stop $(docker ps -q)
```

# Docker 環境

請先進入 Docker 環境，再繼續一下操作：

```bash
docker exec -it jitsi-docker-jitsi-meet-6692439-web-1 /bin/bash
docker exec -it jitsi-docker-jibri-c92026a-web-1 /bin/bash
```
具體的ID可能會不太一樣，請你使用 docker ps 指令來確認

常見編輯檔案如下

```bash
vim config/config.js
vim config/interface_config.js
```

## 更新圖片

前端的一些程式碼放在這裡，你可以在此更新 CSS:

```bash
cd ~/.jitsi-meet-cfg/CONFIG/web/
```

這裡面是網頁使用的檔案。

```bash
cd /usr/share/jitsi-meet
```
基本上就是下載圖片，然後取代原本的。

從官網下載圖片 (記得先 CD 到 image 資料夾)

```bash
cd /usr/share/jitsi-meet/images
wget https://scaict.org/src/img/logo-white.svg -O watermark.svg
wget https://scaict.org/src/img/android-chrome-512x512.png -O jitsilogo.png
wget https://scaict.org/src/img/apple-touch-icon.png -O apple-touch-icon.png
wget https://scaict.org/src/img/logo.svg -O favicon.svg
wget https://scaict.org/src/img/winter-camp.png -O welcome-background.png
```

## 沒事請勿重新 Compose !!!

但如果真的要的話指令如下

```bash
docker compose -f docker-compose.yml -f jibri.yml up -d
docker-compose -f docker-compose.yml -f jibri.yml ps
```

## Vim

### CSS

如果你的 CSS 很亂需要簡單格式化的話，可以輸入以下指令：

```bash
:%s/[{;}]/&\r/g|norm! =gg
```