import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  addNumber,
  fetchResults
} from '../../modules/numbers'

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Count: {props.newNumber}</p>

    <p>
      <button onClick={null} disabled={null}>Increment</button>
      <button onClick={null} disabled={null}>Increment Async</button>
    </p>

    <p>
      <button onClick={null} disabled={null}>Decrementing</button>
      <button onClick={null} disabled={null}>Decrement Async</button>
    </p>

    <p><button onClick={() => props.changePage()}>Go to about page via redux</button></p>
  </div>
)

const mapStateToProps = state => ({
  newNumber: state.numbers.newNumber,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addNumber,
  fetchResults,
  changePage: () => push('/preferences')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)