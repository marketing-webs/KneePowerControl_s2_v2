import React from 'react';
import {
  CardNewPrice,
  CardOldPrice,
  CardPercentage,
  CardPriceWrapper,
  CardTitle,
  CardSelectButton,
  CardWrapper,
  ProductWrapper,
  ProductPhotoWrapper,
  ProductItems,
  ProductItem,
  ProductPhoto,
  CardScroll,
} from './Cards.styles';

const card = {
  active: { y: -10 },
  notActive: { y: 0 },
};

const Card = ({
  title,
  percentage,
  oldPrice,
  newPrice,
  unitPrice,
  children,
  photo,
  items,
  ...props
}) => {
  return (
    <CardWrapper
      variants={card}
      initial="notActive"
      whileHover="active"
      {...props}
    >
      <CardTitle>{title}</CardTitle>
      <CardPercentage>Ten zestaw wybrało: {percentage}</CardPercentage>
      <CardPriceWrapper>
        <CardOldPrice>{oldPrice} </CardOldPrice>
        <CardNewPrice>{newPrice}</CardNewPrice>
      </CardPriceWrapper>
      <ProductWrapper>
        <ProductPhotoWrapper>
          <ProductPhoto alt="Product box with items" src={photo} />
        </ProductPhotoWrapper>
        <ProductItems>
          {items.map((item, index) => (
            <ProductItem key={index}>{item}</ProductItem>
          ))}
        </ProductItems>
      </ProductWrapper>
      <CardSelectButton>Wybieram</CardSelectButton>
    </CardWrapper>
  );
};

export default Card;
