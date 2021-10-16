#nodeイメージをpullする
FROM node:10.15.3-alpine

#working directory
WORKDIR /app

RUN npm install

COPY ./src .

CMD ["make", "up"]
