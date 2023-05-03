import React from 'react';
import { LocalThemedBox } from './LocalThemedBox';

const Page = () => {

    return(
        <div className={"container bg-light"} id="themed-page">

            <p id="themed-text-container">
                lorem ipsum dolor iterit n stuff
            </p>
            <button className="btn" id="themed-button">Themed Button</button>
            <LocalThemedBox />
        </div>
    )
}

export { Page }
