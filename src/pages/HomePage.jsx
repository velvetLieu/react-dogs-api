import { Link } from "react-router-dom";

function HomePage() {
    return(
        <div>
            <h1>Home Page</h1>
            <Link to="/breeds">List of all breeds</Link>
            <Link to="/breed-image">Select image by breed</Link>
        </div>
        

    );
}

export default HomePage