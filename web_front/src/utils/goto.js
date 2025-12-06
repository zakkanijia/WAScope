import router from '@/router/index.js'


export function gotoByName(name, state) {
    router.push({name, state})
}

export function gotoByPath(path, query) {
    router.push({path, query})
}