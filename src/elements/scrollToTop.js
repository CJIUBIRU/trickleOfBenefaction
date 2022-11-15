// import React, { Component } from 'react';
// import {withRouter} from  'react-router-dom'
// // import 'moment/locale/zh-cn';
// class ScrollToTop extends Component {
//     componentDidUpdate(prevProps) {
//         if (this.props.location.pathname !== prevProps.location.pathname) {
//             window.scrollTo(0, 0);
//         }
//     }

//     render() {
//         return this.props.children;
//     }
// }
// export default withRouter(ScrollToTop);
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);

  return null;
}