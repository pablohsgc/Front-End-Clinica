import React from 'react';
import './galeria.css';
import img1 from './img/img1.jpg'; 
import img2 from './img/img2.jpg'; 
import img3 from './img/img3.jpg'; 
import img4 from './img/img4.jpg'; 
import img5 from './img/img5.jpg'; 
import img6 from './img/img6.jpg'; 

export function Galeria(){
    return(
        <div className="container">
        <div className="alert alert-info">
            Nossa Clínica
        </div>
            <div className="row">
                <div className="col-lg-4"> <img className="imagens-galeria" src={img1} alt="img1"/> </div>
                <div className="col-lg-4"> <img className="imagens-galeria" src={img2} alt="img2"/> </div>
                <div className="col-lg-4"> <img className="imagens-galeria" src={img3} alt="img3"/> </div>
            </div>
            <div className="row">
                <div className="col-lg-4"> <img className="imagens-galeria" src={img4} alt="img4"/> </div>
                <div className="col-lg-4"> <img className="imagens-galeria" src={img5} alt="img5"/> </div>
                <div className="col-lg-4"> <img className="imagens-galeria" src={img6} alt="img6"/> </div>
            </div>

    </div>
    );
}
