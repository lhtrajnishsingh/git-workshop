FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
COPY app.js ./
COPY submodule-workshop ./submodule-workshop/

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
