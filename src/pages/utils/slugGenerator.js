export const slugGenerator = (text) => {
    try {
      return text.toLowerCase()?.replace(/\s+/g, "-")?.replace(/:/g, "");;
    } catch (error) {
      return text;
    }
  };