import React from "react";
import styled from "styled-components";
import CartItem from "../cartItem";
import { useSelector, useDispatch } from "react-redux";

const CartItemList = styled.div`
  padding: 20px 0;
`;

export default (props) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cartProducts);
  const cartIsEmpty = useSelector((state) => state.cartIsEmpty);

  // dispatch({
  //   type: "ADD_CART_PRODUCT",
  //   payload: { name, price, imageID },
  // });

  console.log(cartIsEmpty);

  return (
    <CartItemList className="CartItemList">
      {cartIsEmpty && "nenhum produto adicionado"}
      {!cartIsEmpty && (
        <>
          {cartProducts.map((item, i) => (
            <CartItem
              key={i}
              title={item.name}
              price={item.price}
              id={item.id}
            />
          ))}
        </>
      )}
    </CartItemList>
  );
};
