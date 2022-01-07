# App setup
FROM alpine:lastest
WORKDIR /CrudAPI
COPY package.json /CrudAPI
RUN npm install
COPY . /CrudAPI
CMD nodemon
EXPOSE 3000

# Install apache2
FROM alpine:lastest
WORKDIR /var/www/html
RUN apt install apache2
CMD service apache2 start

# Install nginx
FROM alpine:lastest
WORKDIR /var/www/nginx
RUN apt install nginx
CMD service nginx start
