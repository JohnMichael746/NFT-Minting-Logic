import React, { useEffect, useState } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import styles from "../../assets/jss/creatorStyle/buttonStyle.js";
import { useWeb3ExecuteFunction } from "react-moralis";
import ABI from "../../constants/abi.json";
import { useMoralisFile, useMoralis } from "react-moralis";
import Moralis from "moralis";

const useStyles = makeStyles(styles);

export default function ButtonCreate(props) {
  const { title, img, description, children, ...rest } = props;
  const classes = useStyles();
  const { saveFile } = useMoralisFile();
  const { enableWeb3, isWeb3Enabled } = useMoralis();
  const [loading, setLoading] = useState(false);

  const { fetch } = useWeb3ExecuteFunction();

  const btoa2 = function (str) {
    return Buffer.from(str).toString("base64");
  };

  useEffect(() => {
    if (!isWeb3Enabled) {
      console.log("Enabling web3...");
      enableWeb3();
    } else {
      console.log("Web3 is already enabled.");
    }
  });

  const uploadMetadata = async (img, title, description) => {
    const ipfsResult = await saveFile(
      img.name.replace(/[^a-zA-Z0-9]/g, ""),
      img,
      { saveIPFS: true }
    );

    const base64 = {
      Title: title,
      Description: description,
      URL: ipfsResult._ipfs,
    };

    const metadata = btoa2(JSON.stringify(base64));

    const jsonFile = new Moralis.File("metadata.json", {
      base64: metadata,
    });
    await jsonFile.saveIPFS();

    const tokenURI = jsonFile.hash();

    fetch({
      params: {
        abi: ABI,
        contractAddress: "0x8dCBCf3be31E2b4594701Afdc31832534aB714ce",
        functionName: "createAmp",
        params: {
          _name: "AMP",
          _id: 1,
          _price: 1,
          _amount: 1,
        },
      },

      onSuccess: (data) => {
        console.log(data);
        console.log("Mint Done");
      },
      onComplete: () => {
        console.log("Completed.");
        setLoading(false);
      },
      onError: (err) => {
        console.log("Error Occured");
        console.log(err);
      },
    });
  };

  const fetchValidation = async () => {
    if (title && description && img) {
      setLoading(true);
      uploadMetadata(img[0], title, description);
    } else {
      console.log("title || description || img is not valid");
    }
  };

  return (
    <Button
      {...rest}
      className={classes.button}
      onClick={() => fetchValidation()}
      disabled={loading}
    >
      {!loading ? children : "Minting"}
    </Button>
  );
}
