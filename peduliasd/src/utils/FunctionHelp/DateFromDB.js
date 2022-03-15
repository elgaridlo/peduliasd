import moment from "moment"

const DateFromDB = (date) => {
    return moment(new Date(date)).format('YYYY-MM-DD')
}

export default DateFromDB