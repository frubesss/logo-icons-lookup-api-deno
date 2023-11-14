import getAllLogoIcons from "./getAllLogoIcons.ts";
import toLowerCaseAndRemoveSpaces from "./toLowerCaseAndRemoveSpaces.ts";

const findLogoIcon = async (logoIconName: string) => {
  const allLogoIcons = await getAllLogoIcons();

  return allLogoIcons.find((logoIcon) =>
    toLowerCaseAndRemoveSpaces(logoIconName).includes(
      toLowerCaseAndRemoveSpaces(logoIcon),
    )
  );
};

export default findLogoIcon;
