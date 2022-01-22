# Crud API With ExpresJS
Simple crud-api program build in ExpressJS and MongoDB. Then using Postman for testing api program.
### Dependencies
* Express
```sh
npm install express
```
* Mongoose
```sh
npm install mongoose
```
* Corn
```sh
npm install corn
```
### Containerize
- Docker
- Kubernetes

## Using program 
In root folder and open terminal then type command:
```sh
npm install
```
that's prefer for install all module package using in app.
Then run app with command:
```sh
nodemon
```
After that, we'll make container app using docker.
```sh
docker build -f Dockerfile
```
Then check the image created with.
```sh
docker image
```
If any image name/id that's our app success creating container images.
