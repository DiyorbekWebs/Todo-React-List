import React from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import '../App.css';
import Footer from '../components/Footer/Footer';

const Translate = () => {
    var [lang,setLang]= React.useState('uz')
    return (
        <>
         <Header lang={lang} setLang={setLang}/>   
         <Main lang={lang} setLang={setLang}/>
         <Footer lang={lang} setLang={setLang}/>
        </>
    );
}

export default Translate;
