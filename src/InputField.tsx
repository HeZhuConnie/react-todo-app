import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addItem} from "./store";
import {Button, Input} from '@material-ui/core';
import TodoApi from "./api/todo";

function InputField() {
    const [itemMsg, setItemMsg] = useState("");
    const dispatch = useDispatch();

    function handleChange(event: any) {
        const msg = event.target.value;
        setItemMsg(msg);
    }

    function handleOnClick() {
        dispatch(addItem({message: itemMsg, status: false}))
    }

    // handle API call
    function handleOnSubmit(event: any) {
        event.preventDefault()
        console.log("itemMsg: " + itemMsg)
        TodoApi.createTodo(itemMsg)
        setItemMsg("")
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <div className="InputField">
                <Input type="text" value={itemMsg} onChange={handleChange}/>
                <Button type="submit" onClick={handleOnClick}>提交</Button>
            </div>
        </form>
    );
}


export default InputField;