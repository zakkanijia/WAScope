import localforage from 'localforage'
import router from "@/router/index.js";

const pldsDB = localforage.createInstance({
    name: 'pldsDB', // 支持config所有配置
    storeName: 'modelData', // 仅接受字母，数字和下划线
})

export function add(value, key = 'modelList', successCallback = () => {
}, failCallback = () => {
}, finallyCallback = () => {
}) {
    pldsDB.setItem(key, value).then(successCallback).catch(failCallback).finally(finallyCallback);
}

export function del(key = 'modelList', successCallback = () => {
}, failCallback = () => {
}, finallyCallback = () => {
}) {
    pldsDB.removeItem(key).then(successCallback).catch(failCallback).finally(finallyCallback)
}

export function query(key = 'modelList', successCallback = () => {
}, failCallback = () => {
}, finallyCallback = () => {
}) {
    pldsDB.getItem(key).then(successCallback).catch(failCallback).finally(finallyCallback)
}
