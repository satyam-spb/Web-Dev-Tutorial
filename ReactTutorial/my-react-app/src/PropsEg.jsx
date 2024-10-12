import PropTypes from 'prop-types'

function PropsEg(props){
    // Here props is an object 

    // props.count = props.count + 1;
    // This is invalid, leads to undefined behaviour cuz props are immutable 
    return(
        <div className="PropsEx">
            <p>This is eg Prop {props.count}</p>
            {/* Here props is the object and the count is name of the key  */}

            <p>It's name is {props.name}</p>
            <p>Is this True? {props.isTrue ? "Yeah" : "Nope"}</p> 
            {/* Boolean data won't display anything itself so we use Ternary operator  */}
        </div>
        
    );
}

PropsEg.propTypes = {
    count: PropTypes.number,
    name: PropTypes.string,
    isTrue: PropTypes.bool,
}
PropsEg.defaultProps = {
    // Not sure if defaultProps is a keyword cuz works fine with other names but chatgpt says it shouldn't. However use defaultProps otherwise it might lead to error in diff environments and "defaultProps" is standard so confusing for other devs if not used 
    count: 0,
    name: "Sunya",
    isTrue: false,
}
export default PropsEg