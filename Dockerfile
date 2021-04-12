FROM node:stretch-slim

RUN mkdir -p /opt/app
WORKDIR /opt/app
#RUN adduser -S app
#COPY addressbook/ .

COPY . .

RUN npm install

#RUN chown -R app /opt/app
#USER app

EXPOSE 3000
#CMD [ "npm", "run", "pm2" ]

CMD [ "npm", "start" ]