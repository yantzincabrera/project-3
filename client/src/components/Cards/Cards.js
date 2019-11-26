import React from 'react';
import "./Cards.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { flexbox } from '@material-ui/system';
import { endianness } from 'os';

const useStyles = makeStyles({
  cardContent: {
    maxWidth: '345px',
  },
  media: {
      height: '150px',
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
<Grid container spacing={1}>
    <Grid container item xs={3}>   
        <Card>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image="https://www.npower.com/-/media/domestic/contentpanel/promo/desktop/help-and-support-promo.ashx?w=2880&h=1920&as=1&hash=D7E02AFCCBCD97315F691797EE59218507C2E123" 
            title="Better Help"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Better Help
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Making professional counseling accessible, affordable, convenient - so anyone who struggles with life’s challenges can get help, anytime, anywhere.
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            Link
            </Button>
            <Button size="small" color="primary">
            Learn More
            </Button>
        </CardActions>

        </Card>
    </Grid>

    <Grid container item xs={3}>   
        <Card>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image="https://www.missgreenclean.co.uk/x/cdn/?https://d2g8igdw686xgo.cloudfront.net/defaultfundphoto-v2.jpg"
            title="GoFund Me"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                GoFund Me
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            With a free GoFundMe, you can get immediate help with memorial costs
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            Link
            </Button>
            <Button size="small" color="primary">
            Learn More
            </Button>
        </CardActions>
        </Card>
    </Grid>

    <Grid container item xs={3}>   
        <Card>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhCZ2NRKZkgSaKyiCdJeXyms86x5uwdEqj5ZViWwVg2Wxjmshw"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Suicide Prevention LifeLine
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            The National Suicide Prevention Lifeline is a national network of local crisis centers that provides free and confidential emotional support to people in suicidal crisis or emotional distress 24 hours a day, 7 days a week.
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            Link
            </Button>
            <Button size="small" color="primary">
            Learn More
            </Button>
        </CardActions>
        </Card>
    </Grid>

    <Grid container item xs={3}>   
        <Card>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image="https://www.elegantthemes.com/blog/wp-content/uploads/2019/08/shutterstock_588892502-960.jpg"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Seeking Financial Help?
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Videos to make sense of it all.
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            Link
            </Button>
            <Button size="small" color="primary">
            Learn More
            </Button>
        </CardActions>
        </Card>
    </Grid>

</Grid>
  );
}