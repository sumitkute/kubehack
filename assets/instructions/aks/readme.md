1. Create an AKS cluster with the below configuration: <br />
* RBAC enabled
* Network Policy as Azure
* Azure CNI

2. Create a CosmosDB Instance (Mongo API) - do not create any DB .. just the instance
3. Create a namespace with name hackfest in the AKS cluster
4. Create a Kubernetes secret and store the MongoDB username, MongoDB password and App Insights Instrumentation Key
5. Configure the ACR integration with [AKS](https://docs.microsoft.com/en-us/azure/aks/cluster-container-registry-integration) for the AKS cluster which you created in step 1.
6. Use [ACR task](https://docs.microsoft.com/en-us/azure/container-registry/container-registry-quickstart-task-cli) to build images directly in Azure Container Registry
7. Create deployment and services manifest yaml file for each of the API and expose the **service-tracker-ui**  on a Public IP and the other APIs as Cluster IP service type
 
