FROM node:17-alpine

RUN mkdir /theforge.band
WORKDIR /theforge.band

RUN apk add --update --virtual .tmp-deps python3 make g++ && \
  rm -rf /var/cache/apk/*

COPY package.json .
RUN npm install --quiet

RUN apk del .tmp-deps

COPY . .

RUN npm run build
