
import React from 'react';
import './CreateThread';

class CreateThread extends React.Component {
    render() {
        return(
            <div className="container-fluid create-thread-container">
                <div className="create-thread-inner-div">
                    <h1>Create a new thread</h1>
                    <p className="subtitle">Step 1: Choose a cathegory</p>
                    <p className="subtitle">Step 2: Choose name and add your question</p>
                    <div className="create-thread-buttons">
                        <button type="button" className="btn btn-lg">Post thread</button>
                        <button type="button" className="btn btn-lg">Discard</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateThread;