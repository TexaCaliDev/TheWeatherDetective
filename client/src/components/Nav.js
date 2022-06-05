import {Link} from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <h1>The Weather Detective</h1>
            <Link to="/">Landing</Link> |{" "}
            <Link to="/home">Home</Link>
        </nav>
    )
}