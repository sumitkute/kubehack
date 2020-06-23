1. Create a AKS cluster
* RBAC enabled
* Network Policy as Azure
* Azure CNI

2. Create a CosmosDB Instance, do not create any DB only instance
3. Create a Kubernetes secret and store mongodb username, password and instrumentation key
4. Configure ACR integration with [AKS](https://docs.microsoft.com/en-us/azure/aks/cluster-container-registry-integration)
5. Use [ACR task](https://docs.microsoft.com/en-us/azure/container-registry/container-registry-quickstart-task-cli) to build images directly into Azure Container Registry
6. Create deployment and services file and expose the service-tracker ui on Public IP and other as Cluster IP
 
