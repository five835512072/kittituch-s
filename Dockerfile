FROM node:16-alpine

WORKDIR /usr/src
COPY . /usr/src
RUN npm install

EXPOSE 1112


CMD [ "npm", "run", "dev"]
