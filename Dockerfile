FROM node:12

WORKDIR /pointing-blackjack

COPY package*.json ./
RUN npm install --production

COPY ./dist .

EXPOSE 8999

CMD ["node", "server.js"]
