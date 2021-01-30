import React from "react";
// import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  add = () => {
    this.setState((current) => ({
      count: current.count + 1,
    }));
    console.log(this.state.count);
  };

  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  incrementCount = () => {
    // 이거 이유는 좀 알아야 겠다. 비동기 개념이 나온다.
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  };

  handleSomething = () => {
    // 그리고 this.add()를 해도 안되네? 왜???
    this.add();
    this.add();
  };

  render() {
    return (
      <div>
        <h1>이 숫자는 {this.state.count}입니다.</h1>
        <button onClick={this.add}>더하기</button>
        <button onClick={this.minus}>빼기</button>
        <button onClick={this.reset}>리셋</button>
        <button onClick={this.handleSomething}>+2</button>
      </div>
    );
  }
}

export default App;
