import glow from '../../../public/Glow_And_Lovely_Advanced_Multivitamin_Cr-Glow_and_Lovely-e3831-326701.jpg'
import './ProductCard.css'
const ProductCard = () => {
    return (
        <div className='flex flex-col justify-center text-center hover-effect p-3'>
            <img className='h-[186px]' src={glow} alt="" />
            <div className='text-sm'>
            <h3>Glow And Lovely Advanced Multivitamin Cream 25 Gm - 69666099</h3>
            <h4>গ্লও অ্যান্ড লাভ্লি</h4>
            <h4>৳93</h4>
            </div>
        </div>
    );
};

export default ProductCard;