const Tiedot = () => {

    const axios = require('axios').default;

    axios.get('http://localhost/SolitaDev/kaikkiT.php')
        .then(function (response) {

            document.getElementById('main').innerHTML = response.data;

        });




    return ( <
        >

        <
        h3 > All stations info: < /h3>


        <
        />
    );

};

export default Tiedot;
