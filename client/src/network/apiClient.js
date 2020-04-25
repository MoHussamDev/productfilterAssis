import axios from "axios";
import endpoints from "../constants/endpoints";

let instance = axios.create({
  baseURL: "http://localhost:3001/api",
});


 const getCategories = async () =>{
  try{
    const res = await instance.get(endpoints.departments)
    if(res){
     return res.data;
   }

  }catch(err){
   return err.response
  }
 }
 const getPromotions = async () =>{
  try{
    const res = await instance.get(endpoints.Promotions)
    if(res){
     return res.data;
   }
  }catch(err){
   return err.response
  }
 }

 const getProducts = async (skip,limit,filters)=>{
   try{
    const res = await instance.post(endpoints.Products,{skip,limit,filters});
    if(res){
      return res.data;
    }
   }catch(err){
    return err.response
   }
 }

export default {
  getCategories,
  getPromotions,
  getProducts
};
