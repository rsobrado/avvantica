import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import {useSelector} from 'react-redux'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import IconButton from '@material-ui/core/IconButton'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'

import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import BackspaceIcon from '@material-ui/icons/Backspace'
import ClearIcon from '@material-ui/icons/Clear'

import Slide from '@material-ui/core/Slide'

const useStyles = makeStyles((theme) => ({
  cart: {
    background: 'var(--dark-main-color)',
    borderRadius: '0 0 20px 20px',
    position: 'absolute',
    padding: 0,
    right: '10%',
    top: 75,
    zIndex: '0',
    '@media screen and (prefers-color-scheme: dark) ': {
      background: 'var(--main-color)',
    },
  },
  List: {
    background: 'white',
    margin: '0 10px 10px',
    padding: '10px 20px',
    borderRadius: '0 0 15px 15px',
    boxShadow:
      '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
  },
}))

export default function MiniCart(props) {
  const classes = useStyles()

  const [cartOpen, setCartOpen] = useState(props.isOpen)
  const [products, setProducts] =  useState([])


  useEffect(() => {
    setCartOpen(props.isOpen)
    
  }, [props.isOpen])

  const state = useSelector((state)=>  state)
  
  useEffect(() => {
    setProducts(state.products)
  }, [])

  return (
    <Slide direction="down" in={cartOpen} mountOnEnter unmountOnExit>
      <Paper className={classes.cart} elevation={24}>
        <List dense={true} className={classes.List}>
          {products &&
            products.map((product, index) => (
              <ListItem>
                <ListItemText>{product.name} - ${product.price} </ListItemText>
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteForeverIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))
            }
          {/* <ListItem>
            <ListItemText>Item - $999</ListItemText>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <DeleteForeverIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText>Item - $999</ListItemText>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <ClearIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText>Item - $999</ListItemText>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <BackspaceIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText>Item - $999</ListItemText>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <BackspaceIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText>Item - $999</ListItemText>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <BackspaceIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem> */}
        </List>
      </Paper>
    </Slide>
  )
}
