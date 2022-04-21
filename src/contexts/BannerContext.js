import React from 'react';

const BannerContext = React.createContext({
    setBanner : ()=> {
        console.log('PLEASE IMPLEMENT THIS CALLBACK');
    }
});

export default BannerContext;