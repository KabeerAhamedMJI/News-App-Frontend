import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeLoginStatus } from "../app/feature/login/loginSlice";

function Logout(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        async function handleLogout() {
            try {
                await axios.get(`${import.meta.env.VITE_API_BASE_URL}/auth/logout`, { withCredentials: true });
                dispatch(changeLoginStatus(false))
                navigate("/");
            } catch (error) {
                dispatch(changeLoginStatus(true))
            }
        }

        handleLogout();
    }, [navigate]);
    return (
        <>
<div>
    <h1>Logging Out...........</h1>
</div>
        </>
    );
}

export default Logout;
