1. Create Project in Azure Devops (ADO)
2. Checkin the code in ADO
3. Create a CI pipline to pull the source code and build all the service together. Ideally a pipleine for each microservice is a good practice in production. 
In this hack its fine to create only one.
4. Create a CD pipline to delpoy YAML or Helm chart into the AKS Cluster
5. Make a change and automate the process of deployment to dev on code checkin.
6. If possible define a deployment strategy which will maintain min no of pods running in case of upgrade
