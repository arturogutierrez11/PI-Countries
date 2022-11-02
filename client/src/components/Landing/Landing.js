import { React } from "react";
import { Link } from "react-router-dom";
import styles from "../Landing/Landing.module.css"

export default function Landing(){
    return(
     <div className={styles.container}>
          <div className={styles.izquierda}>
     <div className={styles.todo}>
          <h1 className={styles.hola}>Welcome</h1>
       <h1 className={styles.title}> Arturo Gutierrez</h1>
       <h3 className={styles.subtitle}> PI of Counrties</h3>
     </div>
     <div className={styles.containerBtn}>
      

       <Link to='/home'>
         <button className={styles.btnHome}>Start</button>
       </Link>
     </div>
     <div className={styles.js}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7XzcjpeidE1czH2XI6mTtqxXyx0JZomQBmx7_1ygfLkHsIwEetrjC47yhUg2dUIjn1hY&usqp=CAU" width='100px' height='100px'alt="notfound"></img>
          <img src="https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png" width='100px' height='100px'alt="notfound" className={styles.react}></img>
          <img src="data:image/png;base64,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" width='100px' height='100px'alt="notfound" className={styles.react}></img>
          <img src="https://camo.githubusercontent.com/58e35d08b53ec029f0e3e587a28a6f65777d352f797add843d153a0db60b9d7d/68747470733a2f2f692e696d6775722e636f6d2f79764559686e5a2e706e67" width='100px' height='100px'alt="notfound" className={styles.sql}></img>

     </div>
     </div>
      <div className={styles.derecha}>
          {/* <img className={styles.img} src="https://media.giphy.com/media/mf8UbIDew7e8g/giphy.gif" ></img> */}
     </div>

            
   </div>
 
               
       
    )
}