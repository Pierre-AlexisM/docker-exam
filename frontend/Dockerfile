FROM node:14.16.0-alpine3.13 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
EXPOSE 4000
CMD ["npm", "start"]