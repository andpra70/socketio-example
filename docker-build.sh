#!/bin/bash

docker login
docker build . -t node-socket-io

