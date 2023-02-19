const SideNavListItem = (navItem) => {
  const activeClass = navItem.active ? 'active' : ''
  console.log(navItem, activeClass)
   return (`
 <a class="list-group-item ${activeClass}" href="${navItem.url}">
            <i class="${navItem.icon}"></i><span class="d-none d-xl-inline">  ${navItem.name}</span></a>
`); }

export default SideNavListItem;