FROM node:10.16-alpine

WORKDIR /SearchShopApp-frontend
ADD . /SearchShopApp-frontend

RUN npm install