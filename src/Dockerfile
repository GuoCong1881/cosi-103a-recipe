FROM node:latest

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY ../public/ ./public
COPY .. ./src

EXPOSE 3000

CMD ["npm", "start"]
