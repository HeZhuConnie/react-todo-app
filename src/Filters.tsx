import React from "react";

class Filters extends React.Component<any, any> {

    shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean {
        return false;
    }
    render(): React.ReactNode {
        return (
            <div className="Filters">
                <button onClick={()=>{this.props.handleModeChange('All')}}>All</button>
                <button onClick={()=>{this.props.handleModeChange('Finished')}}>Finished</button>
                <button onClick={()=>{this.props.handleModeChange('Un Finished')}}>Un Finished</button>
            </div>
        );
    }


}

export default Filters;