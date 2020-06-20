db.createUser(
    {
        user: "mongodbuser",
        pwd: "Passw0rd123",
        roles: [
            {
                role: "readWrite",
                db: "demo"
            }
        ]
    }
);