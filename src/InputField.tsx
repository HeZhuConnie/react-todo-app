import React from "react";

class InputField extends React.Component<any,any>{
    constructor(props:any) {
        super(props);
        this.state = {items : ''};
    }

    handleChange=(event:any)=>{
        this.setState({items: event.target.value});
    }

    handleOnClick=()=>{
        console.log(this.state.items);
        this.props.addItem({message:this.state.items,status:false})
        this.setState({items:''})
    }

    render(){
        return (
            <div className="InputField">
                <input type = "text" value={this.state.items} onChange={this.handleChange}/>
                <button onClick={this.handleOnClick}>提交</button>
            </div>
        );
    }
}

export default InputField;