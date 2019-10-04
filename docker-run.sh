#!/bin/bash

source ./docker-build.sh

docker run -ti --rm --name test --entrypoint "/bin/bash" node-socket-io
