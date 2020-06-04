import React from "react";

class Result extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="Result">
                {this.props.items.map((item: any) =>
                    <div key={item.message}>
                        <ItemComponent ponent item={item} handleStatusChange={this.props.handleStatusChange}/>
                    </div>)}
            </div>
        );
    }


}

class ItemComponent extends React.Component<any, any>{
    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <div>
                <input type="radio" checked={this.props.item.status} onClick={()=>{this.props.handleStatusChange(this.props.item)}}/>
                <span>{this.props.item.message}</span>
            </div>
        );
    }


}

export default Result;