import PropTypes from 'prop-types'

function UserGreeting(props){
    // There are multiple ways to do conditional rendering 
    // Also its a good coding habit to inc prop-type 

    // 1st 
    // if(props.isLoggedin)
    //     return( <h2 className="welcomeMsg">Welcome {props.name}</h2> );
    // return( <h2 className="loginPrompt">Please Log in to continue</h2> );
    // I already know this "loginPrompt" will work in else case (shortcut)
    // OR 
    // return (
    //     props.isLoggedin ? <h2 className="welcomeMsg">Welcome {props.name}</h2> :
    //     <h2 className="loginPrompt">Please Log in to continue</h2>
    // )

    // 2nd 
    const WelcomeMsg = <h2 className="welcome-Msg">Welcome {props.name}</h2>
    const LoginPrompt = <h2 className="login-Prompt">Hello {props.name}! Please Log in to continue</h2>
    return ( props.isLoggedin ? WelcomeMsg : LoginPrompt)
}

UserGreeting.propTypes = {
    name : PropTypes.string,
    isLoggedin : PropTypes.bool,
}

UserGreeting.defaultProps = {
    name : "Guest",
    isLoggedin : false
}

export default UserGreeting