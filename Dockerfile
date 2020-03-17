FROM node:13.11.0
WORKDIR /usr/src/app
COPY ./src/ .
ADD package.json ./
RUN npm install
COPY .env .
EXPOSE 3300
CMD ["node", "index.js"]
