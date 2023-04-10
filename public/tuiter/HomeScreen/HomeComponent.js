import NavigationTopbar from "./NavigationTopbar/index.js"
import PostList from "./PostList/index.js";

const HomeComponent = () => {
    return(`
    <div class="input-group">
                <button class="btn rounded-pill border-0 ml-n5" type="button">
                    <i class="fa fa-search"></i>
                </button>
            <input class="form-control py-2 rounded-pill mr-1 pr-5" type="search" value="Search Tuiter" id="search">
        </div>
           <ul class="nav mb-2 nav-tabs">
                      ${NavigationTopbar()}
           </ul>
           ${PostList()}
    `);
}
export default HomeComponent;
