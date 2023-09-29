
import Listado from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom';

function Cafe(props){
   return(
        <div class="container text-right"> 
            <div class="row">
                <h1> El aroma mágico </h1>
                <div class="col">
                    <img class= "img-fluid" src="..ParcialWeb1\encabezado.jpg" alt="..." width="700" />
                </div>
            </div>   
       <Listado style={{ width: '18rem', height: '24rem' }} className="mb-3">
        
        
        <li class="list-group-item">  {props.cafe.id}  <Link to={"/cafes/" + props.cafe.nombre}  > 
                {props.cafe.nombre}
                </Link>
                {props.cafe.tipo}
                {props.cafe.region}   
            </li>

        
       </Listado>
       </div>
   );
}

export default Cafe;