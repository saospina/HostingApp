export default class Filters extends React.Component {
    constructor() {
        super()
        this.updateFilters = this.updateFilters.bind(this)
    }

    updateFilters(event) {
        const { handleFilters, data } = this.props
        const { id, value } = event.target

        const dataClone = Object.assign({}, data)
        dataClone[id] = (id === "price") ? Number(value) : value
        handleFilters(dataClone)
    }

    dateConvert(date) {
        return moment(date).format('YYYY-MM-DD')
    }

    render() {
        const {dateFrom, dateTo, country, price, hotelSize} = this.props.data
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <div className="collapse navbar-collapse">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Pick your date</span>
                        </div>
                        <input type="date" id="dateFrom" name="dateFrom" value={this.dateConvert(dateFrom)}
                            onChange={this.updateFilters} className="form-control" />
                        <input type="date" id="dateTo" name="dateTo" value={this.dateConvert(dateTo)}
                            onChange={this.updateFilters} className="form-control" />
                    </div>
                    <select className="custom-select w-50" value={country} name="country" id="country"
                        onChange={this.updateFilters}>
                        <option className="nav-link dropdown-toggle" value="all countries">All countries</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Brasil">Brasil</option>
                        <option value="Chile">Chile</option>
                        <option value="Uruguay">Uruguay</option>
                    </select>
                    <select className="custom-select w-50" value={price} name="cars" id="price" onChange={this.updateFilters}>
                        <option value="0">Any Price</option>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                    </select>
    
                    <select className="custom-select w-50" value={hotelSize} name="hotelSize" id="hotelSize" onChange={this.updateFilters}>
                        <option value="any">Any size</option>
                        <option value="small">Small Hotel</option>
                        <option value="medium">Medium Hotel</option>
                        <option value="large">Big Hotel</option>
                    </select>
                </div>
            </nav>

        )
    }
}
