import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import Container from '@material-ui/core/Container'

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import MiniCart from './MiniCart'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
    },
  },
  colorPrimary: {
    background: 'linear-gradient(60deg,white,var(--main-color))',
    color: 'var(--dark-main-color)',
    zIndex: 999,
    padding: 10,
    // position: "relative",
    '@media screen and (prefers-color-scheme: dark) ': {
      background: 'linear-gradient(60deg, var(--dark-main-color), #023475)',
      color: 'var(--dark-warning-color)',
    },
  },
  colorSecondary: {
    background: 'var(--warning-color)',
    color: 'var(--dark-secondary-color)',
    textShadow: 'none',
    '@media screen and (prefers-color-scheme: dark) ': {
      background: 'var(--warning-color)',
      color: 'var(--dark-secondary-color)',
    },
  },
}))

export default function PrimaryAppBar(props) {
  const classes = useStyles()
  const [cartItems, setCartItems] = useState(0)
  const [cartOpen, setCartOpen] = useState(props.isOpen);

  useEffect(() => {
    props.onClick()
  }, [cartOpen])

  const handleOpenCart = (event, newValue) => {
    setCartOpen(!cartOpen)
  }

  useEffect(() => {
    setCartItems(props.cartItems)
  }, [props])
  
  return (
    <AppBar
      position="static"
      className={classes.grow}
      elevation={2}
      classes={{
        colorPrimary: classes.colorPrimary,
      }}>
      <Container maxWidth="xl" disableGutters>
        <Toolbar>
          <MiniCart isOpen={cartOpen} />
          <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="99px"height="22px">
              <text
                kerning="auto"
                fontFamily="Myriad Pro"
                fill="rgb(0, 0, 0)"
                x="0px"
                y="21.721px">
                <tspan
                  style={{fontSize :"25.321px",
                  fontFamily :"Norwester"}}
                  fill="#000000">
                  logoHere
                </tspan>
              </text>
            </svg>
          </div>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              aria-label="show cart items"
              color="inherit"
              onClick={handleOpenCart}>
              <Badge
                badgeContent={cartItems}
                color="secondary"
                classes={{ colorSecondary: classes.colorSecondary }}>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
