FROM node:12-alpine

WORKDIR /api
COPY . .

RUN npm install

EXPOSE 8000