FROM node:latest

ADD . /home/test/

RUN apt-get update && apt-get install lsof && ls -al /home/test

# USER 1000

WORKDIR /home/test

CMD ['/bin/sh']