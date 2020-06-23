FROM node:10.9.0-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci

COPY . .
ARG NODE_ENV="container"
ENV NODE_ENV ${NODE_ENV}

EXPOSE 8080

CMD [ "npm", "run", "container" ]
