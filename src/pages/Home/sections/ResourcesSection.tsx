import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Carousel from 'react-elastic-carousel';
import resource1 from '../../../assets/resource1.png';
import resource2 from '../../../assets/resource2.png';
import resource3 from '../../../assets/resource3.png';

interface ResourceCardProps {
  helpText: string,
  imgUrl: string
}

const ResourceCard = (props: ResourceCardProps) => {
  return (
      <Card sx={{'&:hover':{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px;", cursor:"pointer"}, margin:2}}>
          <CardMedia
              component="img"
              alt="green iguana"
              image={props.imgUrl}
          />
          <CardContent sx={{padding:3, '&.MuiCardContent-root:last-child':{paddingBottom:1.5}}}>
              <Typography textAlign="center" variant='body2' component="div">
              {props.helpText}
              </Typography>
          </CardContent>
      </Card>
  );
}

const ResourcesSection = () => {
  return (
    <Grid container direction="column" spacing={5} justifyContent="space-between">
    <Grid item xs={12}>
        <Typography align='center' variant='h5' sx={{fontWeight:"bold"}}>Resources for getting started</Typography>
    </Grid>
    <Grid item xs={12}>
        <Carousel isRTL={false} itemsToShow={3} itemsToScroll={3}>
          <ResourceCard helpText='It is a long established fact that a reader will be distracted.' imgUrl={resource1}></ResourceCard>
          <ResourceCard helpText='It is a long established fact that a reader will be distracted.' imgUrl={resource2}></ResourceCard>
          <ResourceCard helpText='It is a long established fact that a reader will be distracted.' imgUrl={resource3}></ResourceCard>
          <ResourceCard helpText='It is a long established fact that a reader will be distracted.' imgUrl={resource1}></ResourceCard>
          <ResourceCard helpText='It is a long established fact that a reader will be distracted.' imgUrl={resource2}></ResourceCard>
          <ResourceCard helpText='It is a long established fact that a reader will be distracted.' imgUrl={resource3}></ResourceCard>
        </Carousel>
    </Grid>
    </Grid>
  );
};

export default ResourcesSection;
