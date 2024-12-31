'use client';
import { cartActions } from "@/store/cartStore";
import { useSelector, useDispatch } from "react-redux";

import Image from "next/image";

export default function MenuItem({ title, description, price, imgUrl }) {
  const imagePath = `/images/${imgUrl}`;
  let state = useSelector((state) => state.cart);
  console.log("state before", state);
  const dispatch = useDispatch();
  const addElementToCart = () => {
    dispatch(
      cartActions.addItemToCart({
        title: title,
        price: price,
        description: description,
        imageUrl: imgUrl
      })
    );
  };


  return (
    <>
      <div className="flex-1 items-center justify-between relative">
        <Image
          className="p-2 rounded-full border-2 border-accent"
          src={imagePath}
          width={200}
          height={200}
          alt={title}
        />
        <div className="absolute bottom-12 left-5">
          <p className="bg-chinoise w-10 rounded-md text-creamy ">{price}$</p>
        </div>
      </div>

      <div className=" flex flex-col flex-1 items-center p-2 bg-transparant">
        <h1 className="p-2 text-3xl font-bold mb-6 underline">{title}</h1>
        <p className="p-2 break-normal mb-6">{description}</p>
        <button className="bg-accent text-creamy w-32 rounded-lg" onClick={addElementToCart}>
          Add to Cart
        </button>
      </div>
    </>
  );
}
