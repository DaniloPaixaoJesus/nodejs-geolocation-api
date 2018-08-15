FROM node:latest
MAINTAINER Danilo Paixao
ENV NODE_ENV=development
COPY /server /var/www
WORKDIR /var/www
#RUN npm install pm2 -g
#http://pm2.keymetrics.io/docs/usage/docker-pm2-nodejs/
RUN npm install 
ENTRYPOINT ["npm", "start"]
EXPOSE 3000