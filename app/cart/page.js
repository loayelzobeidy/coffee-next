"use client";
import { cartActions } from "@/store/cartStore";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
export default function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log("Cartt", cart);
  const dispatch = useDispatch();
  const addElementToCart = (title, price, description, imgUrl) => {
    dispatch(
      cartActions.addItemToCart({
        title: title,
        price: price,
        description: description,
        imageUrl: imgUrl,
      })
    );
  };
  const removeElementFromCart = (title, price, description) => {
    dispatch(
      cartActions.removeItemFromCart({
        title: title,
        price: price,
        description: description,
      })
    );
  };
  return (
    <>
      <div className="text-center p-2">
        <h1 className="text-4xl font-bold mb-4 text-celadon">Your Chart</h1>
        <h1 className="text-4xl font-bold mb-4 text-celadon">
          Total Price: {cart.totalPrice} $
        </h1>

        <ul className="flex flex-col justify-between items-center space-y-4">
          {cart.items.map((item) => {
            const imagePath = `/images/${item.imageUrl}`;
            console.log("link ", imagePath);
            const itemPrice = Math.ceil(item.price / item.quantity);

            return (
              <li
                key={item.title}
                className="bg-celadon w-1/4 flex rounded-3xl h-36 p-4"
              >
                <Image
                  className="flex-1 rounded-full w-28 h-28 ml-2"
                  imagePath={imagePath}
                  alt={item.title}
                  width={150}
                  height={150}
                />
                <div className="flex-1 flex flex-col justify-between items-center">
                  <h1 className="text-4xl underline">{item.title}</h1>
                  <p>Price: {item.price} $</p>
                  <p>Quantity: {item.quantity}</p>

                  <div className="flex mb-4">
                    <button
                      className="inline-block bg-blue-500 text-white px-2 py-1 rounded-full mx-2 p-1"
                      onClick={() => {
                        addElementToCart(
                          item.title,
                          itemPrice,
                          item.description,
                          item.imageUrl
                        );
                      }}
                    >
                      +
                    </button>
                    <button
                      className="inline-block bg-red-500 text-white px-2 py-1 rounded-full  mx-2 p-1"
                      onClick={() => {
                        removeElementFromCart(
                          item.title,
                          itemPrice,
                          item.description
                        );
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
