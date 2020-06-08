import React, {ReactNode} from 'react';
import rss from './assets/rss.svg';
import './NSApp.css';
import {Link} from "react-router-dom";

function NSApp(): ReactNode{
    return (
        <div className="NSApp">
                <Link to="/login">
                    <img src={rss} className="NSApp-logo" alt="logo"/>
                </Link>
                <p>
                    News Service
                </p>
        </div>
    );
}

export default NSApp;
