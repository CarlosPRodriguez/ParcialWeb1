import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

function CafeDetail(props){

    const params = useParams();
    console.log(params.cafeId)
    const [cafes, setCafe] = useState([]);

    useEffect(() => { 
        const URL ="http://localhost:3001/GET/cafes";
        fetch(URL).then(data => data.json())
        .then(data =>{setCafe(data);
        }); 
    }, []);

   console.log(cafes)

   const especial = cafes.find((cafe) => cafe.nombre === (params.cafeId)) || {};

    return(
        <div>
        <div class="container text-right">
            <div class="row">
                <h1> El aroma mágico </h1>
                <div class="col">
                    <img class= "img-fluid" src="C:\Users\charl\ParcialWeb1\encabezado.jpg" alt="..." width="700" />
                </div>
              </div> 
        </div>
        <h1>Listado de cafe</h1>
        <hr></hr>
        <div className="align-self">
        <Card style={{ width: '45rem', height: '30rem' }} className="mb-3" >

           <Card.Body>
            <Row>
               <Col>
               <Card.Title>
                    <h1>   {especial.nombre}</h1>
                </Card.Title>
                <Card.Text> : {especial.fecha_cultivo } </Card.Text>
               <Card.Img
                    style={{ height: "14rem" }}
                    variant="top"
                    src={especial.imagen}
                    alt={especial.description}
                />
                <hr></hr>
                <Card.Text> Notas </Card.Text>
                <Card.Text> {especial.carMaker} </Card.Text>
                <Card.Text> Cultivado a una altura : {especial.altura} msnm </Card.Text>
            
               </Col>
               </Row>
           </Card.Body>
       </Card>
       </div>
 
        </div>
    )
}

export default CafeDetail;