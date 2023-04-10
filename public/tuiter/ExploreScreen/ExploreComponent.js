import PostSummaryList from "./PostSummaryList/index.js";
import NavigationTopbar from "./NavigationTopbar/index.js"

const ExploreComponent = () => {
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
           <div class="row">
                      <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA11EPIx.img" class="img-fluid">
          </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
