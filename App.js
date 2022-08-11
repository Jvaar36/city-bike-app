import React from 'react';
import ReactDOM from 'react-dom';

import Journey from './journey.js';
import Listed from './listed.js';
import Station from './station.js';
import './style.css';

const journey = () => {

    ReactDOM.render( < Journey / > , document.getElementById('components'));

}

const list = () => {

    ReactDOM.render( < Listed / > , document.getElementById('components'));

}

const info = () => {

    ReactDOM.render( < Station / > , document.getElementById('components'));

}

const license = () => {

    document.getElementById('main').innerHTML = "<h3>Helsinki Region Transport’s (HSL) city bicycle stations CSV file</h3>" +

        "<a rel='license' href='http://creativecommons.org/licenses/by/4.0/'>" +
        "<img alt='Creative Commons License' style='border-width:0' src='https://i.creativecommons.org/l/by/4.0/88x31.png' /></a>" +
        "<br />This work is licensed under a <a rel='license' href='http://creativecommons.org/licenses/by/4.0/'>Creative Commons Attribution 4.0 International License</a>." +
        "<br/><br/><p><b>No changes to data used were made, <br/>validation for raw data applied before importing to this app.</b></p>";

}

function App() {
    return (

        <
        >

        <
        div id = "container" >

        <
        h3 > Helsinki City Bike - app < /h3>


        <
        p > < i > Choose data to view: < /i></p >

        <
        button className = "button"
        onClick = {
            journey
        } > Journey List < /button>

        <
        button className = "button"
        onClick = {
            list
        } > Station List < /button>

        <
        button className = "button"
        onClick = {
            info
        } > Station Info < /button>

        <
        button className = "button"
        onClick = {
            license
        } > Data License < /button>

        <
        div id = "components" >

        <
        /div>

        <
        div id = "main" >


        <
        /div>

        <
        /div>

        <
        />
    );
}

export default App;
