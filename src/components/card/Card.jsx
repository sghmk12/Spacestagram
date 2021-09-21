import "./card.css"

function CardView({data}) {
    return <div className="card">{data ? <>
        <img src={data.image} className="card-image"/>
        <h1>{data.title}</h1>
        <h3>{data.description}</h3>
      </> : <>
        <h1>No Data Available</h1>
      </>
    }</div>
}

export default CardView