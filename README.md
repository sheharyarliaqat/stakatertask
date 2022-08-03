# stakatertask

-Created two services one for backend and one for front end.

-In the frontend file we access the Hello NAME through the passed variable. and through the  Date(); method of js, we get the current date and time and append the Hello and name text to it, and show it on the front end.

-In backend.js the app is connected to server through app.listen() method and listens to port 8080. 
Moreover, the Environment variable "NAME" is printed with a Hello message as per task requirement.

-Then i created the docker image from the docker file in which i defined the node version and dependencies along with cmd command and defined the port on which the container will run. Then I hosted the docker image to docker hub and tested the docker container on localhost:8080.

-Then i used minikube for kubernetes deployment and testing.
