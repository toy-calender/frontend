import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
  }

  render() {
    return (
      <div>
        <footer className="footer">
          <span className="text-muted">&copy; 스프링 리액트 토이 프로젝트</span>
        </footer>
      </div>
    );
  }
}

export default Footer;
