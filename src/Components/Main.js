const Main = (props) => {
  return (
    <div className="main">
        <div className="img">
            <img src={props.img} alt="travel" />   
        </div>
        
        <div className="texts">
          <p className="country">{props.country}</p>
          <h2>{props.location}</h2>
          <h5 className="date">{props.startDate}-{props.endDate}</h5>
          <p className="desc">{props.description}</p>
        </div>
    </div>
  );
}

export default Main;