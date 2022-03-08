import { Button, Typography } from "@mui/material";
import React from "react";
import ConfirmDeposit from "./components/ConfirmDeposit";
import ConfirmWithdraw from "./components/ConfirmWithdraw";
import TransactionSubmit from "./components/TransactionSubmit";
import Vote from "./components/Vote";
import WaitConfirm from "./components/WaitConfirm";

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open ConfirmDeposit
      </Button>
      <ConfirmDeposit
        open={open}
        onClose={handleClose}
      />
      
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open Vote
      </Button>
      <Vote
        open={open}
        onClose={handleClose}
      /> */}

      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open ConfirmWithdraw
      </Button>
      <ConfirmWithdraw
        open={open}
        onClose={handleClose}
      /> */}

      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open WaitConfirm
      </Button>
      <WaitConfirm
        open={open}
        onClose={handleClose}
      /> */}

      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open TransactionSubmit
      </Button>
      <TransactionSubmit
        open={open}
        onClose={handleClose}
      /> */}
    </div>
  );
}