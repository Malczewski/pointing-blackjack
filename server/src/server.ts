import * as express from "express";
import * as http from "http";
import * as path from "path";
import { Pointing } from './pointing/pointing';
import { Retro } from './retro/retro';

const app = express();
app.use(express.static(path.resolve(path.join(__dirname, "/frontend/"))));

app.get("*", (req, res, next) => {
	res.sendFile(path.resolve(__dirname + "/frontend/index.html"));
});

let server = http.createServer(app);

new Pointing(server).start();
new Retro(server).start();

//start our server
server.listen(process.env.PORT || 8999, () => {
	console.log(`Server started on port ${(server.address() as any).port} :)`);
});

process.on("uncaughtException", (err) => {
	console.error(`Uncaught Exception: ${err.message}`);
	console.error(err.stack);
});
