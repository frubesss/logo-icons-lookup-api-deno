import getAllLogoIcons from "./getAllLogoIcons.ts";

const findLogoIcon = async (logoName: string) => {
  const allLogoIconNames = await getAllLogoIcons();

  return allLogoIconNames.find((logoIconName) =>
    logoName.toLowerCase().includes(logoIconName.toLowerCase())
  );
};

export default findLogoIcon;
