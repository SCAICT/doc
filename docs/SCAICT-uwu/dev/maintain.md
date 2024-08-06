---
sidebar_position: 3
authors: [iach526526]
slug: maintain
title: 維護、部署注意事項
---

# 維護、部署注意事項

現在看到這裡代表你已經準備好成為一個稱職的中電喵飼養員了，中電喵現在是一隻獨立的貓咪，如果你要出遠門的話至少一個月回來看他一次，並教他新的數數方式打發時間看度過失眠的夜晚．．．．．．。

## 如何在伺服器上長時間啟動？
若在伺服器上的專案資料夾執行 "python main.py" 這個指令只會在 ssh 連線階段執行這個工作，這適合短時間的測試，當中斷 ssh 連線後執行的工作會被關閉。所以要用 **nohop** 讓工作可以在背景持續執行。在執行程式指令前加上 nohup，程式所有的 print 或 error 回報預設會在該專案目錄下面的 nohup.out ，想要更改儲存位置和檔名可以使用管道符號。

### 執行中電喵

利用管道符號把程式輸出存在 /var/log/DiscordBot/ ，並用時間命名
- 執行中電喵本體
```bash
nohup python3 main.py &>/var/log/DiscordBot/Log_$(date +%Y-%m-%dT%H-%M-%S).log&
```
- 中電商店
```bash
nohup flask run &>/var/log/uwuStore/Log_$(date +%Y-%m-%dT%H-%M-%S).log&
```
執行後 CLI 會顯示 Process ID，要把它記起來下次要維護關服務的時候進 htop 
## 重新啟動