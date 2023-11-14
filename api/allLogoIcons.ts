import getAllLogoIcons from "../utils/getAllLogoIcons.ts";
import logRequest from "../utils/logRequest.ts";

const allLogoIcons = async (request: Request, requestStartTime: number) => {
  const response = new Response(JSON.stringify(await getAllLogoIcons()), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  });

  logRequest(request, response, Date.now() - requestStartTime);

  return response;
};

export default allLogoIcons;
