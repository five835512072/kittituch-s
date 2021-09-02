FROM node:16-alpine

WORKDIR /usr/src
COPY . /usr/src
RUN npm install

COPY . /usr/src

EXPOSE 1112


CMD npm start
