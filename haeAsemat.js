const Asemat = () => {

    const axios = require('axios').default;

    axios.get('http://localhost/SolitaDev/kaikkiA.php')
        .then(function (response) {

            document.getElementById('main').innerHTML = response.data;

        });




    return ( <
        >

        <
        h3 > All stations listed: < /h3>


        <
        />
    );

};

export default Asemat;
