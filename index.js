const app = require("./src/app");
const { get } = require("./src/routes");

const port =process.env.PORT || 4000;

app.listen(port)


app()
console.log("listen on port"+ port)