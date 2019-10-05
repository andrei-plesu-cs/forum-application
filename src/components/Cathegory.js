
import React from 'react';
import './Cathegory.css';
import Navbar from './Navbar';

class Cathegory extends React.Component {

    constructor() {
        super();
        this.state = {
            threads: [
                {
                    name: 'How o win friends and influence people',
                    creation: new Date(),
                    author: 'andrei_plesu1998',
                    id: 1
                },
                {
                    name: 'How o win friends and influence people',
                    creation: new Date(),
                    author: 'andrei_plesu1998',
                    id: 2
                },
                {
                    name: 'How o win friends and influence people',
                    creation: new Date(),
                    author: 'andrei_plesu1998',
                    id: 3
                },
                {
                    name: 'How o win friends and influence people',
                    creation: new Date(),
                    author: 'andrei_plesu1998',
                    id: 4
                }
            ]
        }
    }

    render() {

        const thread = this.state.threads.map(({name, creation, author}, index) => {
                    
            return (
            <div key={index} className="threadContainer">
                <div className="threadTitle">
                    <p><small><i className="far fa-comment-dots"></i></small> {name}</p>
                </div>
                <div className="threadDetails">
                    <small className="threadAuthor">{author}
                    <i className="fas fa-dot-circle"></i>
                    {creation.toString()}</small>
                </div>
            </div>
            )
            
        });

        return (
            <React.Fragment>
                <Navbar />
                <div className="container" style={{marginTop: 80 + 'px'}}>
                    <div className="mainCath">
                        <h2>The chosen topic is</h2>
                        <h1>{this.props.cathName}</h1>
                    </div>
                    
                    <div style={{marginTop: 50 + 'px'}}>
                        {thread}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Cathegory;