From openjdk:19
#liste des install avec && (réduit la talle de l'image \ retrour  à la ligne )
#RUN apt update && apt install curl -y
# creer et acceder au dossier app
WORKDIR /app
# copier le fichier .war dans le dossier /app
 COPY target/*.war app.war
# COPY target/pictopro-0.0.4-SNAPSHOT.war app.war
# executer la commande java -jar /app/app.jar
RUN echo $(ls)
RUN echo $(pwd)
CMD ["java", "-jar", "/app/app.war"] 


##creer l image
#docker build -t pictopro_image .
#docker image rm pictopro_image
##creer le container
#docker run -itd --name pictopro_container --hostname pictopro --link mysql_container --network ecam  -p 8081:8080 pictopro_image
#docker rm pictopro_container