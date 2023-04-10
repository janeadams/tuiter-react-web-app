import React from "react";
import postsArray from './posts.json';
import PostFeatureItem from "./post-feature-item";

const PostFeatureList = () => {
 return(
   <ul className="list-group">
     {
       postsArray.map(post =>
         <PostFeatureItem
           key={post._id} post={post}/> )
     }
   </ul>
 );
};
export default PostFeatureList;