import axios from "axios";
import React from "react";
import * as UrlConstant from "./../constants/UrlConstant";

async function  callApi(endpoint, method, body,token){
    var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer " + token);
  var raw = JSON.stringify(body);
  console.log(raw);
  var requestOptions = {
    method: method,
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const response = await fetch(UrlConstant.API_URL+"/"+endpoint, requestOptions);
  return response;
}
export {callApi};