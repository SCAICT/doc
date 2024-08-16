---
sidebar_position: 2
authors: [iach526526]
slug: newserver
title: 搬家後的環境準備
description: 浪跡天涯客，何處不是家？
---
## 安裝 git
為了更方便的從遠端更新程式資料，需要安裝 git
```
sudo apt-get install git-all
```
然後 clone 這個 repo
```bash
git clone https://github.com/SCAICT/SCAICT-uwu.git
```
## 更新 apt install
```
sudo apt update
sudo apt upgrade -y
```
## Python
### 安裝 python 3.11
```
sudo apt install python3.11
```
### 設定虛擬環境並安裝必要 package
這雖然不是必要的，但我們強烈建議對安裝的 package 做獨立的管理，因為中電喵可能不支援某些 package 的新版本
```
apt install python3-virtualenv
```
```
virtualenv env-uwu
source env-uwu/bin/activate
pip install -r requirements.txt
```
## MySQL（或是mariadb）
```
sudo apt install mysql-server -y
sudo mysql_secure_installation
sudo systemctl status mysql
```
### MySQL 資料庫和使用者設定
```mysql
CREATE DATABASE `Discord`;
CREATE USER 'user_name'@'%' IDENTIFIED BY 'password';--設定給程式連接的資料庫帳號，這要一併輸入在 .env
GRANT SELECT, INSERT, UPDATE, DELETE ON `Discord`.* TO `user`@`%`
```
### 建立需要的表格
參見[備份資料庫](./maintain.md#定期備份資料庫)搭配表格模板使用
## 網站部署
中電商店使用 flask 為框架，在本機測試，只需要使用指令
```
flask run
```
這預設會在```http://127.0.0.1:5000```開啟網頁服務。若需要讓外網可以連接，我們推薦使用 Nginx 作為網站伺服器

### DNS 定向
確保 Domain 確實指向伺服器主機
### 安裝 Nginx
```bash
sudo apt update
sudo apt install nginx
```
### 撰寫設定檔
在 /etc/nginx/sites-available/ 目錄下創建一個新的 config 檔，以網域名稱當作檔名，這裡以網域```store.scaict.org```舉例：
```
server {
    listen 80;
    server_name store.scaict.org;

    location / {
        proxy_pass http://127.0.0.1:5000;  #確定 flask 實際執行的 port 號和這裡吻合
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```
### 建立連結檔
執行這則指令後，會在 sites-enabled 目錄中創建一個指向 store.scaict.org 配置文件的連結檔，使得 Nginx 能夠讀取並啟用這個網站配置，且不用把檔案複製兩份。
```
sudo ln -s /etc/nginx/sites-available/store.scaict.org /etc/nginx/sites-enabled/
```
### 測試設定檔(可選)
```
sudo nginx -t
```
### 重開 Nginx
```
sudo systemctl restart nginx
```
