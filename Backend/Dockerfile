FROM openjdk:17
VOLUME /tmp
EXPOSE 8080
ARG JAR_FILE=target/Backend-0.0.1-SNAPSHOT.jar
ADD ${JAR_FILE} backend-note.jar
ENTRYPOINT ["java","-jar","/backend-note.jar"]
