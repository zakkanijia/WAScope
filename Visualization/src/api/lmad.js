import service from '@/utils/request'
import qs from 'qs'

const baseURL = import.meta.env.VITE_SERVER

export function hostList() {
    return service({
        url: baseURL + '/hosts_list',
        method: 'get'
    })
}

export function analysisResult(_hostBase64) {
    return service({
        url: baseURL + '/analysis/' + _hostBase64,
        method: 'get'
    })
}

export function analysisReport(_file) {
    return baseURL + '/analysis_report/' + _file
}

export default {
    hostList: (...args) => hostList(...args),
    analysisResult: (...args) => analysisResult(...args)
}
