const TopNavListItem = (navItem) => {
  const activeClass = navItem.active ? 'active' : ''
  console.log(navItem, activeClass)
   return (`
   <li class="nav-item">
       <a class="nav-link ${activeClass}" href="${navItem.url}">${navItem.name}</a>
 </li>
`); }

export default TopNavListItem;