//  db.auth('$MONGO_INITDB_ROOT_USERNAME', '$MONGO_INITDB_ROOT_PASSWORD')
//  db = db.getSiblingDB('$MONGO_INITDB_DATABASE')
//  db.createUser(
//      {
//          user: "mongodbuser",
//          pwd: "Passw0rd123",
//          roles: [
//              {
//                  role: "readWrite",
//                  db: "demo"
//              }
//          ]
//      }
//  );
// #  mongo -- "$MONGO_INITDB_DATABASE" <<EOF
// #      var rootUser = '$MONGO_INITDB_ROOT_USERNAME';
// #      var rootPassword = '$MONGO_INITDB_ROOT_PASSWORD';
// #      var admin = db.getSiblingDB('MONGO_INITDB_DATABASE');
// #      admin.auth(rootUser, rootPassword);

// #      var user = '$MONGODB_USER';
// #      var passwd = '$MONGODB_PASSWORD';
// #      db.createUser({user: user, pwd: passwd, roles: ["readWrite"]});
// # EOF