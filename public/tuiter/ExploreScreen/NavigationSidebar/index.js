import SideNavListItem from "./SideNavListItem.js";
import nav from "./nav.js"

const NavigationSidebar = () => {
    return(`
      <div class="list-group">
      ${
        nav.map(navItem => {
           return(SideNavListItem(navItem));
        }).join('')
     }
      </div>
      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tweet</a>
      </div>
    `);
   }
export default NavigationSidebar;