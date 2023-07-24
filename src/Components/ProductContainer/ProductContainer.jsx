import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../ProductCard/ProductCard";



const SampleNextArrow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "#30bbfcce", padding: "10px", borderRadius: "2px", width: "40px", height: "80px", zIndex: "10", display: "flex", alignItems: "center", color: "black" }}
      onClick={onClick}
    />
  );
}

const  SamplePrevArrow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "#30bbfcce", padding: "10px", borderRadius: "2px", width: "40px", height: "80px", zIndex: "10", display: "flex", alignItems: "center", color: "black" }}
      onClick={onClick}
    >H</div>
  );
}





const ProductContainer = () => {
    let settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className="w-[90%] mx-auto shadow-xl p-8 bg-white">
            <Slider {...settings}>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          
         
        </Slider>
        </div>
    );
};

export default ProductContainer;