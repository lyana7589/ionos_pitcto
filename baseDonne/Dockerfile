FROM ubuntu
ENV DEBIAN_FRONTEND=noninteractive
RUN apt update -y
RUN apt install mysql-server -y
RUN apt install nano -y
COPY pictopicto.sql  /tmp
RUN /bin/bash -c "/usr/bin/mysqld_safe  &" && sleep 15 && mysql -uroot </tmp/pictopicto.sql
RUN sed -i 's/127.0.0.1/0.0.0.0/g' /etc/mysql/mysql.conf.d/mysqld.cnf
CMD mysqld_safe

##creer l image
#docker build -t mysql_image .
#docker image rm 
##creer le container
#docker run -itd --name mysql_container --hostname mysqldb --network ecam  -p 3307:3306 mysql_image
#docker rm mysql_container -f
#docker exec -it mysql_container bash
#mysql -u root -p root
#connexion depuis machine host
#mysql -h localhost:3307 -uemma -p
#mysql -h mysqldb -uemma -p