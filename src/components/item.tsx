import React from 'react'

import { Card,
         CardActionArea,
         CardMedia,
         CardContent,
         Typography,
         CardActions,
         Button, 
         Modal,
         Fade,}     from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Backdrop from '@material-ui/core/Backdrop';


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
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }
}))

interface Props {
  imageSrc: string
}

const Item = (props: Props) => {

  const classes = useStyles()

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleOpen}>
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

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Namn på poster</h2>
            <img src={props.imageSrc} alt=""/>
            <p id="transition-modal-description">Bild på poster</p>
          </div>
        </Fade>
      </Modal>
      </CardActions>
    </Card>
  )
}

export default Item