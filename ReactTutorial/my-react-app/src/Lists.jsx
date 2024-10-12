import PropTypes from 'prop-types'
// Always remember to inc propTypes and defautProps 
// Part 1 : 
// function Lists(){
//     // Simple list : 
//     // const cars = ["porche","mercedes","bmw","range Rover","tesla"];
//     // cars.sort(); 
//     // only sorts string cuz sorting happens lexicographically(ie alphabetically)
//     // To sort num : 
//     const numbers = [10, 1, 20, 2, 30, 3];
//     numbers.sort((a, b) => a - b);

//     // List of objects with keys : inc id for each obj cuz react wants each obj to be unique else error in console
//     const cars = [{id:1, name:"porche", price: 25},
//         {id:2, name:"mercedes", price: 10},
//         {id:3, name:"bmw", price: 8},
//         {id:4, name:"range Rover",price : 20} ,
//         {id:5, name:"tesla", price: 45}];

//     // diff ways to sort 
//     // cars.sort((a,b) => a.name.localeCompare(b.name)); //Sort by  Alphabetical 
//     // cars.sort((a,b) => b.name.localeCompare(a.name)); //Sort by  reverse Alphabetical
//     // cars.sort((a,b) => a.price - b.price); //Numeric sort
//     // cars.sort((a,b) => b.price - a.price); //reverse Numeric sort

//     // Filter by certain criteria 
//     const lowPrices = cars.filter(car => car.price <=20);
//     const highPrices = cars.filter(car => car.price > 20);
//     // replace cars.map with lowPrices.map or highPrices.map to see the result 

//     // If we just return(cars) , Output : porchemercedesbmwRange RoverTesla 
//     // so we use listItems (btw &nbsp displays : in output screen)
//     const listItems = cars.map(car => <li key = {car.id} >{car.name}: &nbsp; <b>{car.price}</b></li>);
//     // as map parameter, we can pass a callback, fnc expression or arrow fnc 

//     return(
//     <ul>{listItems}</ul>
//     );
// }






// Part 2: 
    // Reusable components : 
    // Here the list of cars will be in parent component ie App.jsx and we use it using props (so that we can use as many lists(one eg is cars)
function Lists(props){
    const itemLists = props.items; //items is the cars array
    const category = props.category;
    const listItems = itemLists.map(item => <li key = {item.id} >{item.name}: &nbsp; <b>{item.price}</b></li>);

    // return(
    //     <h3>category</h3>
    // <ul>{listItems}</ul>
    // ); 
    // This is error. Why? Fragmentation bruh 

    return(
        <>
            <h3>{category}</h3>
            <ul>{listItems}</ul>
        </>
        
    ); 
}
Lists.defaultProps = {
    category : "category",
    items: [],
}
Lists.propTypes = { //NOTE : we import PropTypes, use .propTypes in this line and use         PropTypes.datatype, eg: name: PropTypes.string ..... Too much fun
    category: PropTypes.string,

    //Objects needs full clarification of data types
    items: PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,
        name: PropTypes.string,
        price:PropTypes.number})),
}

export default Lists