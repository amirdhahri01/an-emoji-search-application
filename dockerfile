from node

WORKDIR /app

COPY package.json /app/

RUN npm install 

COPY src /app/

COPY public /app/

EXPOSE 3000

CMD [ "npm" , "start" ]

