FROM node:latest

WORKDIR /usr/scr/app

COPY package*.json ./

# RUN npm install 

COPY . .

EXPOSE 1128

RUN npm run webpack

CMD ["npm", "start"]