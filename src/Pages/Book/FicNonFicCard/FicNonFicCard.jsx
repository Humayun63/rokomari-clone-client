import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import './FicNonFicCard.css'
const FicNonFicCard = ({ header, books }) => {
  if (!books) {
    return <h1>Hi</h1>;
  }
  return (
    <div className=" bg-[#8ccdf6] border-[6px] border-[#8ccdf6] rounded mr-5">
      <h2 className="bg-[#8ccdf6] text-2xl font-semibold text-gray-800 text-center py-2">
        {header}
      </h2>
      <div className="bg-white p-1 rounded">
        <Tabs selectedTabClassName="activetab">
          <TabList className="flex justify-center text-sm gap-4 border-b border-gray-50">
            <Tab className="border w-20 py-1 flex justify-center items-center bg-gray-50 rounded-t">বই</Tab>
            <Tab className="border w-20 flex justify-center items-center bg-gray-50 rounded-t">লেখক</Tab>
          </TabList>
          <TabPanel className="h-80 overflow-y-auto">
          
            
            {books.map((book) => (
              <div key={book._id}>
                <div className="flex gap-2 h-24 p-3">
                <h1>{books.indexOf(book) + 1} .</h1>
                <img className="w-12" src={book.image} alt="" />
                <div className="flex flex-col justify-around">
                  <h3 className="text-sm">{book.title.slice(0, 25)}...</h3>
                  <h4 className=" text-xs text-gray-600">{book.author.name}</h4>
                  <div className="flex text-xs items-center gap-2">
                    <Rating
                    className="text-orange-400"
                    emptySymbol={<FaRegStar></FaRegStar>}
                    fullSymbol={<FaStar></FaStar>}
                    fractions={2}
                    initialRating={book.ratings}
                    readonly
                  />
                  <span className="text-gray-600">({book.reviews})</span>
                  </div>
                  
                </div>
              </div>
              </div>
            ))}
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
        <div className="flex justify-center py-3 items-center">
          <button className="px-4 text-sm py-2 border border-sky-400 hover:bg-sky-500 text-sky-500 hover:text-white hover:border-sky-500 transition-all">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default FicNonFicCard;
