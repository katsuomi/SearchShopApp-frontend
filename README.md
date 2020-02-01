# SearchShopApp-frontend

## 💬 About

This repository is frontend on SearchShopApp,which can find nearby restaurants.

## 🌻 Version

||Name|Version|What|
|:-:|:-:|:-:|:-|
|frontend|TypeScript|3.5.3|High-level languages|
||npm|6.7.0|Package management system|
||React.js|16.11.0|JavaScript Library|

## 🔰 Install & Setup

#### 1. Download Docker

The following procedure, please install `Docker For Mac` or  `Docker For Windows`  

[https://docs.docker.com/install/](https://docs.docker.com/install/)

#### 2. Getting source code

```bash
git clone https://github.com/katsuomi/SearchShopApp-frontend.git
cd SearchShopApp-frontend
```

#### 3. Start-up

The following procedure, start the container.

```bash
# Create Docker image
$ docker-compose build

# Start Docker container
$ docker-compose up
```

If the following local server started, it's ok. 

|host||
|:-:|:-:|
|frontend|[http://localhost:3000](http://localhost:3000)|

## ⚠️ note
**Environment variable setting is required.**

Please describe the following settings after creating .env file.

```(.env)
REACT_APP_API_KEY = "*********************************"
REACT_APP_RAILS_ROOT_URL = "http://localhost:3000/api/v1"
REACT_APP_GURUNAVI_ROOT_URL = "https://api.gnavi.co.jp/RestSearchAPI/v3/"
REACT_APP_GOOGLE_MAPS_API_KEY = "*********************************"
```
