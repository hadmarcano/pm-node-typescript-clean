import http from "http";

export default interface Route {
   path: string;
   execute: (request: http.IncomingMessage, response: http.ServerResponse) => void;
}

type Routes = Route[];

const routes: Routes = [
   {
      path: "/user/description",
      execute(request: http.IncomingMessage, response: http.ServerResponse) {
         response.writeHead(200, { "content-type": "text/plain" });
         response.write("<h2>User: hdiaz</h2>");
         response.end();
      },
   },
   {
      path: "/user/list",
      execute(request: http.IncomingMessage, response: http.ServerResponse) {
         response.writeHead(200, { "content-type": "application/json" });
         response.write(
            JSON.stringify([
               {
                  username: "hdiaz",
                  active: true,
               },
               {
                  username: "aguerra",
                  active: true,
               },
            ]),
         );
         response.end();
      },
   },
   {
      path: "/user/detail",
      execute(request: http.IncomingMessage, response: http.ServerResponse) {
         response.writeHead(200, { "content-type": "application/json" });
         response.write(JSON.stringify({ username: "hdiaz", active: true }));
         response.end();
      },
   },
   {
      path: "/user/delete",
      execute(request: http.IncomingMessage, response: http.ServerResponse) {
         response.writeHead(200, { "content-type": "application/json" });
         response.write("User delete succesfully");
         response.end();
      },
   },
];

export const getRoute = (path: string): Route | undefined => {
   return routes.find((route: Route) => {
      console.log(route.path);
      console.log(path);
      return route.path == path;
   });
};

export const exceptionNotFound = (request: http.IncomingMessage, response: http.ServerResponse) => {
   response.writeHead(400, { "content-type": "text/plain" });
   response.write("<h2>not found</h2>");
   response.end();
};
