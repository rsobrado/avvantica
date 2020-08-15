import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Rating from '@material-ui/lab/Rating'
import Typography from '@material-ui/core/Typography'

import Card from '@material-ui/core/Card'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Collapse from '@material-ui/core/Collapse'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import Slide from '@material-ui/core/Slide'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'initial',
  },
  manttresMattressName: {
    fontSize: '1.5rem',
    fontWeight: 600,
  },
  manttresMattressPrice: {
    fontSize: '1.35rem',
    opacity: '0.6',
  },
  media: {
    width: '112%',
    marginLeft: '-6%',
  },
  mediaDG: {
    width: '100%',
    marginLeft: '0',
    borderRadius: 20,
  },
  ButtonGroup: {
    margin: '0 5px 5px',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 8,
  },
  btn: {
    width: '100%',
    borderRadius: 8,
    background: 'var(--dark-main-color)',
    padding: 8,
  },

  btnBuy: {
    minWidth: '100px',
    borderRadius: 8,
    background: 'var(--warning-color)',
    padding: 8,
    color: 'var(--dark-main-color)',
    textShadow: 'none',
  },
}))

export default function Product(props) {
  const classes = useStyles()
  const [name, setname] = useState(props.product.name)
  const [price, setPrice] = useState(props.product.price)
  const [rating, setRating] = useState(props.product.reviewRating)
  const [description, setDescription] = useState(props.product.description)
  const [checked, setChecked] = useState(false)
  const [imageFileName, setImageFileName] = useState(
    props.product.imageFileName
    
  )

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(!open)
  }

  const handleClose = () => {
    setOpen(!open)
  }

  useEffect(() => {
    setname(props.product.name)
    setPrice(props.product.price)
    setRating(props.product.reviewRating)
    setImageFileName(props.product.imageFileName)
    setDescription(props.product.description)
  }, [props])

  const handleChange = () => {
    setChecked((prev) => !prev)
  }

  const handleBuy = () => {
    props.onClick()
    setOpen(false)
  }

  return (
    <Grid item xs={12} lg={3}>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        maxWidth={'md'}>
        <DialogTitle id="alert-dialog-slide-title">
          <Grid container spacing={0}>
            <Grid item xs={12} lg={8} style={{ textAlign: 'left' }}>
              <Typography gutterBottom variant="h1" component="h1">
                {name}
              </Typography>
            </Grid>

            <Grid item xs={12} lg={4} style={{ textAlign: 'right' }}>
              <Rating
                name="rating"
                defaultValue={rating}
                precision={0.1}
                readOnly
                size="large"
              />
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <CardMedia
            component="img"
            alt={name}
            height="auto"
            image={'./images/' + imageFileName}
            title={name}
            classes={{ media: classes.mediaDG }}
          />
          <DialogContentText id="alert-dialog-slide-description">
            <Grid item xs={12} lg={12} style={{ textAlign: 'right' }}>
              <h1>${price}</h1>
            </Grid>
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button className={classes.btnBuy} onClick={handleBuy}>
            Buy
          </Button>
        </DialogActions>
      </Dialog>

      <Card elevation={4} className={classes.root}>
        <CardMedia
          component="img"
          alt={name}
          height="auto"
          image={'./images/' + imageFileName}
          title={name}
          classes={{ media: classes.media }}
        />
        <CardContent>
          <Grid container spacing={0}>
            <Grid item xs={12} lg={8} style={{ textAlign: 'left' }}>
              <Typography gutterBottom variant="h2" component="h2">
                {name}
              </Typography>
            </Grid>

            <Grid item xs={12} lg={4} style={{ textAlign: 'right' }}>
              <Rating
                name="rating"
                defaultValue={rating}
                precision={0.1}
                readOnly
                size="small"
              />
            </Grid>

            <Grid item xs={12} lg={12} style={{ textAlign: 'right' }}>
              <Typography gutterBottom variant="h3" component="h3">
                ${price}
              </Typography>
            </Grid>
          </Grid>
          <Collapse in={checked}>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </Collapse>
        </CardContent>
        <CardActions>
          <ButtonGroup
            variant="contained"
            color="primary"
            className={classes.ButtonGroup}
            aria-label=" primary button group">
            <Button className={classes.btn} onClick={handleClickOpen}>
              View
            </Button>
            <Button className={classes.btn} onClick={handleChange}>
              Details
            </Button>
            <Button className={classes.btnBuy} onClick={handleBuy}>
              Buy
            </Button>
          </ButtonGroup>
        </CardActions>
      </Card>
    </Grid>
  )
}
