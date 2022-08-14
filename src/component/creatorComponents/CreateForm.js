import React, { useState } from "react";

import { FaWallet } from "react-icons/fa";
import { makeStyles, Switch } from "@material-ui/core";
import createFormStyle from "../../assets/jss/creatorStyle/createFormStyle.js";
import ButtonCreate from "./ButtonCreate.js";
import WalletCreator from "./WalletCreator.js";
import Moralis from "moralis";

const useStyles = makeStyles(createFormStyle);

export default function Navigate() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState(
    Moralis.User.current().get("ethAddress")
  );

  return (
    <div className={classes.createFormContainer}>
      <div>
        <label>external link of your avatar</label>
        <input
          className={classes.createForm_input}
          placeholder="https://www.yoursite.com/item"
          disabled
          value={image[0] || ""}
        />
      </div>
      <div>
        <label>Upload your avatar</label>
        <input
          className={classes.input_upload}
          type="file"
          id="file"
          placeholder="https://www.yoursite.com/item"
          onChange={(e) => setImage(e.target.files)}
        />
        <label htmlFor="file" className={classes.label_upload}>
          Upload
        </label>
      </div>
      <div>
        <label>Royalties</label>
        <input
          className={classes.createForm_input}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <div>
          <label>Description</label>
          <textarea
            className={classes.createForm_textarea}
            placeholder="Description here"
            maxLength="140"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>

      <div className={classes.createFormSave}>
        <ButtonCreate title={title} img={image} description={description}>
          MINT
        </ButtonCreate>
      </div>
      <div className={classes.createFormBlockchainGrid}>
        <div>
          <WalletCreator address={address} />
        </div>
      </div>
    </div>
  );
}
