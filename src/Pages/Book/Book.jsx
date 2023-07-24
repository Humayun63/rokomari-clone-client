import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import ProductContainer from "../../Components/ProductContainer/ProductContainer";
import { useQuery } from "@tanstack/react-query";

const Book = () => {
    const { data: hotDeals, isLoading: isHotDealsLoading } = useQuery({
        queryKey: ['hot-deals'],
        queryFn: async() => {
            const res = await fetch('https://rokomari-clone-server.vercel.app/hot-deals');
            return res.json()
        },
      })
      if(isHotDealsLoading){
        return <h1>Loading</h1>
      }
    return (
        <div>
            <HomeSlider></HomeSlider>
            <ProductContainer data={hotDeals} headding={"Deals on Rokomari Products"}></ProductContainer>
        </div>
    );
};

export default Book;