export const slugGenerator = (text) => {
    try {
      return text.toLowerCase().replace(/\s+/g, "-");
    } catch (error) {
      return text;
    }
  };