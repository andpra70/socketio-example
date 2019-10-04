#!/bin/bash

#openssl req -nodes -new -x509 -keyout server.key -out server.cert
openssl req -nodes -new -x509 -keyout client.key -out client.cert


#openssl genrsa -out ryans-key.pem 2048
#openssl req -new -sha256 -key ryans-key.pem -out ryans-csr.pem
#openssl x509 -req -in ryans-csr.pem -signkey ryans-key.pem -out ryans-cert.pem
#openssl x509 -req -in ryans-csr.pem -signkey ryans-key.pem -out bob-cert.pem
cat server.cert client.cert > ca-cert.pem
#openssl pkcs12 -export -in ryans-cert.pem -inkey ryans-key.pem -certfile ca-cert.pem -out ryans.pfx
