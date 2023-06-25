import React, { PureComponent } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import HomeRecommend from "./pages/HomeRecommend";
import HomeRanking from "./pages/HomeRanking";
import About from "./pages/About";
import Login from "./pages/Login";
import "./style.css";
import NotFound from "./pages/NotFound";

export class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <div className="header">
          <span>header</span>
          <div className="nav">
            <Link to="/home">首页</Link>
            <Link to="/about">关于</Link>
            <Link to="/login">登录</Link>
            <button>分类</button>
            <span>订单</span>
            {/* <NavLink to="/home">首页</NavLink>
            <NavLink to="/about">关于</NavLink> */}
          </div>
          <hr />
        </div>
        <div className="content">
          <Routes>
            {/* 路由重定向 */}
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />}>
              <Route path="/home" element={<Navigate to="/home/recommend" />} />
              <Route path="/home/recommend" element={<HomeRecommend />} />
              <Route path="/home/ranking" element={<HomeRanking />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <div className="footer">
          <hr />
          <span>footer</span>
        </div>
      </div>
    );
  }
}

export default App;
