1. Create Project in Azure Devops (ADO)
2. Commit and push the code (check-in) in the Repo in ADO
3. Create a CI pipline to pull the source code and build all the services together. Ideally a pipleine for each microservice is a good practice for the Production environment. 
In this hack its fine to create only one.
4. Create a CD pipline to delpoy a YAML file or a Helm chart to the AKS Cluster
5. Make a change to the source files and witness the automation of the process of deployment to the DEV environment on code commit (check-in).
6. If possible define a deployment strategy which will maintain min no of pods running in case of upgrade
