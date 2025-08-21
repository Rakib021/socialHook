import React from "react";
import logout from '../../assets/icons/logout.svg'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function Logout() {
  const navigate = useNavigate();
  const {setState} = useAuth();

  const handleLogout =() =>{
    setState({});
    navigate('/login')
  }
  return (
    <button className="icon-btn" onClick={handleLogout}>
      <img src={logout} alt="Logout" />
    </button>
  );
}
