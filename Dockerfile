FROM node:latest

WORKDIR /app

COPY ./my-app/package.json .

RUN npm install
COPY . /usr/app/

EXPOSE 3000

CMD ["npm", "start"]

