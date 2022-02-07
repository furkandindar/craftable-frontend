import Button, {ButtonProps} from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const CustomButtonPrimary = styled(Button)<ButtonProps>(({theme}) => ({
    borderRadius: 50,
    backgroundColor: theme.palette.primary.main,
    color: "white",
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    }
  })
);

export const CustomButtonSecondary = styled(Button)<ButtonProps>(({theme}) => ({
    borderRadius: 50,
    backgroundColor: theme.palette.secondary.main,
    color: "black",
    '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
    }
  })
);

export const CustomButtonWhite = styled(Button)<ButtonProps>(({theme}) => ({
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    color: "black",
    '&:hover': {
        transform: "translate3d(0px, -2px, 0px)",
        backgroundColor: "#FFFFFF",
    }
  })
);

export const CustomButtonPurple = styled(Button)<ButtonProps>(({theme}) => ({
    borderRadius: 50,
    backgroundColor: theme.palette.primary.dark,
    color: "white",
    '&:hover': {
        transform: "translate3d(0px, -2px, 0px)",
        backgroundColor: theme.palette.primary.dark,
    }
  })
);

export const CustomButtonGradient = styled(Button)<ButtonProps>(({theme}) => ({
    borderRadius: 50,
    background: `linear-gradient(to left,#BF3755,#82368C)`,
    color: 'white',
    '&:hover':{
        background: `linear-gradient(to right,#BF3755,#82368C)`,
    },
  })
);

export const CustomButtonGradientToBlack = styled(Button)<ButtonProps>(({theme}) => ({
    borderRadius: 50,
    background: `linear-gradient(to left,#BF3755,#82368C)`,
    color: 'white',
    '&:hover':{
        background: `linear-gradient(to right,#AD2EBE,#522831)`,
    }
  })
);