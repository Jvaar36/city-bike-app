const Listed = () => {

    const axios = require('axios').default;

    axios.get('http://localhost/SolitaDev/listed.php')
        .then(function (response) {

            document.getElementById('main').innerHTML = response.data;

        });




    return ( <
        >

        <
        h3 > All stations listed: < /h3> <
        p > All Helsinki region bike stations listed. < /p>

        <
        />
    );

};

export default Listed;
