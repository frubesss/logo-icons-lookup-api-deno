import getAllLogoIcons from "./getAllLogoIcons.ts";

const findLogoIcon = async (logoName: string) => {
  const allLogoIcons = await getAllLogoIcons();

  return allLogoIcons.find((logoIcon) =>
    logoName.toLowerCase().includes(logoIcon.toLowerCase())
  );
};

export default findLogoIcon;
