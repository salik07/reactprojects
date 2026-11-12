import React from 'react'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
           YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
           <div className="hero-buttons">
            <button className="shop-now">Shop Now</button>
            <button className="category">Category</button>
          </div>
          <div className="Footer">
           <p>Also Available on</p>
           <div className="footer-icons">
            <img src="/images/flipkart.png" alt="flipkart" />
            <img src="/images/amazon.png" alt="amazon" />
           </div>
          </div>
      </div>
      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="hero" />
      </div>
    </div>
  )
}

export default Hero
