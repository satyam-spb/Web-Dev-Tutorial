function ClickButton(){
    // We can also Use inline css using js
    // This is good for small components with minimal styling 
    // Not for major like responsive cuz component code has a lot of css which hinders the readibility 

    // Here styles is an object 
    const styles = {
        // We can't write syntax exactly as css 
        // 1. Everything as String 
        // 2. NO - (dash) allowed, use camelCase 
        // 3. No ; use , 


        margin: "20px",
        border: "2px solid #202020" ,
        padding: "10px" ,
        backgroundColor: "#b8ac0c" ,
        boxShadow: "3px 5px 8px #1d1002",
        width: "30%" ,
        maxWidth: "300px" ,
        alignItems: "center" ,
        cursor: "pointer" ,
        
    }
    return(
        <button style={styles}>Skip(Using Inline Css)</button>
    );
}

export default ClickButton