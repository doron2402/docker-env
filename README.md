# docker-env
  WebApp build on top of docker including Caching, Database and Web Server


## Important docker command
  - Passing a volume to a running container:`docker run -p 8080:3000 -v /var/www node`
  - Inspect container: `docker inspect {container_name}`
  - Customizing volume: `docker run -p 8080:3000 -v $(pwd):/var/www node`


## Site
  - Run `docker run -p 8080:3000 -v $(pwd):/var/www -w "/var/www" node npm start`
## How to start

## Contribute

