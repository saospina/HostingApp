import Heading from './components/Heading';
import NavbarFilters from './components/NavbarFilters';
import Filters from './components/Filters'
import Hotels from './components/Hotels';
import hotels from './assets/scripts/data';
const ALL_COUNTRIES = 'all countries'
const ANY_PRICE = 0
class App extends React.Component {

  constructor() {
    super()
    this.onFilters = this.onFilters.bind(this)
    this.state = {
      filters: {
        dateFrom: this.dateConvert(new Date()),
        dateTo: this.dateConvert(new Date()),
        country: ALL_COUNTRIES,
        price: 0,
        hotelSize: "any",
      },
      hotels
    }

  }

  componentDidMount(){
    this.onFilters(this.state.filters)
  }

  handleDateFilter (event){
    this.setState({ headingDate: event })
  }

  dateConvert(date) {
    return moment(date).format('YYYY-MM-DD')
  }

  filterByDate({dateFrom, dateTo}, hotel){
    const availabilityFrom = this.dateConvert(hotel.availabilityFrom)
    const availabilityTo = this.dateConvert(hotel.availabilityTo)
    return availabilityFrom <= dateFrom && availabilityTo >= dateTo;
  }

  filterByCountry({country}, hotelCountry){
    return country === ALL_COUNTRIES || hotelCountry === country || false
  
  }

  filterByPrice({price}, hotelPrice){
    return price === ANY_PRICE || hotelPrice === price || false
  }

  filterBySize({hotelSize}, hotelRooms){
    const validSize = {
      any: hotelRooms >= 1,
      small: hotelRooms >= 1 && hotelRooms <= 10,
      medium: hotelRooms >= 11 && hotelRooms <= 20,
      large: hotelRooms >= 21
    }
    return validSize[hotelSize]
  }

  onFilters(filters) {
    const filteredData = hotels.filter(hotel => {
      return this.filterByDate(filters, hotel)
    }).filter(hotel => {
      return this.filterBySize(filters, hotel.rooms)
    }).filter(hotel => {
      return this.filterByCountry(filters, hotel.country)
    }).filter(hotel => {
      return this.filterByPrice(filters, hotel.price)
    })
    
    this.setState({hotels: filteredData, filters }) 
  }

  render() {
    const {filters, hotels} = this.state
    return (
      <div>
        <Heading headingDate={filters} />
        <Filters data={filters} handleFilters={this.onFilters}/>
        <Hotels hotels={hotels} />
      </div>
    )
  }
}
export default App;

