import { Rating } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import NavScrollExample from './Navbars';
import '../../Project/Productpage.css'
const Search = () => {
        const location = useLocation();
        const searchQuery = new URLSearchParams(location.search).get("q");
        const navigate = useNavigate();
        const [searchResults, setSearchResults] = useState([]);
        console.log("query", searchQuery);
      
        const addToCart = (data) => {
          axios
            .post("http://localhost:3000/cart", data)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        };
        const updateqnty = (data) => {
          data.quantity = data.quantity + 1;
          axios
            .put(`http://localhost:3000/cart/${data.id}`, data)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        };
        const checkcart = (product) => {
          let data = {
            id: product.product_id,
            name: product.product_name,
            image: product.img_link,
            actual_price: product.actual_price,
            discounted_price: product.discounted_price,
            discount_percentage: product.discount_percentage,
      
            quantity: 1,
          };
          axios
            .get(`http://localhost:3000/cart/${product.product_id}`)
            .then((res) => {
              updateqnty(res.data);
            })
            .catch((err) => {
              console.log(err);
              addToCart(data);
            });
        };
        useEffect(() => {
          // Function to fetch data from the API based on the searchQuery
          const fetchData = async () => {
            try {
              const response = await fetch(
                `http://localhost:3000/Products?q=${searchQuery}`
              );
      
              const data = await response.json();
              setSearchResults(data);
              //   console.log("mairiu", response);
              //   console.log("ol:", data);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
      
          // Only fetch data if there's a valid searchQuery
          if (searchQuery) {
            fetchData();
          }
        }, [searchQuery]);
        console.log("rr", searchResults);
        const { product_id } = useParams();
      
        useEffect(() => {
          axios
            .get(`http://localhost:3000/Products?product=${product_id}`)
            .then((res) => {
              console.log(res);
              //   console.log(res.data);
            });
        }, []);
        const Navigate = useNavigate();
  return (
    <div>
          <NavScrollExample/>

        
        <h2>Search Results for: {searchQuery}</h2>
        <div className='flexi'>
      {searchResults.map((ele) => {
        console.log("ser", ele.rating);
        return (
          <>
          <div id='bori'>
             <div  role='button'
                onClick={()=>navigate(`/product/${ele.product_id}`)}>
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
              
          </>
        );
      })}
    </div>
  </div>
  )
}

export default Search