import React from 'react'
import styles from "./style.module.css"
import { Link, useLocation,  } from 'react-router'
import { CardButton } from './button'

export const Card = (props) => {

  const locatiton = useLocation();
  
  
  return (
            
    <article  className={styles.card}>

      <Link className={styles.link}
      to={`/product/${props.productId || props.id}`}
      />
        <img src={props.img[0]} width="260" height="260"/>
        <span className={styles.name}>{props.title}</span>
        <div className={styles.button}>
        <span>from {props.price}$</span>
        {
          locatiton.pathname !== "/order" && <CardButton {...props}/>
        }      
        </div>
        </article>


  )
}
