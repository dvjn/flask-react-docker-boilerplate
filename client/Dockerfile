FROM node:current-buster-slim

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./
RUN npm install --silent

COPY . ./

EXPOSE 3000
CMD ["npm", "start"]
