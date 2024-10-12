// when u make a react Component, name using PascalCase naming convention else error

function Header(){

    return(
        <header>
            <h1>Demo Site</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <hr />
        </header>
    );
}

export default Header