FROM node:13-buster-slim
WORKDIR /usr/src/app
COPY ./src/ .
ADD package.json ./
RUN npm install
COPY .env .
EXPOSE 3300
CMD ["node", "index.js"]
