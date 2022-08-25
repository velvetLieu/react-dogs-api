import { Link } from "react-router-dom";

function HomePage() {
    return(
        <div>
            <h1>Home Page</h1>
            <ul>
                <li><Link to="/breeds">List of all breeds</Link></li>
                <li><Link to="/breed-image">Select image by breed</Link></li>
            </ul>
            
        </div>
        

    );
}

export default HomePage