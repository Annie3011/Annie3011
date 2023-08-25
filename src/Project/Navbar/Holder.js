import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate, useParams } from 'react-router-dom';
import '../Navbar/Holder.css'
const Holder = () => {
    const [data, setData] = useState([])
    const { product_id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:3000/Products?products_id${product_id}`)
            .then((res) =>
                setData(res.data)
                // console.log(res.data)
            )
            .catch(() => {
                setData([])
            }
            )
    }, [])
    const Navigate = useNavigate();
    return (
    <>
            <div className='flexy'>
                {data.map((ele) => {
                    return (  
                        <div  role='button'
                        onClick={()=>Navigate(`/product/${ele.product_id}`)}>
                        <Card style={{ width: '20rem'} }>
                            <Card.Img variant="top" src={ele.img_link} />
                            <Card.Body>
                                <Card.Title>{ele.product_name}</Card.Title>
                                <Card.Text>
                                    {ele.category}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Actual Price:{ele.actual_price}</ListGroup.Item>
                                <ListGroup.Item>Discounted price:{ele.discounted_price}</ListGroup.Item>
                                <ListGroup.Item>Rating:{ele.rating}</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#" className='hjk'>Buy Now</Card.Link>
                                <Card.Link href="#" className='hjk'>Add to Cart</Card.Link>
                            </Card.Body>
                        </Card>
                        </div>
                    )
                })}
                </div>
            </>
            )
   

}
            export default Holder