const Kanta = () => {

    const axios = require('axios').default;

    axios.get('http://localhost/SolitaDev/kaikki.php')
        .then(function (response) {

            document.getElementById('main').innerHTML = response.data;

        });




    return ( <
        >

        <
        h3 > All journeys listed: < /h3>


        <
        />
    );

};

export default Kanta;
