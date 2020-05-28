import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class TestRouter extends Component {
  goToPage = () => {
    // 编程式导航
  };

  render() {
    return (
      <div>
        <button onClick={this.goToPage}>跳转新页面</button>
      </div>
    );
  }
}

export default withRouter(TestRouter);
