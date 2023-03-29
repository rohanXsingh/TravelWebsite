import React from 'react';
import '../../App.css';
import '../AllOtherCards/OtherPageCards.css';
import ProductCards from '../AllOtherCards/ProductCards';


export default function Products() {
  return (

    <div className='outerDiv'>

      <div className='midDiv'>
        <h2>Products that makes your journey easy!!</h2>
        <p></p>
      </div>


      <div className='maindivProduct'>

        <ProductCards
          src = "https://3.imimg.com/data3/GU/GM/MY-3839487/traveling-bag-500x500.jpg"
          alt = "TravelBag"
          text="Travel Bag"
          para="A small bag, as a valise or suitcase, usually made of leather, having an oblong shape, and used chiefly to hold clothes."
        />
        <ProductCards
          src ="https://media.istockphoto.com/id/1047601140/photo/pink-small-luggage-bag-side-and-front-view-isolated-on-white.jpg?s=612x612&w=0&k=20&c=1geFnR1FsD8nB9L3ylxDxEEZdmEKQ0LzMnto72XvgME="
          alt="Travel Suitcases"
          text="Travel Bag"
          para="A small bag, as a valise or suitcase, usually made of leather, having an oblong shape, and used chiefly to hold clothes."

        />
        <ProductCards
          src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzQ9xYDkok-6TNLg777pLA0c0IMOKZbxRgEgVZ0D3VwCDTEy6L1bFYBAAK5SmUD5FOcqk&usqp=CAU"
          alt = "Jackets"
          text="Wineter Jackets"
          para="A small bag, as a valise or suitcase, usually made of leather, having an oblong shape, and used chiefly to hold clothes."

        />

      </div>
    </div>





  );
}