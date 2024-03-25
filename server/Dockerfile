FROM node:latest

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY src/ ./src

EXPOSE 5000

CMD ["node", "server.js"]
