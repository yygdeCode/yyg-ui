import date from './src/Date'
date.install = function (Vue) {
    Vue.component(date.name, date)
}
export default date