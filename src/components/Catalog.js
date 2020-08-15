import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Product from './Product'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  stars: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
  root: {
    flexGrow: 1,
    boxShadow: 'inset 0 -1px 2px rgba(0,0,0,0.12)',
    borderRadius: 15,
    color: 'var(--dark-main-color)',
    background: 'linear-gradient(60deg, #ffffff, transparent)',
    padding: 100,
    '@media screen and (prefers-color-scheme: dark) ': {
      background: 'linear-gradient(60deg, rgba(0,0,0,0.3), transparent)',
      color: 'var(--main-color)',
    },
  },

  colorDefault: {
    borderRadius: '15px 15px 0 0 ',
    background:
      'linear-gradient(60deg, var(--dark-main-color), var(--dark-main-color-washed))',
    color: '#e6b417 !important',
    overflow: 'hidden',
    '&:hover': {
      color: 'var(--dark-main-color)',
    },
    '@media screen and (prefers-color-scheme: dark) ': {
      background:
        'linear-gradient(60deg, var(--dark-secondary-color), var(--dark-warning-color))',
    },
  },
  textColorPrimary: {
    backgroundColor: 'var(--third-color)',
    height: 4,
  },
}))
export default function Catalog(props) {
  const classes = useStyles()

  const [products, setProducts] = useState(props.products)

  useEffect(() => {
    setProducts(props.products)
  }, [props])

  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        
        {products &&
          products.map((product, index) => (
            <Product key={index} product={product} onClick={props.onClick} />
          ))}
      </Grid>
    </div>
  )
}
