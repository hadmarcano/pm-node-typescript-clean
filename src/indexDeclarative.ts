import ServerBootstrap, { Bootstrap } from "../bootstrap/server.bootstrap";
import Application from "./app";

const serverBootstrap: Bootstrap = new ServerBootstrap(Application.requestListener);

const start = async () => {
   try {
      const resultServer = await serverBootstrap.initialize();
      console.log(resultServer);
   } catch (error) {
      console.log(error);
   }
};

start();
