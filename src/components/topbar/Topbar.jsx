import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Produtos</Link></li>
        <li><Link to="/newproduct">Novo Produto</Link></li>
        <li><Link to="/users">Usuários</Link></li>
        <li><Link to="/newUser">Novo Usuário</Link></li>
        <li><Link to="/sliders">Sliders</Link></li>
        <li><Link to="/newSlider">Novo Slider</Link></li>
        <li><Link to="/banners">Banners</Link></li>
        <li><Link to="/newBanner">Novo Banner</Link></li>
        </ul>
        </div>
      </div>
    </div>
  );
}