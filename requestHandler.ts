import logRequest from "./utils/logRequest.ts";

import allLogoIcons from "./api/allLogoIcons.ts";
import lookupLogoIcon from "./api/lookupLogoIcon.ts";

const requestHandler = async (request: Request) => {
  const requestStartTime = Date.now();

  const pathName = new URL(request.url).pathname as
    | "/all_logo_icons"
    | "/lookup_logo_icon";

  if (pathName === "/all_logo_icons") {
    return await allLogoIcons(request, requestStartTime);
  }

  if (pathName === "/lookup_logo_icon") {
    return await lookupLogoIcon(request, requestStartTime);
  }

  const response = new Response(
    "Use routes /all_logo_icons or /lookup_logo_icon",
    {
      status: 400,
    },
  );
  logRequest(request, response, Date.now() - requestStartTime);
  return response;
};

export default requestHandler;
