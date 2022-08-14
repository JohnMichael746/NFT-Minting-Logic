import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core";
import CreateForm from "../component/creatorComponents/CreateForm.js";

import createHolderStyle from "../assets/jss/creatorStyle/createHolderStyle.js";

const useStyles = makeStyles(createHolderStyle);


export default function CreateHolder() {
  const classes = useStyles();
  
  return (
    <div className={classes.mainContainer}>
      <CreateForm />
    </div>
  );
}
