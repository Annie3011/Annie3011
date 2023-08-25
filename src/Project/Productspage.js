import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
// import '../Project/Productpage.css'
import NavScrollExample from './Navbar/Navbars';
import '../Project/Productpage.css'
const Productspage = (props) => {
    const [data, setData] = useState([])
    const { product_id } = useParams();
    const addtocart = (data)=>{
        axios.post('http://localhost:3000/carts',data)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err);
        })
      }
      const updatequantity=(data)=>{
        data.quantity += 1
        axios.put(`http://localhost:3000/carts/${data.id}`,data)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err);
        })
      }
      const checkcart = (product)=>{
        let data ={
            id: product.product_id,
            name:product.product_name,
            image:product.img_link,
            price:product.discounted_price,
            quantity:1
        }
      axios.get(`http://localhost:3000/carts/${product.product_id}`)
        .then((res)=>{
            updatequantity(res.data)
        })
        .catch((err)=>{
            console.log(err);
            addtocart(data)
        })
      }
    useEffect(() => {
        axios.get(`http://localhost:3000/Products?products_id${product_id}`)
            .then((res) =>
                setData(res.data)
            )
            .catch(() => {
                setData([])
            }
            )
    }, [])
    let prodpage= props.values;
    const filtproducts = data.filter((prods)=>{
        return(
            prods.category === prodpage
        );
    });
    console.log("find:",filtproducts)
    const Navigate = useNavigate();
  return (
    <div>
    <NavScrollExample/>
    <div className='flexi'>
        {filtproducts.map((ele)=>{
            return(<>
            <div id='bori'>
             <div  role='button'
                onClick={()=>Navigate(`/product/${ele.product_id}`)}>
                <img src={ele.img_link} width={'250rem'} height={'250rem'} id='move'></img>
                 <p>Product name:{ele.product_name}</p>
                 <h6>Actual Price:{ele.actual_price}</h6>
                 <h6>Discounted price:{ele.discounted_price}</h6>
                 <h6>Rating:{ele.rating}</h6>
                </div>
                <div className='fll'>
                    <button className='hjk' id=''onClick={()=>checkcart(ele)}>Add to Cart</button>
                    <button className='hjk' onClick={()=>Navigate('/Buynow')}>Buy Now</button>
                </div>
                </div>
            </>)
        })}
    </div>
    </div>
  )
}

export default Productspage