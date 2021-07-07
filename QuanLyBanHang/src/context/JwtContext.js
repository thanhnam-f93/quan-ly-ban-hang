import React from 'react';
const JwtContext = React.createContext(null);
JwtContext.displayName = "jwtContext";
const ProductContext = React.createContext(null);
ProductContext.displayName = "productContext";
export {JwtContext, ProductContext};