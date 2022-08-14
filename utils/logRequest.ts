import {
  bold,
  cyan,
  gray,
  green,
  red,
  yellow,
} from "https://deno.land/std@0.151.0/fmt/colors.ts";

const logRequest = (request: Request, response: Response, time: number) => {
  const requestUrl = new URL(request.url);
  const pathName = requestUrl.pathname;
  const queryString = requestUrl.searchParams.toString();

  switch (true) {
    case response.status >= 500:
      console.log(
        `${red(request.method)} ${gray(`(${response.status})`)} - ${
          cyan(`${requestUrl}${queryString ? "?" + queryString : ""}`)
        } - ${bold(String(time) + "ms")}`,
      );
      break;
    case response.status >= 400:
      console.log(
        `${yellow(request.method)} ${gray(`(${response.status})`)} - ${
          cyan(`${pathName}${queryString ? "?" + queryString : ""}`)
        } - ${bold(String(time) + "ms")}`,
      );
      break;
    default:
      console.log(
        `${green(request.method)} ${gray(`(${response.status})`)} - ${
          cyan(`${pathName}${queryString ? "?" + queryString : ""}`)
        } - ${bold(String(time) + "ms")}`,
      );
  }
};

export default logRequest;
