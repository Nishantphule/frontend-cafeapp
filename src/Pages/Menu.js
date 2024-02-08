import MediaCard from "../Components/Card";
import { API } from "../global.js"
import { useState, useEffect } from 'react';

export default function Menu() {

  // const navigate = useNavigate();
  const [list, setList] = useState([]);

  const getMenu = () => {
    fetch(`${API}/menu/items`, {
      method: "GET"
    })
      .then((data) => data.json())
      .then((result) => setList(result.items))
  };

  useEffect(() => getMenu(), []);

  return (
    <div className="container-menu">
      {list.map((data) => (<MediaCard
        key={data.productId}
        item={data}
        id={data.productId}
      />))}
    </div>
  );
}
