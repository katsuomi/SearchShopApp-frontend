# SearchShopApp-frontend

## 💬 About

近くのお店が検索できるアプリ~SearchShopApp~のフロントエンドです。
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
$ docker-compose up -d

# 確認
$ docker-compose ps
```

下記のコンテナが起動していれば、OKです。

|host||
|:-:|:-:|
|frontend|[http://localhost:3000](http://localhost:3000)|
