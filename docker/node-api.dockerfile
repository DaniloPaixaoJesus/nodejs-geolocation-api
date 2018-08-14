FROM node:latest
MAINTAINER Danilo Paixao
ENV NODE_ENV=development
COPY /server /var/www
WORKDIR /var/www
RUN npm install 
ENTRYPOINT ["npm", "start"]
EXPOSE 3000