import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addItem} from "./store";
import { Button, Input} from '@material-ui/core';

function InputField(props: any) {
    const [item, setItem] = useState("");
    const dispatch = useDispatch();

    function handleChange(event: any) {
        const msg = event.target.value;
        setItem(msg);
    }

    function handleOnClick() {
        dispatch(addItem({message: item, status: false}))
        setItem("")
    }

    return (
        <div className="InputField">
            <Input type="text" value={item} onChange={handleChange}/>
            <Button onClick={handleOnClick}>提交</Button>
        </div>
    );
}


export default InputField;