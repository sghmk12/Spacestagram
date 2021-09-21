import "./grid.css"

function GridView ({
    data, 
    cardView: CardView, 
    onCardClick, 
    onCardLike, 
    onCardShare
}) {

    return <div className="grid-container-outer"><div className="grid-container">{CardView && data && data.map(dat => (
        <CardView 
            data={dat}
            onCardLike={onCardLike}
            onCardShare={onCardShare}
            onCardClick={onCardClick}
            />
    ))}</div></div>
}

export default GridView