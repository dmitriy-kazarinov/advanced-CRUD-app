FROM node:7
MAINTAINER Dmitry Dulin

ADD ./ /app
WORKDIR /app

COPY package.json /app
RUN npm install
COPY . /app

CMD npm start
EXPOSE 8081
