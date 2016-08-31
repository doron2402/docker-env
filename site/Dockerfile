FROM node:latest

MAINTAINER Doron Segal  <doron2402@gmail.com>

ENV NODE_ENV=production
ENV PORT=3000

COPY    . /var/www
WORKDIR   /var/www

RUN       npm install

EXPOSE    $PORT

ENTRYPOINT ["npm","start"]

