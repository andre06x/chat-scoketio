import { serverHttp } from "./http";
import "./websocket";

serverHttp.listen(5000, () => console.log("server on 3000"))