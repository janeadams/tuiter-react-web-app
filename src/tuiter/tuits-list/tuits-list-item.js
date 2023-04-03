import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import TuitsStats from "./tuits-stats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitsListItem = (
    {
        tuit = {
            _id: 234,
            topic: "Tesla",
            userName: "Tesla",
            time: "4d",
            title: "Elon Musk is the greatest fraud in history",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
            liked: false,
            replies: 234,
            retuits: 543,
            likes: 3456,
            handle: "@react",
            tuit: "Let's focus on posts related to actual human achievement."
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return(
        <div className="list-group-item pt-3 wd-post-list-item border-1">
            <div className="row">
                {/* Left Avatar */}
                <div className="col-auto">
                    <img src={`${tuit.image}`} className="rounded-circle" width="48px" alt="avatar"/>
                </div>
                {/* Right Content */}
                <div className="col-10">
                    {/* User's name handle and post time */}
                    <div>
                        <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)} />
                        <span className="fw-bolder">{tuit.userName}{' '}</span>
                        <FontAwesomeIcon icon="fa-solid fa-circle-check" className="text-primary"/>
                        <span className="text-secondary">{' '}{tuit.handle} {'\u00B7'} {tuit.time}</span>
                    </div>
                    {/* Tuit */}
                    <div className="mb-4">
                        {tuit.tuit}
                    </div>
                    {/* Bottom Icons */}
                    <TuitsStats tuit={tuit}/>
                </div>
            </div>
        </div>
    )
}

export default TuitsListItem;