import React from 'react';
import './App.css';
import InputField from './InputField';
import Filters from './Filters';
import Result from './Result';

class App extends React.Component<any, any> {
    state={items: [], viewMode:'All'}

    addItem = (item: any) => {
        this.setState({items: [...this.state.items, item]});
        console.log(this.state.items)
    }

    handleStatusChange = (updateItem: any) => {
        this.setState({
            items: this.state.items.map((item: any) => {
                if (updateItem.message === item.message) {
                    return {message: item.message, status: !item.status}
                }else{
                    return  item
                }
            })
        })
    }

    handleViewModeChange=(mode:any)=>{
        this.setState({viewMode:mode});
    }

    render() {
        const itemsShown = this.state.items.filter((item:any) => this.state.viewMode==='All' || (this.state.viewMode==='Finished' && item.status) || (this.state.viewMode==='Un Finished' && !item.status))
        return (
            <div className="App">
                <InputField addItem={this.addItem}/>
                <Filters handleModeChange = {this.handleViewModeChange}/>
                <Result items={itemsShown} handleStatusChange={this.handleStatusChange}/>
            </div>
        );
    }
}

export default App;
