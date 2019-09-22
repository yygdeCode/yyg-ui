import Col from './Col'
import Row from './Row'
import Date from './Date'
import Footer from './Footer'
import Button from './Button'
import Main from './Main'
import Aside from './Aside'
import Header from './Header'
import Container from './Container'
const components = [
  Col,
  Row,
  Date,
  Footer,
  Button,
  Main,
  Aside,
  Header,
  Container
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
  install,
  Footer,
  Button,
  Main,
  Aside,
  Header,
  Container
}
export {
  Col,
  Row,
  Date,
  install,
  Footer,
  Button,
  Main,
  Aside,
  Header,
  Container
}