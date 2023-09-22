FROM node/alpine

# it's an image version coming from a specific distro
# node is the image coming from the alpine distro
# alpine is a small distro meaning it doesn't have a lot of packages so if my application doesn't have a lot of packages alpine is a good choice

WORKDIR /app 

#the app here is a directory that is inside of my container. the app directory is created when this file runs

COPY package*.json ./

#this copies my package.json file from my project onto the app directory

RUN npm install

#this runs npm install installing node modules into my container

COPY . .

#copying my project onto the app directory

EXPOSE 3000

#opening the 3000 port of the container so that this application can use it

CMD npm run dev

#running the application in docker

# FROM node:16

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# CMD ["node", "app.js"]
