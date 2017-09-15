debug:
	npm run start

build:
	npm run build	

deploy:
	npm run deploy

run:
	docker run -d --name www \
		--net=searchcgt_default \
		-v `pwd`:/app \
		-e VIRTUAL_HOST=www.cancergenetrust.org \
		zzswang/docker-nginx-react
