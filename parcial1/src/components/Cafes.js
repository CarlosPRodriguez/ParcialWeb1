import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Cafe from "./Cafe";

function Cafes(){
    const [cafes, setCafes] = useState([]);
    
    useEffect(() => {
        const URL ="http://localhost:3001/GET/cafes";
        fetch(URL).then(data => data.json()).then(data =>{
            setCafes(data);
        }); 
    }, []);

    return(
        <div class="container text-right"> 
            <div class="row">
                <h1> El aroma mágico </h1>
                <div class="col">
                    <img class= "img-fluid" src="..\ParcialWeb1\encabezado.jpg" alt="..." width="700" />
                </div>
            </div>    
        <div className="container">
           <h2 className="mt-2">Listado de Cafes</h2>
            <hr></hr>
            <Row>
                {cafes.map(cafe =>(
                <Cafe cafe={cafe} /> 
                ) )
                }

            </Row>
        </div>
        </div>
                
    )
}

export default Cafes;