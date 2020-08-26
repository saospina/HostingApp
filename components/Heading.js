const Heading = ({headingDate}) => {
    const {dateFrom, dateTo} = headingDate
    const dateFromConverted = moment(dateFrom).format('LL') 
    const dateToConverted = moment(dateTo).format('LL')
    
    return (
        <div className="row w-100 mt-5">
            <div className="col-md text-center">
                <h1>Hotels</h1>
                <p>From <strong>{dateFromConverted}</strong> to <strong>{dateToConverted}</strong></p>
            </div>
        </div>
    )
}

export default Heading
