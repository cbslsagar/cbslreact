import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <Link to="/home">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
        </div>
    )
}
export default Header