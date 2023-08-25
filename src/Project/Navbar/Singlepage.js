import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../Navbar/Singlepage.css'
import NavScrollExample from './Navbars';
import NativeSelectInput from '@mui/material/NativeSelect/NativeSelectInput';
const Singlepage = () => {
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
        axios.get(`http://localhost:3000/Products?product_id=${product_id}`)
            .then((res) =>{
                setData(res.data[0])
                 console.log(res.data[0])}
            )
            .catch(() => {
                setData([])
            }
            )
    }, [])
    const Navigate = useNavigate();
  return (
    <div>
      <NavScrollExample/>
      {[data].map((ele)=>{return(<>
      <div id='marg'>
      <p id='cll'>Product Name:{ele.product_name}</p>
      <hr></hr>
      <div className='par'>
      <div>
      <img src={ele.img_link} width={'350px'} height={'350px'} className='align'></img>
      </div>
      <div className='jkk'>
      {/* <h5>Product category:{ele.category}</h5> */}
      <hr></hr>
      <h5 style={{color:'black'}}>Actual Price:<del style={{color:'red'}}>{ele.actual_price}</del></h5>
      <hr></hr>
      <h5 >Discounted Price:<b style={{color:'green'}}>{ele.discounted_price}</b></h5>
      <hr></hr>
      <h5>Percentage of discount:<b style={{color:'blue'}}>{ele.discount_percentage}</b></h5>
      <hr></hr>
      <div className='tab'>
        <table>
        <tr><td>Rating:{ele.rating}</td>
        <td>Rating Count:{ele.rating_count}</td></tr>
        </table>
      </div>
      </div>
      </div>
      <div id='kll'>
      <table>
        <tr><td ><Link id='buy' to={('/Buynow')}>BuyNow</Link></td>
        <td><Link id='add' onClick={()=>checkcart(ele)}>Add To Cart</Link></td></tr>
        </table> 
      </div>
      <div className='bxx'>
      <h4 style={{color:'purple'}}>About Product</h4>
      <hr></hr>
      <h6>{ele.about_product}</h6></div>
      <div className='bxx'>
        <h4 style={{color:'purple'}}>Reviewers</h4>
        <hr></hr>
        <h6>{ele.user_name}</h6>
        <hr></hr>
        <h4 style={{color:'purple'}}>Reviews</h4>
        <hr></hr>
        <h6>{ele.review_id}</h6>
        <h6>{ele.review_title}</h6>
        <h6>{ele.review_content}</h6>
      </div>
      </div>
      </>
      )})}
    </div>
  )
}

export default Singlepage