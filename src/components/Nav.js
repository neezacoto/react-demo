import { Link } from "react-router-dom"

function Nav (props) {
    return (
        <>
        <Link to="/">
            <div>
                Navigate To Home
            </div>
        </Link>
        <Link to="/other">
            <div>
                Navigate to Other
            </div>
        </Link>
        </>

    )
}

export default Nav