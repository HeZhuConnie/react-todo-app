import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateStatus} from "./store";
import {Radio} from "@material-ui/core";

function Result() {
    const items = useSelector((state:any)=>state.items.filter((item: any) => state.viewMode === 'All' || (state.viewMode === 'Finished' && item.status) || (state.viewMode === 'Un Finished' && !item.status)));
    const dispatch = useDispatch();

    return (
        <div className="Result" key={items.length}>
            {items.map((item: any) =>
                <div key={item.message}>
                    <ItemComponent item={item} updateStatus={()=>dispatch(updateStatus(item))}/>
                </div>)}
        </div>
    );
}

function ItemComponent(props: any) {
    return (
        <div>
            <Radio checked={props.item.status} onClick={() => {
                props.updateStatus(props.item)
            }}/>
            <span>{props.item.message}</span>
        </div>
    )

}

export default Result;