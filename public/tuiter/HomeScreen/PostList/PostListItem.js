const PostListItem = (post) => {
  return (`
  <li class="list-group-item d-flex justify-content-between align-items-center">
  <div class="d-flex align-items-center">
  <div>
  <b>${post.userName}</b> <i class="fa fa-circle" aria-hidden="true"></i></b><small> ${post.handle} - ${post.time}</small>
    <p class="mb-1">${post.message}</p>
    <div class="card w-100">
  <img class="card-img-top rounded" src="${post.image}" style="height: 200px; width: 100%; object-fit: cover;">
  <div class="card-body">
    <h5 class="card-title">${post.title}</h5>
    <p class="card-text">${post.body}</p>
  </div>
</div>
</div>
</li>`); }

export default PostListItem;