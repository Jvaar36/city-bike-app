import React from 'react';
import ReactDOM from 'react-dom';

import Kanta from './haeKaikki.js';
import Asemat from './haeAsemat.js';
import Tiedot from './haeTiedot.js';
import './tyyli.css';

const kaikki = () => {

    ReactDOM.render( < Kanta / > , document.getElementById('komponentit'));

}

const asemat = () => {

    ReactDOM.render( < Asemat / > , document.getElementById('komponentit'));

}

const tiedot = () => {

    ReactDOM.render( < Tiedot / > , document.getElementById('komponentit'));

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
        h3 > City Bike - app < /h3>


        <
        p > < i > Choose data to view: < /i></p >

        <
        button className = "nappi"
        onClick = {
            kaikki
        } > Journey List < /button>

        <
        button className = "nappi"
        onClick = {
            asemat
        } > Station List < /button>

        <
        button className = "nappi"
        onClick = {
            tiedot
        } > Station Info < /button>

        <
        button className = "nappi"
        onClick = {
            license
        } > Data License < /button>

        <
        div id = "komponentit" >

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
