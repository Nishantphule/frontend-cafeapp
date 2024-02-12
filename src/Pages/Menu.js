import MediaCard from "../Components/MenuCard.js";
import { useAppContext } from "../Context/productsContext.js";

// function to show menu page
export default function Menu() {

  const { isLoading, isError, products } = useAppContext();

  if (isLoading) {
    return <center><div className="loading-spinner"></div></center>
  }

  else if (isError) {
    return <center><div className="loading-spinner"></div>Please Check Backend</center>
  }

  return (
    <div className="container-menu">
      {products.map((data) => (<MediaCard
        key={data.productId}
        item={data}
        id={data.productId}
      />))}
    </div>
  );
}
