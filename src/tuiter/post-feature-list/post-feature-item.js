import React from "react";
const PostFeatureItem = (
  {
    post = {
      "user": "React Official",
      "userName": "ReactJS",
      "time": "2h",
      "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      "tweets": "21K"
    }
  }
) => {
 return(
  <li className="list-group-item">
    <div className="row">
    <div className="col-2">
        <img height={48} width={48} className="float-end rounded-3" src={`${post.image}`}/>
      </div>
      <div className="col-10">
        <div><span className="fw-bolder">{post.user}</span> @{post.userName} . {post.time}</div>
        <div>{post.title}</div>
        <img className="card-img-top rounded" src={`${post.feature}`} width="100%"/>
      </div>
    </div>
  </li>
 );
};
export default PostFeatureItem;