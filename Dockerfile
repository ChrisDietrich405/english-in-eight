FROM node:18

WORKDIR /app
# workdir is similar to cd in the terminal, simply switching to this app folder

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000 
# this container is using port 3000

CMD ["next", "start"]
