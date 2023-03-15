import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {

    const product = [
    {
      id:"1",
      title: "Sneaker",
      price: '11.96',
      rating: 5,
      image: 'product1_sneaker.jpg'
    },
    {
      id:"2",
      title:"Cloth",
      price:`239.0`,
      rating: 4,
      image:"product2_clothing.jpg"
    },
    {
      id:"3",
      title:"Gogle",
      price:`199.99`,
      rating:3,
      image:"product3_goggle.jpg"
    },
    {
      id:"4",
      title:"Overalls",
      price:`98.99`,
      rating: 5,
      image:"product4_overall.jpg"
    },
    {
      id:"5",
      title:"Watch",
      price:`598.99`,
      rating: 4,
      image:"product5_watch.jpg"
    },
    {
      id:"6",
      title:"Headphones",
      price:`1094.98`,
      rating: 4,
      image:"product6_headphones.jpg"
    }

  ]
  return (
    <div className="home">
      <div className="home-container">
        {product.map(data=> (
          <div className="home-row">
            <Product
              id= {data.id}
              title= {data.title}
              price= {data.price}
              rating={data.rating}
              image= {data.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
