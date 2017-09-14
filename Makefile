debug:
	npm start

build:
	npm run build	

deploy:
	rsync -a --exclude='.git/' \
		build/ ubuntu@admin.cancergenetrust.org:~/www

run:
	docker run -d --name www \
		--net=searchcgt_default \
		-v `pwd`:/app \
		-e VIRTUAL_HOST=www.cancergenetrust.org \
		zzswang/docker-nginx-react
