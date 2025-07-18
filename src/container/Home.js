import { useState } from "react"
import { Link } from "react-router-dom"

const Home = () => {
    const [name, setName] = useState('Manish')
    return (
        <div style={{ display: 'flex', alignItems: 'center', height: 500, justifyContent: 'center' }}>
            Hello {name}
        </div>
    )
}
export default Home