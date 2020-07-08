FROM node:14-alpine

WORKDIR /api
COPY . .

RUN npm install

EXPOSE 8000