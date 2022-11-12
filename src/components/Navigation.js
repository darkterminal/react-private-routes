import { Link } from "react-router-dom"

function Navigation() {
    return (
        <nav>
            <Link to="/">Public</Link>
            {" | "}
            <Link to="/private">Private</Link>
        </nav>
    );
}
export default Navigation;
