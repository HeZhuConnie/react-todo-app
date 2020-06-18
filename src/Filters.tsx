import React from "react";
import {connect, useSelector, useDispatch} from "react-redux";
import {changeViewModeActionCreator} from "./store";
import Button from '@material-ui/core/Button';

function Filters() {
    const viewMode = useSelector((state: any) => state.viewMode);
    const dispatch = useDispatch();

    return (
        <div className="Filters">
            <Button className={viewMode === "All" ? "highlighted-button" : ""} onClick={() => {
                dispatch(changeViewModeActionCreator('All'))
            }}>All
            </Button>
            <Button className={viewMode === "Finished" ? "highlighted-button" : ""} onClick={() => {
                dispatch(changeViewModeActionCreator('Finished'))
            }}>Completed
            </Button>
            <Button className={viewMode === "Un Finished" ? "highlighted-button" : ""} onClick={() => {
                dispatch(changeViewModeActionCreator('Un Finished'))
            }}>Not Completed
            </Button>
        </div>
    );
}


export default connect()(Filters);