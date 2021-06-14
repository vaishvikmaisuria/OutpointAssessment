build : 
	docker-compose up --build

down :
	docker-compose down --remove-orphans

run : 
	docker-compose up

clean: 
	docker system prune 
