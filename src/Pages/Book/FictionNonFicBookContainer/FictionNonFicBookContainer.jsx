import Slider from "react-slick";
import useFictionBooks from "../../../Hooks/useFictionBooks";
import FicNonFicCard from "./FicNonFicCard";





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



const FictionNonFicBookContainer = () => {

    const [fictionBooks, isFictionBooksLoading] = useFictionBooks();
    console.log(fictionBooks);
    if(isFictionBooksLoading){
        return <h1>Loading</h1>
    }
    let settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
        <div className="w-[90%] mx-auto shadow-xl">
          <h2 className="text-lg font-bold text-gray-700 mb-3">{""}</h2>
            <Slider {...settings}> 
                <FicNonFicCard header={"ফিকশন বই"} books={fictionBooks}></FicNonFicCard>
            </Slider>
        </div>
    );
};

export default FictionNonFicBookContainer;