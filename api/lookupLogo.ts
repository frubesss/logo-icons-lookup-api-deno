import { resize } from "https://deno.land/x/deno_image@0.0.4/index.ts";

import logRequest from "../utils/logRequest.ts";
import findLogoIcon from "../utils/findLogoIcon.ts";

const lookupLogo = async (request: Request, requestStartTime: number) => {
  const requestUrl = new URL(request.url);

  const logoNameQueryParameter = requestUrl.searchParams.get(
    "logoName",
  );

  if (logoNameQueryParameter) {
    const logoFound = await findLogoIcon(logoNameQueryParameter);

    if (logoFound !== undefined) {
      const sizeQueryParameter = requestUrl.searchParams.get(
        "size",
      );

      if (sizeQueryParameter) {
        const sizeQueryParameterAsNumber = parseInt(sizeQueryParameter, 10);

        if (
          sizeQueryParameterAsNumber >= 1 && sizeQueryParameterAsNumber <= 200
        ) {
          const response = new Response(
            await resize(
              await Deno.readFile(`./logos/${logoFound}.png`),
              {
                width: sizeQueryParameterAsNumber,
                height: sizeQueryParameterAsNumber,
              },
            ),
            {
              status: 200,
              headers: {
                "cache-control": "max-age=86400",
                "Access-Control-Allow-Origin": "*",
              },
            },
          );
          logRequest(request, response, Date.now() - requestStartTime);
          return response;
        } else {
          return new Response(
            "Size query parameter must be between 1 and 200",
            {
              status: 400,
            },
          );
        }
      } else {
        const response = new Response(
          await Deno.readFile(`./logos/${logoFound}.png`),
          {
            status: 200,
            headers: {
              "cache-control": "max-age=86400",
              "Access-Control-Allow-Origin": "*",
            },
          },
        );
        logRequest(request, response, Date.now() - requestStartTime);
        return response;
      }
    } else {
      const response = new Response("No logo found", { status: 404 });
      logRequest(request, response, Date.now() - requestStartTime);
      return response;
    }
  } else {
    const response = new Response(
      "Please provide a logoName query parameter",
      {
        status: 400,
      },
    );
    logRequest(request, response, Date.now() - requestStartTime);
    return response;
  }
};

export default lookupLogo;
