// 함수형 컴포넌트와 클래스형 컴포넌트에서
// state를 사용하는 방법.
import React, { useState } from "react";
import ReactDom from "react-dom";

function App() {
  const [Item, setItem] = useState(1);

  const incrementItem = () => setItem(Item++);
  const decrementItem = () => setItem(Itemm--);

  return (
    <div className="App">
      <h1>Hello {Item}</h1>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
    </div>
  );
}

class AppUgly extends React.Component {
  state = {
    item: 1,
  };
  increment = () => {
      this.setState(state => {
          return {
              item: state.item+1
          }
      })
  }
  decrement = () => {
    this.setState(state => {
        return {
            item: state.item-1
        }
    })
}
  render() {
    const { item } = this.state;
    return (
      <div className="App">
        <h1>Hello {Item}</h1>
        <button onClick={this.incrementItem}>Increment</button>
        <button onClick={this.decrementItem}>Decrement</button>
      </div>
    );
  }
}

// ReactDom.render(<App />, document.querySelector("root"));
ReactDom.render(<AppUgly />, document.querySelector("root"));
