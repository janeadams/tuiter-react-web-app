const WhoToFollowListItem = (person) => {
   return (`
   <li class="list-group-item d-flex justify-content-between align-items-center">
   <div class="d-flex align-items-center">
     <img src="${person.avatarIcon}" alt="" style="width: 45px; height: 45px"
       class="rounded-circle" />
     <div class="ms-3">
       <p class="fw-bold mb-1">${person.userName}</p>
       <p class="text-muted mb-0">@${person.handle}</p>
     </div>
   </div>
   <span class="badge rounded-pill badge-success">Active</span>
 </li>
`); }

export default WhoToFollowListItem;