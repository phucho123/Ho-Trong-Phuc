The server has following API:

1. http://localhost:3000/create-user //Create a resource
2. http://localhost:3000/get-all-users" //List all resources
3. http://localhost:3000/get-users-by" //List resources with basic filters (use query ?name=abc&&age=2x)
4. http://localhost:3000/find-user/:id" //Get details of a resource
5. http://localhost:3000/update-user/:id" //Update resource details
6. http://localhost:3000/delete-user/:id" //Delete a resource

The database is used is MongoDB with model of resource is "User" with fields(name, email, age, active)

# How to run #

1. First of all, run command **npm install** to install packages
2. Second, rund command **npm run dev** to run the server
