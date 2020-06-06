FROM node:12

WORKDIR /app

COPY package.json /app/

RUN npm install

RUN npm build

COPY ./ /app/

EXPOSE 8080

CMD npm run dev
