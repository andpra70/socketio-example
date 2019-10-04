#!/bin/bash

echo "SOCKETIO DEMO"

kill `lsof -i:4443 -t`

id
node -v
npm -v

npm install
#node server.js &
#sleep 1
#node client.js &

node https-server.js &
sleep 1
curl  -v -s "https://localhost:4443" \
  --key ./certs/client.key \
  --cert ./certs/client.cert \
  --cacert ./certs/ca-cert.pem

node https-client.js

#netstat -putan | grep LIST 

lsof -i:4443

echo "---> https://localhost:4443/"

sleep 180


