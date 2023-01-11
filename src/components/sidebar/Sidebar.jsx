import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  MailOutline,
  ViewCarousel,
  AddToPhotos,
  ExitToApp
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { logout } from "../../redux/apiCalls";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function Sidebar() {

  const [username, setUsername] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault()
      logout(dispatch, {username});
      history.replaceState("/login");
  }
  


  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Usuários
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Produtos
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Vendas
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
          <Link to="/newsletter">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Newsletter
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
          <Link to="/sliders">
            <li className="sidebarListItem">
              <ViewCarousel className="sidebarIcon" />
              Slider
            </li>
          </Link>
          <Link to="/banners">
            <li className="sidebarListItem">
              <AddToPhotos className="sidebarIcon" />
              Banner
            </li>
          </Link>
            <li className="sidebarListItem">
              <ExitToApp  className="sidebarIcon" onClick={handleClick} />
              Sair
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}