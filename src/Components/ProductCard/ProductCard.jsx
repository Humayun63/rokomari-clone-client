import './ProductCard.css'
const ProductCard = (props) => {
    const {specification, images, price} = props.product;
    console.log(props);
    return (
        <div className='flex flex-col justify-center text-center hover-effect h-[350px] p-3'>
            <img className='h-[186px]' src={images[0]} alt="" />
            <div className=' p-2 space-y-2'>
            <h3>{specification.title}</h3>
            <h4 className='text-sm text-gray-500'>{specification.brand}</h4>
            <div className='flex justify-around items-end'>
                <h4 className='text-[15px] text-gray-700 line-through'>৳{price.real_price}</h4>
                <h4 className=' font-semibold'>৳{price.discounted_price}</h4>
                <h4 className='text-red-500 text-sm'>{parseInt(((price.real_price-price.discounted_price) / price.real_price ) * 100)}% OFF</h4>
            </div>
            </div>
        </div>
    );
};

export default ProductCard;