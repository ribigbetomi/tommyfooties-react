import { useState } from "react";
import { Link } from "react-router-dom";
import ShoeCard from "./shoeCard";

const SearchShoeList = ({ data }) => {

  const [searchQuery, setSearchQuery] = useState('')

  const filtered = data.filter((item) => {
    return (
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  const shoeList = filtered.map((item, index) => {
    return (
      <Link to={`/shoe/${item.id}`} style={{textDecoration:'none'}}>
        <ShoeCard key={index} item={item} />
      </Link>
    );
  });
  return (
    <div>
      <div className="search-shoe">
        <input
          type="search"
          placeholder="Type here..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />{" "}
      </div>
      <div className="footer-space">{shoeList}</div>
    </div>
  );
};

export default SearchShoeList;
