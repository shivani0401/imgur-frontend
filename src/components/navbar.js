import React from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
export default function Navbar() {
    return (
        <navbar className="navbar">
            <div className="navbar-menubutton">
                <div className="icon icon-menu"></div>
            </div>
            <div className="head">
                <a>imgur</a>
            </div>
            <button className="newPost-btn">
                <BsFillPlusSquareFill></BsFillPlusSquareFill> New Post
            </button>
            <input className='searchbar'
                type="text"
                placeholder="images, #tag, @users oh my!"
                name="search"
            />
            {/* <BsSearch/> */}
            <div className="notification"></div>
            <button className="GoAdFree-btn" type="submit">
                Go Ad Free
            </button>

            <button className="signUp-btn" type="submit">
                Sign up
            </button>
            <button className="signIn-btn" type="submit">
                Sign in
            </button>
        </navbar>
    );
}
