FROM node:8

COPY package*.json ./

RUN npm config set registry http://registry.npmjs.org/  

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]
