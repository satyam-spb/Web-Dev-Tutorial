function Pic(){
    const imgurl = './src/assets/react.svg'
    const handleClick = (e) => {
        // console.log("YO React"); 
        e.target.style.display = "none"; // Hide the display when u click on it
    }
    return(
        <img onClick ={  (e) => handleClick(e)} src={imgurl} alt="React img" />
    )
}
export default Pic