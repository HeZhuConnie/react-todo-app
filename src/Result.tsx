import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteItem, updateStatus} from "./store";
import {Button, Radio} from "@material-ui/core";
import "./Result.css"

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
    const dispatch = useDispatch();

    function handleOnClick() {
        dispatch(deleteItem(props.item));
    }

    return (
        <div>
            <Radio checked={props.item.status} onClick={() => {
                props.updateStatus(props.item)
            }}/>
            <span>{props.item.message}</span>
            <Button className="delete-button" onClick={handleOnClick}>删除</Button>
        </div>
    )
}

export default Result;