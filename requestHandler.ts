import logRequest from "./utils/logRequest.ts";

import allLogos from "./api/allLogos.ts";
import lookupLogo from "./api/lookupLogo.ts";

const requestHandler = async (request: Request) => {
  const requestStartTime = Date.now();

  const pathName = new URL(request.url).pathname as
    | "/all_logos"
    | "/lookup_logo";

  if (pathName === "/all_logos") {
    return await allLogos(request, requestStartTime);
  }

  if (pathName === "/lookup_logo") {
    return await lookupLogo(request, requestStartTime);
  }

  const response = new Response("Use routes /all_logos or /lookup_logo", {
    status: 500,
  });
  logRequest(request, response, Date.now() - requestStartTime);
  return response;
};

export default requestHandler;
