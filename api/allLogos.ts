import getAllLogoIconNames from "../utils/getAllLogoIconNames.ts";
import logRequest from "../utils/logRequest.ts";

const allLogos = async (request: Request, requestStartTime: number) => {
  const response = new Response(JSON.stringify(await getAllLogoIconNames()), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "https://financial-logos-app.vercel.app",
    },
  });

  logRequest(request, response, Date.now() - requestStartTime);

  return response;
};

export default allLogos;
