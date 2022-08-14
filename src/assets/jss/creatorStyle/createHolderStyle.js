const blackColor = "#000";

const hexToRgb = (input) => {
  input = input + "";
  input = input.replace("#", "");
  let hexRegex = /[0-9A-Fa-f]/g;
  if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
    throw new Error("input is not a valid hex color.");
  }
  if (input.length === 3) {
    let first = input[0];
    let second = input[1];
    let last = input[2];
    input = first + first + second + second + last + last;
  }
  input = input.toUpperCase(input);
  let first = input[0] + input[1];
  let second = input[2] + input[3];
  let last = input[4] + input[5];
  return (
    parseInt(first, 16) +
    ", " +
    parseInt(second, 16) +
    ", " +
    parseInt(last, 16)
  );
};

const createHolderStyle = {
  mainContainer: {
    "@media (min-width: 100px)": {
      maxWidth: "440px"
    },
    "@media (min-width: 768px)": {
      maxWidth: "620px"
    },
    "@media (min-width: 992px)": {
      maxWidth: "860px"
    },
    "@media (min-width: 1200px)": {
      maxWidth: "900px"
    },
    margin: "70px auto",

    display: "grid",
    fontFamily: "Roboto, sans-serif",
    "@media (min-width: 1000px)": {
      gridTemplateColumns: "100%"
    }
  },
  boxContainer: {
    margin: "25px",

    "@media (min-width: 100px)": {
      margin: "25px 5px"
    },
    "@media (min-width: 768px)": {
      margin: "25px 5px"
    },
    "@media (min-width: 992px)": {
      margin: "25px 15px"
    },
    "@media (min-width: 1200px)": {
      margin: "25px"
    }
  },
  title: {
    textAlign: "center",
    textDecoration: "none",
    fontWeight: "800",
    paddingTop: "30px",
    paddingBottom: "20px",
    minHeight: "32px",
    textTransform: "capitalize",
    fontFamily: "Roboto, sans-serif",

    "@media (min-width: 100px)": {
      fontWeight: "500"
    },
    "@media (min-width: 768px)": {
      gridTemplateColumns: "repeat(2,1fr)"
    },
    "@media (min-width: 992px)": {
      fontWeight: "600"
    },
    "@media (min-width: 1200px)": {
      fontWeight: "800"
    }
  },
  paragraph: {
    textAlign: "center",
    fontWeight: "500",
    paddingBottom: "30px",
    width: "90%",
    margin: "0 auto",
    minHeight: "32px",
    fontSize: "18px",

    fontFamily: "Roboto, sans-serif",

    "@media (min-width: 100px)": {
      width: "95%"
    },
    "@media (min-width: 768px)": {
      width: "95%"
    },
    "@media (min-width: 992px)": {
      width: "90%"
    },
    "@media (min-width: 1200px)": {
      width: "90%"
    }
  },
  paragraphTwo: {
    paddingTop: "15px",
    paddingBottom: "20px",
    fontFamily: "Roboto, sans-serif"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    margin: "0 auto",
    width: "80%",
    gridGap: "20px",
    marginBottom: "50px",

    "@media (min-width: 100px)": {
      gridTemplateColumns: "1fr"
    },
    "@media (min-width: 768px)": {
      gridTemplateColumns: "repeat(2,1fr)"
    },
    "@media (min-width: 992px)": {
      gridTemplateColumns: "repeat(3,1fr)"
    },
    "@media (min-width: 1200px)": {
      gridTemplateColumns: "repeat(3,1fr)"
    }
  }
};

export default createHolderStyle;
