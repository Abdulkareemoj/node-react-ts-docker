FROM node:14

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 7000

CMD [ "node" "index.js"]