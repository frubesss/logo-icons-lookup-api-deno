import handleAllLogoIcons from "./api/handleAllLogoIcons.ts";
import handleLookupLogoIcon from "./api/handleLookupLogoIcon.ts";
import logRequest from "./utils/logRequest.ts";

export const requestHandler = async (request: Request): Promise<Response> => {
  const startTime = Date.now();

  switch (new URL(request.url).pathname) {
    case "/all_logo_icons":
      return await handleAllLogoIcons(request, startTime);
    case "/lookup_logo_icon":
      return await handleLookupLogoIcon(request, startTime);
    default: {
      const response = new Response(
        "Use routes /all_logo_icons or /lookup_logo_icon",
        { status: 400 },
      );

      logRequest(request, response, Date.now() - startTime);

      return response;
    }
  }
};

Deno.serve(requestHandler);
