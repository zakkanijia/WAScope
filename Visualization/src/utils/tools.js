import dayjs from "dayjs"


export function datetimeFormat(timestamp, formatTimeStr) {
    formatTimeStr = formatTimeStr || 'YYYY-MM-DD'
    timestamp = parseInt(timestamp) * 1000
    return dayjs(timestamp).format(formatTimeStr)
}

export function datetimeDayjsUnix(timestamp, formatTimeStr) {
    return dayjs(new Date()).unix()
}


export function datetimeDayjs(timestamp, formatTimeStr) {
    return dayjs(new Date(parseInt(timestamp) * 1000))
}
