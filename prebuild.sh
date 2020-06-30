#!/bin/bash
source .env

if [ $1 = "dev" ]
then
  sed "s|{{API_URL}}|http://localhost:$DEV_API_PORT|g" "client/$CLIENT_CONFIG.template" > "client/$CLIENT_CONFIG"
else
  sed "s|{{API_URL}}|$PROD_API_HOST:$PROD_API_PORT|g" "client/$CLIENT_CONFIG.template" > "client/$CLIENT_CONFIG"
fi

cd client && npm install --package-lock-only --silent && cd ..
