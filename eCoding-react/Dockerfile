# Dockerfile for client

# Stage 1: Build react client
FROM node:12.20.0-alpine3.10

# Working directory be app
WORKDIR /ecoding/ecoding-react-client

COPY package*.json ./

# Install dependencies
RUN npm install

# copy local files to app folder
COPY . .

EXPOSE 3000

CMD ["npm","start"]