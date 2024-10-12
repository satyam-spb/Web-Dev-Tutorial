function Food(){
    const food1 = "Chicken Masala";
    const food2 = "Sattu Puri";
    return(
        <ul>
            <li>Masala Dosa</li>
            {/* If I use js variables in html(this) part I gotta use it in {} otherwise it'll print the variable itself eg {food1} */}
            <li>{food1}</li> 
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}
export default Food