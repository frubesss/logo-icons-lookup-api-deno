import removeFileExtension from "./removeFileExtension.ts";

type LogoIcons = string[];

const getAllLogoIcons = async (): Promise<LogoIcons> => {
  const logoIcons: LogoIcons = [];

  for await (const logoIcon of Deno.readDir("./logoIcons")) {
    logoIcons.push(removeFileExtension(logoIcon.name));
  }

  return logoIcons;
};

export default getAllLogoIcons;
