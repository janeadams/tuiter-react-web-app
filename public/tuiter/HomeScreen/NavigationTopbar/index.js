import TopNavListItem from "./TopNavListItem.js";
import nav from "./nav.js"
const NavigationTopbar = () => {
   return (`
   <ul class="nav mb-2 nav-tabs">
           ${
            nav.map(navItem => {
               return(TopNavListItem(navItem));
            }).join('')
         }

         </ul>
`); }

export default NavigationTopbar;