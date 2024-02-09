import MediaCard from "../Components/MenuCard.js";
import { useAppContext } from "../Context/productsContext.js";
// import { API } from "../global.js"
// import { useState, useEffect } from 'react';

export default function Menu() {

  const { isLoading, products } = useAppContext();

  if (isLoading) {
    return <><center>.....Loading</center></>
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
