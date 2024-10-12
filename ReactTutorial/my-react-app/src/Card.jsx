import demoImage from './assets/react.svg' ;

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={demoImage} alt="Headphone Img" />
            <h2>SONii</h2>
            <p>Sleek black premium headphones delivering immersive, crystal-clear sound quality.</p>
        </div>
    );
}

export default Card