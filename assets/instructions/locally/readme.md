For running the application locally, you need to create a docker-compose file to define all the services and their dependencies. The following are some of the things that you will need to do: <br />
1. Create an Application Insights instance and fetch its instrumentation key.
2. The data-api container docker file should pass the parameter in CMD  as **local** to connect to Mongo DB running locally (in a container) and "container" to use CosmosDB. So to run the application locally, please set the parameter in CMD as **local**. 
3. You also need to create a user when MongoDB container instance is created. The same is done using the **init-mongo.js** file present in the **app** folder.  An example of defining the containerized MongoDB service instance in the docker-compose.yaml file is given below: <br />

```yaml
version: '3.8'
services:
  nosqldata:
    image: 'mongo'
    ports:
    - "27017:27017"
    restart: always
    environment:
      - MONGO_INITDB_ROOT_USERNAME=${MONGO_INITDB_ROOT_USERNAME} // create .env file to read from enviornment
      - MONGO_INITDB_ROOT_PASSWORD=${MONGO_INITDB_ROOT_PASSWORD}
      - MONGO_INITDB_DATABASE=${MONGO_INITDB_DATABASE}
    volumes: 
      - ./init-mongo.js:/docker-entrypoint-initdb.d/init-mongo.js:ro
  ```
 4. Please note the usage of **links**, **depends** and **enviornment variables** to pass in the docker-componse yaml file from the below example. Create docker-compose file in the **app** folder and mention the correct entry for **context**. 
 
 ```yaml
 data-api:
    build: 
      context: data-api
    ports:
    - "3009:3009"
    environment:
    - APPINSIGHTS_INSTRUMENTATIONKEY=${INSTRUMENTATION_KEY} 
    - MONGODB_USER=${MONGO_USERNAME} // use the same which you defined in init-mongo.js
    - MONGODB_PASSWORD=${MONGO_PASSWORD} // use the same which you defined in init-mongo.js
    links: 
    - nosqldata
    depends_on: 
    - "nosqldata"
 flights-api:
 quakes-api:
 weather-api:
 service-tracker-ui:
   ```
    5. ENV (environment variables) for flights, weather and quakes are APPINSIGHTS_INSTRUMENTATIONKEY, DATA_SERVICE_URI
    6. ENV (environment variables) for service-tracker-ui are QUAKES_API_ROOT,WEATHER_API_ROOT, FLIGHT_API_ROOT
    7. Complete the entire docker-compose file by mentioning the configuration for all the services
    8. Use docker-compose up/down/build command to test the application
    
    
