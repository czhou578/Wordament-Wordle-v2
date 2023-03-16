FROM node:latest

WORKDIR /app

COPY ./my-app/package.json .

RUN npm install

COPY ../my-app/public/index.html ./
COPY . ./

EXPOSE 3000

CMD ["npm", "start"]

