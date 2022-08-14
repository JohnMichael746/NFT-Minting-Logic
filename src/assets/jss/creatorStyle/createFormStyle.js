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
    parseInt(first, 10) +
    ", " +
    parseInt(second, 10) +
    ", " +
    parseInt(last, 10)
  );
};

const createFormStyle = {
  createFormContainer: {
    borderRadius: "6px",
    boxShadow: "0 17px 12px 0px rgba(" + hexToRgb(blackColor) + ", 0.03)",
    fontFamily: "Roboto, sans-serif",
    padding: "20px"
  },
  title: {
    textDecoration: "none",
    fontWeight: "500",
    paddingBottom: "15px",
    margin: "0",
    textTransform: "capitalize",
    fontFamily: "Roboto, sans-serif",
    display: "block"
  },
  createForm_input: {
    display: "block",
    width: "95%",
    padding: "15px 0 15px 10px",
    borderRadius: "5px",
    outline: "none",
    border: "1px solid gray",
    margin: "5px 0 20px",
    color: "#e52d27"
  },
  input_upload: {
    display: "none"
  },
  label_upload: {
    display: "block",
    margin: "20px 0",
    borderRadius: "5px",
    border: "none",
    background: "#e52d27",
    outline: "none",
    padding: "15px 20px",
    width: "115px",
    fontSize: "18px",
    fontWeight: "500",
    color: "#FFF",
    fontFamily: "Roboto, sans-serif",
    textTransform: "uppercase",
    letterSpacing: "0",
    textAlign: "center",
    whiteSpace: "nowrap",
    cursor: "pointer"
  },
  createForm_paragraph: {
    fontSize: "13px",
    opacity: ".6"
  },
  createForm_textarea: {
    display: "block",
    width: "95%",
    padding: "15px 0 15px 10px",
    borderRadius: "5px",
    outline: "none",
    border: "1px solid gray",
    margin: "5px 0 20px",
    color: "#e52d27"
  },
  switch_option: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 20%"
  },
  switch_title: {
    display: "flex",
    alignItems: "center"
  },
  switch_title_active: {
    display: "flex",
    alignItems: "center",
    color: "red"
  },
  createFormBlockchainGrid: {
    width: "95%"
  },
  createFormSave: {
    display: "flex",
    justifyContent: "right",
    marginTop: "30px",
    marginRight: "7%"
  },
  createFormGrid: {
    display: "grid",
    gridTemplateColumns: "80% 20%",
    "@media (max-width: 768px)": {
      gridTemplateColumns: "100%"
    }
  },
  createFormBlockchainButton: {
    borderRadius: "5px",
    border: "none",
    background: "green",
    outline: "none",
    padding: "0",
    width: "85%",
    height: "50%",
    transform: "translateY(50%)",
    fontSize: "16px",
    fontWeight: "500",
    color: "#FFF",
    fontFamily: "Roboto, sans-serif",
    textTransform: "uppercase",
    letterSpacing: "0",
    textAlign: "center",
    whiteSpace: "nowrap",
    cursor: "pointer"
  }
};

export default createFormStyle;
