import { myAxios } from "./helper";

export const loadAllCategories=()=>{
  return myAxios.get('/catg/all').then(respone=>{
    return respone.data;
  });
  
};