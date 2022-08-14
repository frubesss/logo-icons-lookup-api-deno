import removeFileExtension from "./removeFileExtension.ts";

type LogoIcons = string[];

const getAllLogoIconNames = async (): Promise<LogoIcons> => {
  const logos: LogoIcons = [];

  for await (const logo of Deno.readDir("./logos")) {
    logos.push(removeFileExtension(logo.name));
  }

  return logos;
};

export default getAllLogoIconNames;
