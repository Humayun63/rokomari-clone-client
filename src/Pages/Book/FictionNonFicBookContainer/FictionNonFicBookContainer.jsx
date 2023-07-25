import Slider from "react-slick";
import useFictionBooks from "../../../Hooks/useFictionBooks";
import FicNonFicCard from "../FicNonFicCard/FicNonFicCard";
import useNonFictionBooks from "../../../Hooks/useNonFictionBooks";




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
    const [nonFictionBooks, isNonFictionBooksLoading] = useNonFictionBooks();
    console.log(fictionBooks);
    if(isFictionBooksLoading || isNonFictionBooksLoading){
        return <h1>Loading</h1>
    }
    let settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 2.8,
        slidesToScroll: 2.8,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 2.5
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
        <div className="mx-auto my-24">
          <h2 className="text-lg font-bold text-gray-700 mb-3">{""}</h2>
            <Slider {...settings}> 
                <FicNonFicCard header={"ফিকশন বই"} books={fictionBooks}></FicNonFicCard>
                <FicNonFicCard header={"নন ফিকশন বই"} books={nonFictionBooks}></FicNonFicCard>
                <FicNonFicCard header={"ধর্মীয় বই"} books={fictionBooks}></FicNonFicCard>
                <FicNonFicCard header={"ক্যারিয়ার ও একাডেমিক বই"} books={fictionBooks}></FicNonFicCard>
            </Slider>
        </div>
    );
};

export default FictionNonFicBookContainer;