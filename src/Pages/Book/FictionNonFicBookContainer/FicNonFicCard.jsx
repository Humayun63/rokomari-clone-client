import { FaRegStar, FaStar, FaStarHalf, FaStarHalfAlt } from "react-icons/fa";
import Rating from "react-rating";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const FicNonFicCard = ({ header, books }) => {
  console.log(books);
  if (!books) {
    return <h1>Hi</h1>;
  }
  return (
    <div className=" bg-[#8ccdf6] border-[6px] border-[#8ccdf6] rounded">
      <h2 className="bg-[#8ccdf6] text-2xl font-semibold text-gray-800 text-center py-2">
        {header}
      </h2>
      <div className="bg-white p-1 rounded">
        <Tabs>
          <TabList>
            <Tab>বই</Tab>
            <Tab>লেখক</Tab>
          </TabList>
          <TabPanel className="h-80 overflow-y-auto">
            {books.map((book) => (
              <div key={book._id} className="flex gap-2 h-24 p-3">
                <h1>{books.indexOf(book) + 1} .</h1>
                <img className="w-12" src={book.image} alt="" />
                <div>
                  <h3>{book.title.slice(0, 25)}...</h3>
                  <h4>{book.author.name}</h4>
                  <div className="flex items-center gap-2">
                    <Rating
                    className="text-orange-400"
                    emptySymbol={<FaRegStar></FaRegStar>}
                    fullSymbol={<FaStar></FaStar>}
                    fractions={2}
                    initialRating={book.ratings}
                    readonly
                  />
                  <span>({book.reviews})</span>
                  </div>
                  
                </div>
              </div>
            ))}
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
        <div className="flex justify-center items-center">
          <button className="px-4 py-2 border border-gray-400 rounded hover:bg-green-500 hover:text-white hover:border-green-500 transition-all">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default FicNonFicCard;
