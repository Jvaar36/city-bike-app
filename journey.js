const Journey = () => {

    const axios = require('axios').default;

    axios.get('http://localhost/SolitaDev/journey.php')
        .then(function (response) {

            document.getElementById('main').innerHTML = response.data;

        });




    return ( <
        >

        <
        h3 > All journeys listed: < /h3> <
        p > All the journeys in the database listed, by departure station, < br / >
        return station, distance and duration. < /p>

            <
            />
    );

};

export default Journey;
