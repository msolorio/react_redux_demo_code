import React from 'react';
import { connect } from 'react-redux';
import './App.css';

function App(props) {
  // console.log('props in App ==>', props);

  function handleCountClick() {
    props.dispatch({ type: 'incrementCounter' });
  }

  function handleColorClick(clickedColor) {
    props.dispatch({
      type: 'updateColor',
      color: clickedColor
    })
  }

  return (
    <div className="App">
      <p>Count: {props.count}</p>
      <button onClick={handleCountClick}>
        +
      </button>

      <p>Favorite Color: {props.favColor}</p>
      <button onClick={() => handleColorClick('Blue')}>
        Blue
      </button>
      <button onClick={() => handleColorClick('Green')}>
        Green
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count,
    favColor: state.favColor
  }
}

const reduxWrapper = connect(mapStateToProps);
export default reduxWrapper(App);
