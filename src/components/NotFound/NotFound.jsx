import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        return (
            <main className="notfound spacing-20vh-top text-container text-centered">
                <h5>Please, Don't cry <br /><br /> Fill up your mind with some good vibes <span role="img" aria-label="Boss">😎</span></h5>
                <iframe className="spacing-10vh" src="https://open.spotify.com/embed/playlist/1Sd9qc4BuDf3T9h3hZWnde" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </main>
        );
    }
}

export default NotFound;