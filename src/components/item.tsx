import React from 'react'

import { Card,
         CardActionArea,
         CardMedia,
         CardContent,
         Typography,
         CardActions,
         Button }     from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3),
    width: 300,
  },
  media: {
    height: 450,
  },
  title: {
    color: theme.palette.primary.main
  }
}))

interface Props {
  imageSrc: string
}

const Item = (props: Props) => {
  const classes = useStyles()
  
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.imageSrc}
          title="Print"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            Print title
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Print description.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  )
}

export default Item