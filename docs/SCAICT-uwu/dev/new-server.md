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
## DNS 定向（可選）
如果你是中電喵飼養員，伺服器搬家後需要重新設定中電商店網址所指向的主機；如果在自己的電腦測試，則不用操作此步驟