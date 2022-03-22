import React from "react";
import EmailComponent from './EmailComponent'

function Home(props) {

    const card = props.product.map(item => {
        return (
            <div className="col-6 col-md-3 p-0" key={item.id}>
                <img className="HomeImage" src={item.image}></img>
            </div>
        );
    });

    return (
        <>
            <div className="container-fuild">
                <div className="row">
                    <div className="homeText">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas</p>
                        <button className="btn home-btn">
                            Learn More!
                        </button>
                    </div>
                </div>
                <div className="row">
                    {card}
                </div>
                <div className="row EmailComponent">
                    <EmailComponent />
                </div>
            </div>

        </>
    );

}

export default Home;