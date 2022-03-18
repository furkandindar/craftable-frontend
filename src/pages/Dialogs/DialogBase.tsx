import { Button, Typography } from "@mui/material";
import React from "react";
import ConfirmDeposit from "./components/ConfirmDeposit";
import ConfirmWithdraw from "./components/ConfirmWithdraw";
import TransactionSubmit from "./components/TransactionSubmit";
import Vote from "./components/Vote";
import WaitConfirm from "./components/WaitConfirm";

export default function SimpleDialogDemo() {
  const [openConfirmDeposit, setOpenConfirmDeposit] = React.useState(false);
  const [openVote, setOpenVote] = React.useState(false);
  const [openConfirmWithdraw, setOpenConfirmWithdraw] = React.useState(false);
  const [openWaitConfirm, setOpenWaitConfirm] = React.useState(false);
  const [openTransactionSubmit, setOpenTransactionSubmit] = React.useState(false);

  return (
    <div>
      <Button variant="outlined" onClick={() => setOpenConfirmDeposit(true)}>
        Open ConfirmDeposit
      </Button>
      <ConfirmDeposit
        open={openConfirmDeposit}
        onClose={() => setOpenConfirmDeposit(false)}
      />
      
      <Button variant="outlined" onClick={() => setOpenVote(true)}>
        Open Vote
      </Button>
      <Vote
        open={openVote}
        onClose={() => setOpenVote(false)}
      />

      <Button variant="outlined" onClick={() => setOpenConfirmWithdraw(true)}>
        Open ConfirmWithdraw
      </Button>
      <ConfirmWithdraw
        open={openConfirmWithdraw}
        onClose={() => setOpenConfirmWithdraw(false)}
      />

      <Button variant="outlined" onClick={() => setOpenWaitConfirm(true)}>
        Open WaitConfirm
      </Button>
      <WaitConfirm
        open={openWaitConfirm}
        onClose={() => setOpenWaitConfirm(false)}
      />

      <Button variant="outlined" onClick={() => setOpenTransactionSubmit(true)}>
        Open TransactionSubmit
      </Button>
      <TransactionSubmit
        open={openTransactionSubmit}
        onClose={() => setOpenTransactionSubmit(false)}
      />
    </div>
  );
}