FROM node:16

WORKDIR /app

ADD . .

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev:docker"]