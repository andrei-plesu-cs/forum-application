
import React from 'react';
import './Home.css';
import Navbar from './Navbar';

class Home extends React.Component {

    constructor() {
        super();

        this.state = {
            cathegories: [
                'Sports',
                'Love',
                'Education',
                'Technologies',
                'Culture',
                'Music'
            ]
        };
    }

    render() {

        let cath = this.state.cathegories.map((element, index) => {
            return (
                <div key={index} className="cathInfo">
                    <div className="innerCatchInfo">
                        <p className="cathParagraph">{element}</p>
                    </div>
                </div>
            )
        })

        return (

            //Cathegories section
            <React.Fragment>
                <Navbar />
                <div className="container" style={{marginTop: 80 + 'px'}}>
                    <div className="mainCath">
                        <h1>Cathegories</h1>
                        <h2>Choose one of our topics</h2>
                    </div>
                    <div className="cathMain">
                        {cath}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;