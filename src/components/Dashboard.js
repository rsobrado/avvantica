import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'

import Catalog from './Catalog'
import PrimaryAppBar from './PrimaryAppBar'
// import data from './../data/data.json'

const useStyles = makeStyles((theme) => ({
  mattressesContaner: {
    padding: 20,
    [theme.breakpoints.up('sm')]: {
      padding: '0 50px 150px',
    },
  },
  contained: {
    marginTop: 40,
    backgroundColor: 'var(--warning-color)',
    borderRadius: 10,
    color: '#282c34',
    textShadow: 'none',
    lineHeight: '1.5 !important',
    fontSize: '1.05rem !important',
    '&:hover': {
      backgroundColor: 'rgb(255,190,0)',
      color: '#282c34 !important',
    },
  },
  title: {
    fontFamily: 'Suez One !important',
    fontSize: '3.6rem !important',
    letterSpacing: 2,
  },
  search: {
    position: 'relative',
    borderRadius: 20,
    backgroundColor: 'var(--main-color)',
    transition: 'all 0.2s ease-in-out',
    overflow: 'hidden',
    paddingRight: 20,
    marginRight: 20,

    boxShadow: 'inset -6px 6px 11px rgba(0, 0, 0, 0.15),inset -3px 3px 6px rgba(0, 0, 0, 0.15)',
    border: '1px solid rgba(0, 0, 0, 0.2)',
    color: 'var(--dark-color)',
    '&:hover': {
      backgroundColor: 'var(--secondary-color)',
      '@media screen and (prefers-color-scheme: dark) ': {
        background: 'var(--dark-secondary-color)',
      },
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },

    '@media screen and (prefers-color-scheme: dark) ': {
      background: 'var(--dark-warning-color)',
      color: 'var(--dark-color)',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    // color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(5)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

export default function Dashboard() {
  const classes = useStyles()
  const [products, setProducts] = useState([])
  const [carProducts, setCarProducts] = useState([])
  const [cartItems, setCartItems] = useState(0)
  const [search, setSearch] = useState('')
  const [cartOpen, setCartOpen] = useState(false)
  const handleAddToCart = (event) => {
    setCartItems(cartItems + 1)
  }
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleOpenCart = () => {
    setCartOpen(!cartOpen)
  }

  // ****** static Data from EndPoint
  const loadData = async () => {
    const result = await axios('http://localhost:3000/products')
    setProducts(result.data)
  }

  // ****** static Data from array
  // const loadData = () => {
  //   setProducts(data)
  // }

  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    if (search !== '') {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
      if (filtered.length > 0) {
        setProducts(filtered)
      } else {
        loadData()
      }
    } else {
      loadData()
    }
  }, [search])

  return (
    <React.Fragment>
      <PrimaryAppBar
        cartItems={cartItems}
        onClick={handleOpenCart}
        isOpen={cartOpen}
        products={carProducts}
      />

      <Container fixed maxWidth="lg" style={{ padding: 40 }}>
        <Grid container spacing={0} style={{ alignItems: 'center' }}>
          <Grid item xs={12} lg={9} style={{ textAlign: 'left' }}>
            <Typography
              gutterBottom
              variant="h1"
              component="h1"
              className={classes.title}>
              Products Collection
            </Typography>
          </Grid>

          <Grid item xs={12} lg={3} style={{ textAlign: 'right' }}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleSearch}
              />
            </div>
          </Grid>
        </Grid>
      </Container>

      <Container fixed maxWidth="xl" className={classes.mattressesContaner}>
        <Grid container spacing={8}>
          <Grid item xs={12} lg={12} style={{ textAlign: 'left' }}>
            <Catalog products={products} onClick={handleAddToCart} />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}
