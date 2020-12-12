#  Dockerfile for Node Express Backend api (development)

FROM node:12.20.0-alpine3.10

# ARG NODE_ENV=development

# Create App Directory
RUN mkdir -p /ecoding/ecoding-nodejs-server
WORKDIR /ecoding/ecoding-nodejs-server

# Install Dependencies
COPY package*.json ./

RUN npm ci

# Copy app source code
COPY . .

# Exports
EXPOSE 8080

CMD ["npm","start"]