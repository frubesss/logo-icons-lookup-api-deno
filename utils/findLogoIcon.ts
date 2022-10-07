import getAllLogoIconNames from "./getAllLogoIconNames.ts";

const findLogoIcon = async (logoName: string) => {
  const allLogoIconNames = await getAllLogoIconNames();

  return allLogoIconNames.find((logoIconName) =>
    logoName.toLowerCase().includes(logoIconName.toLowerCase())
  );
};

export default findLogoIcon;
