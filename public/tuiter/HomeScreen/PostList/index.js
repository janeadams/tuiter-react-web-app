import PostListItem from "./PostListItem.js";
import posts from "./posts.js"

const PostList = () => {
   return (`
           <ul class="list-group">
           <li class="list-group-item"Post List</li>
           ${
            posts.map(post => {
               return(PostListItem(post));
            }).join('')
         }

           </ul>
`); }

export default PostList;