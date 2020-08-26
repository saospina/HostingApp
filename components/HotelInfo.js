

export default class HotelInfo extends React.Component {
    render() {
        const { hotel } = this.props;
        const priceAmount = [...Array(hotel.price).keys()];
        return (

            <div className="card animate__animated animate__fadeIn">
                <img src={`assets/${hotel.photo}`} className="card-img-top" alt={hotel.slug} />
                <div className="card-body">
                    <h5 className="card-title">{hotel.name}</h5>
                    <p className="card-text">{hotel.description}</p>
                    <div>
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        <span className="ml-2">{`${hotel.city}, ${hotel.country}`}</span>
                    </div>
                    <div>
                        <i class="fa fa-bed" aria-hidden="true"></i>
                        <span className="ml-2">{`${hotel.rooms}, Rooms`}</span>
                    </div>
                    <div className="mb-2">
                        {priceAmount.map( price => (
                            <i key={price} class="fa fa-usd" aria-hidden="true"></i>
                        ))}
                        <span className="ml-2">Price</span> 
                    </div>
                    <a href="#" className="btn btn-success btn-block">Book</a>
                </div>
            </div>

        )
    }
}


