FROM node:12.16.0-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci

COPY . .
ARG NODE_ENV="container"
ENV NODE_ENV ${NODE_ENV}
EXPOSE 3003

CMD [ "npm", "run", "container" ]