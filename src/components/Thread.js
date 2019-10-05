
import React from 'react';
import './Thread.css';
import Navbar from './Navbar';

class Thread extends React.Component {

    constructor() {
        super();
        this.state = {
            name: 'Andrei Plesoianu Bogdan'
        }
    }

    render() {

        const {threadInfo} = this.props;
        const answers = [
            {
                name: 'sabinaavram03',
                creation: new Date(),
                text: 'Slabo is a serif font developed by John Hudson of Tiro Typeworks. What’s unique about this font is that it’s specifically designed to be used at a certain size – either 27px or 13px depending on your needs.',
                answers: [
                    {
                        name: 'sabinaavram03',
                        creation: new Date(),
                        text: 'Slabo is a serif font developed by John Hudson of Tiro Typeworks. What’s unique about this font is that it’s specifically designed to be used at a certain size – either 27px or 13px depending on your needs.',
                    },
                    {
                        name: 'sabinaavram03',
                        creation: new Date(),
                        text: 'Slabo is a serif font developed by John Hudson of Tiro Typeworks. What’s unique about this font is that it’s specifically designed to be used at a certain size – either 27px or 13px depending on your needs.',
                    },
                    {
                        name: 'sabinaavram03',
                        creation: new Date(),
                        text: 'Slabo is a serif font developed by John Hudson of Tiro Typeworks. What’s unique about this font is that it’s specifically designed to be used at a certain size – either 27px or 13px depending on your needs.',
                        answers: [
                            {
                                name: 'sabinaavram03',
                                creation: new Date(),
                                text: 'Slabo is a serif font developed by John Hudson of Tiro Typeworks. What’s unique about this font is that it’s specifically designed to be used at a certain size – either 27px or 13px depending on your needs.',
                            }       
                        ]
                    }
                ]
            },
            {
                name: 'sabinaavram03',
                creation: new Date(),
                text: 'Slabo is a serif font developed by John Hudson of Tiro Typeworks. What’s unique about this font is that it’s specifically designed to be used at a certain size – either 27px or 13px depending on your needs.',
            },
            {
                name: 'sabinaavram03',
                creation: new Date(),
                text: 'Slabo is a serif font developed by John Hudson of Tiro Typeworks. What’s unique about this font is that it’s specifically designed to be used at a certain size – either 27px or 13px depending on your needs.',
                answers: [
                    {
                        name: 'sabinaavram03',
                        creation: new Date(),
                        text: 'Slabo is a serif font developed by John Hudson of Tiro Typeworks. What’s unique about this font is that it’s specifically designed to be used at a certain size – either 27px or 13px depending on your needs.',
                    },
                    {
                        name: 'sabinaavram03',
                        creation: new Date(),
                        text: 'Slabo is a serif font developed by John Hudson of Tiro Typeworks. What’s unique about this font is that it’s specifically designed to be used at a certain size – either 27px or 13px depending on your needs.',
                    },
                    {
                        name: 'sabinaavram03',
                        creation: new Date(),
                        text: 'Slabo is a serif font developed by John Hudson of Tiro Typeworks. What’s unique about this font is that it’s specifically designed to be used at a certain size – either 27px or 13px depending on your needs.',
                        answers: [
                            {
                                name: 'sabinaavram03',
                                creation: new Date(),
                                text: 'Slabo is a serif font developed by John Hudson of Tiro Typeworks. What’s unique about this font is that it’s specifically designed to be used at a certain size – either 27px or 13px depending on your needs.',
                            }       
                        ]
                    }
                ]
            },
            {
                name: 'sabinaavram03',
                creation: new Date(),
                text: 'Slabo is a serif font developed by John Hudson of Tiro Typeworks. What’s unique about this font is that it’s specifically designed to be used at a certain size – either 27px or 13px depending on your needs.',
            }
        ]

        const anwers_html = answers.map((answer, index) => {
            return (
                <div className="answer">
                    <div className="answer-heading">
                        <p>
                            {answer.name}
                            <i class="far fa-circle"></i>
                            <span>Posted on {answer.creation.toString()}</span>
                        </p>
                        <div className="answer-heading-options">
                            <i class="far fa-heart"></i>
                            <span>Reply</span>
                        </div>
                    </div>
                    <div className="answer-body">
                        <p className="text">{answer.text}</p>
                    </div>
                    <hr />
                </div>
            );
        })

        return (
            <React.Fragment>
                <Navbar />
                <div className="container" style={{marginTop: 80 + 'px'}}>
                    <div className="threadInfo">
                        <h1 className="title">{threadInfo.name}</h1>
                        <h3 className="details">
                            Posted by <span>{threadInfo.author}</span> on <span>{threadInfo.creation.toString()}</span>
                        </h3>
                        <span className="threadNumber">Thread number #{threadInfo.id}</span>
                    </div>
                    <hr />
                    <div className="threadText">
                        <p className="innerText text">
                        Slabo is a serif font developed by John Hudson of Tiro Typeworks. What’s unique about this font is that it’s specifically designed to be used at a certain size – either 27px or 13px depending on your needs.
                        </p>
                    </div>
                    <button type="button" className="btn btn-md answerButton">Post an answer</button>

                    <div className="answerSection">
                        <p className="subtitle">Responses <span className="badge" style={{marginLeft: 10 + 'px'}}>12</span></p>
                        <div className="answers">
                            {anwers_html}      
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Thread;