FROM node:14
WORKDIR /usr/app/datasets-apis
COPY package*.json ./
RUN npm install 
COPY . . 
EXPOSE 3000
CMD npm start