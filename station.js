const Station = () => {

    const axios = require('axios').default;

    axios.get('http://localhost/SolitaDev/station.php')
        .then(function (response) {

            document.getElementById('main').innerHTML = response.data;

        });




    return ( <
        >

        <
        h3 > All stations info: < /h3> <
        p > All Helsinki region bike stations, by name, address, < br / >
        departures and returns by that station. < /p>

        <
        />
    );

};

export default Station;
