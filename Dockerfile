FROM node:12-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i
COPY . .
CMD [ "npm" ,"run","start" ]
