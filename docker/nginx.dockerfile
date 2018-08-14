FROM nginx:latest
MAINTAINER Danilo Paixao
COPY /client/dist/angular-materialdesign /var/www/public
COPY /docker/config/nginx.conf /etc/nginx/nginx.conf
COPY /docker/config/ssl/server.key /etc/nginx/ssl/server.key
COPY /docker/config/ssl/server.crt /etc/nginx/ssl/server.crt
RUN chmod 755 -R /var/www/public
EXPOSE 80 443
ENTRYPOINT ["nginx"]
# Parametros extras para o entrypoint
CMD ["-g", "daemon off;"]
