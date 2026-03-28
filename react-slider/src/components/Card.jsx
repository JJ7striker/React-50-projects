const Card = ({user, className}) => {
    return (
        <div className={`card ${className}`}>
            <img src={user.img} alt="image1" />
            
            <div className="info">
                <h1>{user.name}</h1>
                <h3>Age: {user.age}</h3>
                <p>{user.info}</p>
            </div>
        </div>
    )
}

export default Card