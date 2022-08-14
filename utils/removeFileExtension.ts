const removeFileExtension = (logoFile: string) => {
  return logoFile.replace(/\.[^/.]+$/, "");
};

export default removeFileExtension;
