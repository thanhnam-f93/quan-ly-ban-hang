import axios from "axios";

const CATEGORY_API_URL = "http://localhost:8080/api/v1/products";
const CATEGORY ="http://localhost:8080/api/v1/categories";
const SUPPLIER="http://localhost:8080/api/v1/suppliers";
const COLOR="http://localhost:8080/api/v1/colors";
const SIZE ="http://localhost:8080/api/v1/Size";
const BRAND="http://localhost:8080/api/v1/brands";
// function getCategory() {
//   return axios.get(CATEGORY_API_URL)
// }
function getColor(){
  return axios.get(COLOR)
}
function getSize(){
  return axios.get(SIZE)
}
function getBrand(){
  return axios.get(BRAND)
}


function getCategory(){
    return axios.get(CATEGORY_API_URL)
}
function getCategoryByID(categoryId) {

  return axios.get(CATEGORY_API_URL + "/"+ categoryId)
}
function UpdateCategory(category, categoryId) {
  return axios.put(CATEGORY_API_URL + "/" + categoryId, category);
}
function createCategory(category) {
  return axios.post(CATEGORY_API_URL, category);
}

function getCate(){
  return axios.get(CATEGORY)
}
function getSupplier(){
  return axios.get(SUPPLIER)
}
function DeleteCategory(categoryId) {
  return axios.delete(CATEGORY_API_URL + "/" + categoryId);
}
function Search(key) {
  return axios.get(CATEGORY_API_URL + "?=" + key);
}

export {
  getCategory,
  getCategoryByID,
  UpdateCategory,
  getCate,
  getSupplier,
  createCategory,
  DeleteCategory,
  Search,
  getColor,
  getSize,
  getBrand
};
