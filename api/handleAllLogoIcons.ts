import getAllLogoIcons from "../utils/getAllLogoIcons.ts";
import logRequest from "../utils/logRequest.ts";

const handleAllLogoIcons = async (
  request: Request,
  startTime: number,
): Promise<Response> => {
  const logoIcons = await getAllLogoIcons();

  const response = new Response(JSON.stringify(logoIcons), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  });

  logRequest(request, response, Date.now() - startTime);

  return response;
};

export default handleAllLogoIcons;
