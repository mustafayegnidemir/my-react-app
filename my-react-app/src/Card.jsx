import profilePic from "./assets/profile.jpg"

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile Picture" />
            <h2 className="card-title">MustafaY</h2>
            <p className="card-text">I make web applications with React and Node.js</p>
            <button>Learn More</button>
        </div>
    )
}

export default Card;