import React from 'react'
import styles from "./Heads.module.css" ; 
function SingleMember(props) {
  return (
<div classname={styles.flex}>
    <div className={styles.flexs}>
      <img className={styles.pic} src= {props.pic} />
       <div className= {styles.flexs}>
      <div><b>{props.pos}</b></div>
      <div>{props.name}</div>
  </div>
</div>
</div>
  )
}

export default SingleMember
