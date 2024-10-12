// click event : user interaction when user clicks on an element and we can respond to clicks by passing callback to onClick event handler

function Button2(){

    // non parametarized function 
    const handleClick = () => console.log("OK Bruh!");

    // parametarized function  
    const handleClick2 = (name) =>  console.log(`OK ${name} Bruh!`);

    // condition for clicks 
    let count = 0;
    const handleClick3 = (name) => {
        if(count < 3){
            count++;
            console.log(` Hey ${name} I'll get back to you ${count}`);
        }
        else
        console.log(` Hey ${name} stop calling me`);
    }

    //events 
    const handleClick4 = (e) => {
        // e represents an event object
        //console.log(e); //Outputs the event 
        e.target.textContent = "Clicked";
    }

    const handleDoubleClick = (e) => {
        // e represents an event object
        //console.log(e); //Outputs the event 
        e.target.textContent = "Double Clicked";
    }
    return(
        <>
            {/* <button onClick={handleClick2("Tim")}>Click me</button>
            if we use a set of parenthesis after a callback u'll call it right away(ie here it'll be called even without clicking the button) */}
            {/* To prevent that we could wrap the callback in a fnc expression or arrow fnc  */}
            {/* <button onClick={() => handleClick3("Tim")}>Click me</button> */}

            {/* <button onClick={(e) => handleClick4(e)} onDoubleClick={(e) => handleDoubleClick(e)}>Click me</button>
            <button onDoubleClick={(e) => handleDoubleClick(e)}>Click me</button>
             */}
        </>
        
    );
}

export default Button2