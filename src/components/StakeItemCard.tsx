import { Box, Checkbox } from '@mui/material'
import React, { useEffect } from 'react'

interface StakeItemProps {
    checked: boolean;
}

const StakeItemCard = (props: StakeItemProps) => {
  const [checked, setChecked] = React.useState(false);

  useEffect(() => {
    setChecked(props.checked);
  }, [props.checked])
  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Box position={"relative"}>
        <img width={"100%"} style={{borderRadius:"10px"}} src={require("../assets/pending-craft.png")}/>
        <Checkbox checked={checked} onChange={handleChange} sx={{position:"absolute", right:"0%"}}/>
    </Box>
  )
}

export default StakeItemCard