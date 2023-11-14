const removeFileExtension = (logoFile: string) =>
  logoFile.replace(/\.[^/.]+$/, "");

export default removeFileExtension;
