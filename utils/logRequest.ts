import { bold, cyan, gray, green, red, yellow } from "@std/fmt/colors";

const getStatusColor = (status: number) => {
  if (status >= 500) {
    return red(status.toString());
  }

  if (status >= 400) {
    return yellow(status.toString());
  }

  return green(status.toString());
};

const logRequest = (
  request: Request,
  response: Response,
  duration: number,
) => {
  console.log(
    `${gray(request.method)} ${getStatusColor(response.status)} - ${
      cyan(request.url)
    } - ${bold(`${duration}ms`)}`,
  );
};

export default logRequest;
