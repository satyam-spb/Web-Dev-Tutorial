import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";
import ClickButton from "./ClickButton.jsx";
import PropsEg from "./PropsEg.jsx";
import UserGreeting from "./UserGreeting.jsx";
import Lists from "./Lists.jsx";
import Button2 from "./Button/Button2.jsx";
import Pic from "./Pic.jsx";
import Mycomponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";
import MyComponent2 from "./MyComponent2.jsx";
import ColorPicker from "./ColorPicker.jsx";
import ObjUpdater from "./ObjUpdater.jsx";
import LrnUseEffect from "./LrnUseEffect.jsx";
import ComponentA from "./ComponentA.jsx";
import LrnUseRef from "./LrnUseRef.jsx";

function App() {

  // for Lists.jsx 
  const cars = [{id:1, name:"porche", price: 25},
    {id:2, name:"mercedes", price: 10},
    {id:3, name:"bmw", price: 8},
    {id:4, name:"range Rover",price : 20} ,
    {id:5, name:"tesla", price: 45}];

  const c = 0;
  return (
    // <Header></Header> 
    //  OR <Header/> Also works
    // <Footer/>

    // Here Header and Footer are components and more than one componets cannot be returned so it shows error so to return multiple components we need to enclose it within a fragment( <> </>)
    // If there's issues using fragments we can also use div 
  //   eg <div>
  //   <Header />
  //   <Footer />
  // </div>

    <>
      {/* <Header />
      <Food />
      <Footer /> */}

      {/* <Card />
      <br />
      <Button />
      <ClickButton /> */}

       {/* <PropsEg />  */}
      {/* <PropsEg count={c} name="Pehla" isTrue={false} />  */}
      {/* Any non-string data must be in curly braces  */}
      
      {/* <PropsEg count={c} name="Doosra" isTrue={false} />
      <PropsEg count={c} name="Teesra" isTrue={true} />
      <PropsEg count={c} name="Fourth" isTrue={true} /> */}

      
      {/* <PropsEg name="Fifth" />  */}
      {/* This is eg of defaultProps, ie if we do not pass any value or not pass all the values */}
      
      {/* <UserGreeting />  
      <UserGreeting isLoggedin={true} name = "Kamlesh" /> */}

      {/* for Lists.jsx part 1     */}
      {/* <Lists /> */}

      {/* for Lists.jsx part 2     */} 
      {/* <Lists items = {cars} category = "cars" /> 
      
      <Lists category="Bikes"></Lists>     */}

      {/* <Button2></Button2> */}

      {/* <Pic></Pic> */}

      {/* <Mycomponent />  */}

      {/* <Counter />  */}

      {/* <MyComponent2 />  */}

      {/* <ColorPicker />  */}

      {/* <ObjUpdater />  */}

      {/* <LrnUseEffect /> */}

      {/* <ComponentA />  */}

      {/* <LrnUseRef />  */}

    </>

    
  );
}

export default App
