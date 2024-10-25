import { bold, cyan, gray, green, red, yellow } from "@std/fmt/colors";

const getMethodColor = (status: number) => {
  if (status >= 500) {
    return red(status.toString());
  }

  if (status >= 400) {
    return yellow(status.toString());
  }

  return green(status.toString());
};

const logRequest = (request: Request, response: Response, time: number) => {
  console.log(
    `${gray(request.method)} ${getMethodColor(response.status)} - ${
      cyan(new URL(request.url).toString())
    } - ${bold(`${time}ms`)}`,
  );
};

export default logRequest;
