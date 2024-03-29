const size = {
  mobile: "700px",
  tablet: "900px",
  laptop: "1200px",
  desktop: "1800px",
};

const theme = {
  mainColor: "#9147ff",
  subColor: "#fff",
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};

export default theme;
