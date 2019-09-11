import Col from './Col'
import Row from './Row'
import Date from './Date'
const components = [
  Col,
  Row,
  Date
]


const install = (Vue) => {
  components.forEach((com) => {
    console.log(com.name)
    Vue.component(com.name, com)

  })
}
export default {
  Col,
  Row,
  Date,
  install
}
export {
  Col,
  Row,
  Date,
  install
}