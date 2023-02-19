const PostSummaryItem = (post) => {
    return (`
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
    <div>
    <h6>${post.topic}</h6>
      <b>${post.userName} <i class="fa fa-circle" aria-hidden="true"></i></b> - <small>${post.time}</small>
      <p class="mb-1">${post.title}</p>
    </div>
  </div>
  <img src="${post.image}" alt="" style="width: 45px; height: 45px"
       class="rounded" />
  </li>`); }

  export default PostSummaryItem;