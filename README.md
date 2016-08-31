# docker-env
  WebApp build on top of docker including Caching, Database and Web Server


## Important docker command
  - Passing a volume to a running container:`docker run -p 8080:3000 -v /var/www node`
  - Inspect container: `docker inspect {container_name}`
  - Customizing volume: `docker run -p 8080:3000 -v $(pwd):/var/www node`
  - Linking Containers: Legacy Linking vs Bridge Network
  - Legacy Linking (easier on dev not for prod)
  `docker run -d -p 5000:5000 --link {container_name}:{container_alias} {container_to_run}
  - Bridge Network (production)
    - `docker network create --driver bridge {network_name}`
    - `docker run -d --net={network_name} --name mongodb mongodb`
  - When using bridge we should create the network
    1. `docker network create --driver bridge network1`
    2. `docker run -d --net=network1 --name mongodb mongo`
    3. docker run -d --net=network1 --name nodeapp -p 3000:3000 doron2402/node`

## Site
  - Run (without dockerfile) `docker run -p 8080:3000 -v $(pwd):/var/www -w "/var/www" node npm start`
  - Build image (with Dockerfile) `docker build -t doron2402/node-app .`
  - Run `docker run -d -p 8080:3000 doron2402/node-app`


## How to start
  - Site


## Contribute

