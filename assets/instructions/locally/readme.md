When we are running it locally you need to create a docker-compose file to define all the services and its dependencies
1. Create a Application Insight instance and get its instrumentation key.
2. The data-api container docker file should pass the parameter in CMD  as "local" to connect to Mongo DB running locally and "container" to use cosmosDB
3. You need to create a user when mongo db image is created. The init files is present in app folder.  Example of mongo DB is given below

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
 4. Use links, depends and enviornment variable to pass in docker componse as an example below. Create docker compose file in app folder to use the right context
 
 ```yaml
 data-api:
    build: 
      context: data-api
    ports:
    - "3009:3009"
    environment:
    - APPINSIGHTS_INSTRUMENTATIONKEY=${INSTRUMENTATION_KEY} 
    - MONGODB_USER=${MONGO_USERNAME}
    - MONGODB_PASSWORD=${MONGO_PASSWORD}
    links: 
    - nosqldata
    depends_on: 
    - "nosqldata"
   ```
    5. ENV for flights, weather and quakes are APPINSIGHTS_INSTRUMENTATIONKEY, DATA_SERVICE_URI
    6. ENV for service-tracker-ui are QUAKES_API_ROOT,WEATHER_API_ROOT, FLIGHT_API_ROOT
    7. Use docker-componse up/down/build command to test the application
    
    
