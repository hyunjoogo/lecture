import "./App.css";
import React, { Component } from "react";
import TOC from "./components/TOC";
// import Subject from "./components/Subject";
import Content from "./components/Content";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: false,
      subject: { title: "STATE" },
      false: { title: "클릭", sub: "false 모드입니다." },
      true: { title: "클릭", sub: "true 모드입니다." },
      contents: [
        { id: 1, text1: "HTML" },
        { id: 2, text1: "CSS" },
        { id: 3, text1: "JavaScript" },
      ],
    };
  }
  render() {
    let _title,
      _sub = null;
    if (this.state.mode === false) {
      _title = this.state.false.title;
      _sub = this.state.false.sub;
    } else if (this.state.mode === true) {
      _title = this.state.true.title;
      _sub = this.state.true.sub;
    }
    return (
      <div className="App">
        {/* <Subject title={this.state.subject.title} sub="World"></Subject> */}
        <header>
          <h1>
            <a
              href="/"
              onClick={function (e) {
                e.preventDefault();
                this.setState({ mode: true });
              }.bind(this)}
            >
              {this.state.subject.title}
            </a>
          </h1>
          {this.state.subject.sub}
        </header>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} sub={_sub}></Content>
      </div>
    );
  }
}

export default App;
