FROM node:latest

WORKDIR /app/backend

COPY package*.json ./
RUN npm install

EXPOSE 3000

CMD ["node", "App.js"]
