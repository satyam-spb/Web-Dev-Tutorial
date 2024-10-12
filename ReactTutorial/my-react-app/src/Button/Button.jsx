import styles from './Button.module.css'

// This is applying css through modules so a unique className will be generated for Button via hash each time so it helps avoid naming conflict 
// Downsides : It requires additional setup and global styles arent applied easily,I've to import em from elsewhere 
function Button(){
    return (
        <button className={styles.BuyButton}>Buy Now(Using Module CSS)</button>
        // here styles is the object from line 1 and .BuyButton is the classname 
    );
}

export default Button