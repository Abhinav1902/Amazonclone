import React from 'react'
import "./Home.css"
import Product from './Product';
function Home() {
  return (
    <div className="home">
  <img 
  className="home__img"  src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>
  
<div className="home__row">
<Product id={12321341} title=" Samsung Watch"
price={11.96} rating={5}
images="https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-watch4-classic-399208-sm-r890nzsainu-481181009?$730_584_PNG$"
/>

<Product id={12321341} title=" School Bag"
price={10.45} rating={4}
images="https://5.imimg.com/data5/CC/JL/MY-29211282/designer-school-bag-500x500.jpg"
/>

</div>
<div className="home__row">
<Product id={12321341} title="Honda City"
price={1100.96} rating={5}
images="https://www.91-cdn.com/hub/wp-content/uploads/2022/05/Honda_City_e_HEV.jpg"/>
<Product id={12321341} title=" Dell Laptop"
price={110.56} rating={4}
images="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/14-7430/media-gallery/notebook-latitude-14-7430-t-gray-gallery-4.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=707&qlt=100,0&resMode=sharp2&size=707,402"
/>
<Product id={12321341} title="Dairy Milk Silk"
price={8.96} rating={5}
images="https://5.imimg.com/data5/FU/AF/PH/SELLER-39546977/cadbury-dairy-milk-silk-heart-shaped-valentine-gift-pack-220g-2-x-silk-60gm-2-x-silk-bubbly-50gm--1000x1000.jpeg"
/>
</div>
<div className="home__row">
<Product id={12321341} title="Samsung LED TV"
price={35.96} rating={5}
images="https://fdn.gsmarena.com/imgroot/news/21/03/samsung-tvs-2021/inline/-1200/neoqled.jpg"
/>
</div>


</div>


  );
}

export default Home;