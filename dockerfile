FROM node:current

WORKDIR /app

COPY package.json /app/

COPY package-lock.json /app/

RUN npm install 

COPY src /app/

COPY public /app/

EXPOSE 3000

CMD [ "npm" , "start" ]

