import React from "react";
import {connect, useSelector, useDispatch} from "react-redux";
import {changeViewModeActionCreator} from "./store";

function Filters() {
    const viewMode = useSelector((state: any) => state.viewMode);
    const dispatch = useDispatch();

    return (
        <div className="Filters">
            <button className={viewMode === "All" ? "highlighted-button" : ""} onClick={() => {
                dispatch(changeViewModeActionCreator('All'))
            }}>All
            </button>
            <button className={viewMode === "Finished" ? "highlighted-button" : ""} onClick={() => {
                dispatch(changeViewModeActionCreator('Finished'))
            }}>Finished
            </button>
            <button className={viewMode === "Un Finished" ? "highlighted-button" : ""} onClick={() => {
                dispatch(changeViewModeActionCreator('Un Finished'))
            }}>Un Finished
            </button>
        </div>
    );
}


export default connect()(Filters);