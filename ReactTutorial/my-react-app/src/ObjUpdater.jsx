import { useState } from "react";

function ObjUpdater(){
    // object 
    const [car,setCar] = useState({year:2022, company:"ford", model: "mustang" }); 
    // Array 
    const [foods,setFoods] = useState(['mango','pear','lichi']);
    // Array of Objects 
    const [Bikes,setBikes] = useState([]);
    const [BikeYear,setBikeYear] = useState(new Date().getFullYear());
    const [BikeCompany,setBikeCompany] = useState("");
    const [BikeModel,setBikeModel] = useState("");

    function updateYear(e){
        // setCar({year:e.target.value})
        // if we do this it does not change year, it changes the object from "{year:2022, company:"ford", model: "mustang" }" to "{year:e.target.value}" means the obj has only one property ie year 

        // So do this 
        setCar(c => ({...c,year:e.target.value}))
        // ...c means {year:2022, company:"ford", model: "mustang" } and {...c,year:e.target.value} means {year:2022, company:"ford", model: "mustang",year:e.target.value }. Js doesn't allow for duplicate keys so If we've 2 keys of same name, js uses the latest value
        //  and since we use arrow fnc for updater so using {} means fnc scope, so we use () before that. Therefore we've 2 (()) here 
    }
    function updateCompany(e){
        setCar(c => ({...c,company:e.target.value}))
    }
    function updateModel(e){
        setCar(c => ({...c,model:e.target.value}))
    }

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value="";
        setFoods(f => [...f,newFood]);
    }
    function handleRemoveFood(index){
        // setFoods(foods.filter((element, foodsIndex) => foodsIndex !== index ));
        // we aren't using the element here so use _ instead, it means value we get is ignored 

        setFoods(foods.filter((_, foodsIndex) => foodsIndex !== index ));
    }

    function handleAddBike(){
        const newBike = {year: BikeYear,
                company: BikeCompany,
                model: BikeModel};
        setBikes(b => [...b,newBike]);
        setBikeYear(new Date().getFullYear());
        setBikeCompany("");
        setBikeModel("");

    }
    function handleRemoveBike(index){
        setBikes(b => b.filter((_,bikeIndex) => index !==bikeIndex));
    }
    function updateBikeYear(e){
        setBikeYear(e.target.value)
        
    }
    function updateBikeCompany(e){
        setBikeCompany(e.target.value)

    }
    function updateBikeModel(e){
        setBikeModel(e.target.value)
        
    }
    return(
        <div>
            <h2>Object of cars</h2>
            <p>Your fav car is : {car.year} {car.company} {car.model} </p>
            <input type="number" value={car.year} onChange={updateYear} /> <br />
            <input type="text" value={car.company} onChange={updateCompany} /> <br />
            <input type="text" value={car.model} onChange={updateModel} /> <br />


            <h2>List of Foods</h2>
            {/* Food is removed when u click on it from the list */}
            <ul>
                {foods.map((food,index) =>
                     <li key={index} onClick={() => handleRemoveFood(index)} >
                        {food}
                    </li> )}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food" />
            <button onClick={handleAddFood} >Add Food</button>

            <h2>Object List of Bikes</h2>
            <ul>
                {Bikes.map((bike,index) => 
                <li key={index} onClick={() => handleRemoveBike(index)}>
                    {bike.year} {bike.company} {bike.model}
                </li> )}
            </ul>
            <input type="number" value={BikeYear} onChange={updateBikeYear} /> <br />
            <input type="text" value={BikeCompany} onChange={updateBikeCompany} placeholder="Enter Bike Company"/> <br />
            <input type="text" value={BikeModel} onChange={updateBikeModel} placeholder="Enter Bike Model"/> <br />
            <button onClick={handleAddBike}>Add Bike</button>

        </div>
    );
}
export default ObjUpdater