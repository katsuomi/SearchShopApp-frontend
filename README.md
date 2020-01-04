# SearchShopApp-frontend

## 💬 About

近くのお店が検索できるアプリ-SearchShopApp-のフロントエンドです。
JavaScriptライブラリReact.jsを利用。

## 🌻 Version

||Name|Version|What|
|:-:|:-:|:-:|:-|
|frontend|TypeScript|3.5.3|言語|
||npm|6.7.0|パッケージ管理システム|
||React.js|16.11.0|JavaScriptライブラリ|

## 🔰 Install & Setup

#### 1. Dockerのダウンロード

下記より、`Docker For Mac` か `Docker For Windows`をインストールして下さい。  
[https://docs.docker.com/install/](https://docs.docker.com/install/)

#### 2. ソースコードの取得

```bash
git clone https://github.com/katsuomi/SearchShopApp-frontend.git
cd SearchShopApp-frontend
```

#### 3. 起動

下記の手順で、コンテナを起動させて下さい。

```bash
# Dockerイメージの作成
$ docker-compose build

# Dockerコンテナの起動
$ docker-compose up

下記のコンテナが起動していれば、OKです。

|host||
|:-:|:-:|
|frontend|[http://localhost:3000](http://localhost:3000)|

## ⚠️ note
**envファイルに環境変数の設定が必要です。**

.envファイルを作成後、以下のように値を入れてください。

(.env)
REACT_APP_API_KEY = "*********************************"
REACT_APP_RAILS_ROOT_URL = "http://localhost:3000/api/v1"
REACT_APP_GURUNAVI_ROOT_URL = "https://api.gnavi.co.jp/RestSearchAPI/v3/"
REACT_APP_GOOGLE_MAPS_API_KEY = "*********************************"
```
