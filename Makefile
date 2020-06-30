start-dev:
	./prebuild.sh dev
	sudo docker-compose -f docker-compose.yml up -d --build

start-prod:
	./prebuild.sh prod
	sudo docker-compose -f docker-compose.prod.yml up -d --build

stop-dev:
	sudo docker-compose -f docker-compose.yml down

stop-prod:
	sudo docker-compose -f docker-compose.prod.yml down
