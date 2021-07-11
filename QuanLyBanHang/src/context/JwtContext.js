import React from 'react';
const JwtContext = React.createContext(null);
JwtContext.displayName = "jwtContext";
const ProductContext = React.createContext(null);
ProductContext.displayName = "productContext";
const SalerContext = React.createContext(null);
SalerContext.displayName = "salerProduct";
export {JwtContext, ProductContext, SalerContext};