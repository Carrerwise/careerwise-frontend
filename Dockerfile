FROM node:18-alpine

RUN npm install -g npm@9.6.7
RUN npm install -g ts-node

WORKDIR /app

COPY package*.json ./
RUN npm ci 

COPY . .

CMD [ "npm", "start" ]