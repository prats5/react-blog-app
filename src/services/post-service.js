import { privateAxios } from "./helper";
import { myAxios} from "./helper";

export const createPost = (postData) => {
    console.log(postData);
    return privateAxios.post(`/user/${postData.userId}/category/${postData.categoryId}/posts`, postData
      ).then((response) => response.data);
  };


//get all posts

export const loadAllPosts = () => {
    return myAxios.get(`/posts`).then((response) => response.data);
  };


  //load single post of given id
export const loadPost = (postId) => {
  return myAxios.get("/posts/" + postId).then((reponse) => reponse.data);
};


export const createComment=(comment, postId)=> {
  return privateAxios.post(`/post/${postId}/comments`, comment);
};


//get cateory wise posts
export function loadPostCategoryWise(categoryId) {
  return privateAxios.get(`/category/${categoryId}/posts`)
    .then((res) => res.data);
}