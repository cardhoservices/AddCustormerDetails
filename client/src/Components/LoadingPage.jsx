import React from 'react';
import '../style.css'
import loadingvideo from '../Assets/loading.mp4';

function LoadingPage() {
    return (
        <div className='loading'>
            <video src={loadingvideo} controls autoPlay loop muted />
        </div>
    );
}

export default LoadingPage;