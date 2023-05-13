import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Product = ({singleProduct}) => {
    //console.log(singleProduct);
    const {img, title, price} = singleProduct;
    return (
        <div className="w-[326px] p-5 border-2 rounded-xl">
            <div className="bg-gray-100 py-7 rounded-lg">
            <img className="lg:w-[156px] lg:h-[156px] lg:mx-16" src={img} alt="" />
            </div>
            <div className="text-center">
           {/*  <Rating
            //    style={{ maxWidth: 180 }}
               value={5}
               readOnly
            /> */}
             <div className='flex justify-center mt-5'>
            <Rating style={{ maxWidth: 100 }} value={5} />
            </div>
            <h4 className="text-xl font-bold">{title}</h4>
            <p className="text-lg text-orange-500 font-semibold">Price: {price}</p>
            </div>
        </div>
    );
};

export default Product;