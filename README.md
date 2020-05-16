# test_database
The Repository for testing your API

## 1. Setup MySQL for Database
- Pull docker
```
docker pull mysql
```
- Docker run
```
docker run -d --name=mysql-testing  -e MYSQL_ROOT_PASSWORD=vanilla -e MYSQL_DATABASE=vanilla -p 3300:3306 -v local-datadir:/var/lib/mysql mysql
```
- Docker execution
```
docker exec -it mysql-testing bash
mysql -u root -p

use mydb;
ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY '1234';
flush privileges;
```

## 2. Setup MySQL Workbench 
- Push Table of Database to Docker(MySQL)
```
Open file "test_database.mwb"
Forward Engineering
```

### 3. Setup Backend
- Clone Repo
```
git clone https://github.com/InFacts/testing_api_database
```
- Install dependency on project
```
cd <PATH>/testing_api_database
npm install
```
- Run programe
```
node app.js
```

### 4. API Document
You can view [API Document](https://documenter.getpostman.com/view/5014182/Szmk1vfz?version=latest)


