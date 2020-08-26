import HotelInfo from "./HotelInfo";


export default class Hotels extends React.Component {
    render() {
        const { hotels } = this.props
        return (
            <React.Fragment>
                {!hotels.length &&
                    <div className="alert alert-warning mt-5 animate__animated animate__pulse">No Results to show. <strong>Try to filter your Hotel!</strong></div>
                }
                <div className="card-columns mt-5">
                    {hotels.map(hotel =>
                        <HotelInfo
                            key={hotel.id}
                            hotel={hotel} />
                    )}
                </div>


            </React.Fragment>
        )
    }
}
