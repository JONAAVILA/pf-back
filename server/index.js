const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
 
const PORT = 3001;
 
  conn.sync({ alter: true }).then(() => { 
}).catch(error => console.error(error))
    
    server.listen(PORT, () => {
      
      console.log(`Server listening on port ${PORT}`);
})
