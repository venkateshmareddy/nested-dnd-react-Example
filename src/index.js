import React from 'react';
import ReactDOM from 'react-dom';
import NestedDnd from 'nested-dnd-react'
import initData from './initData';
import styles from './styles';

class App extends React.Component{
    stateChanged = (chnagedData)=>{
        console.log(chnagedData)
    }
    render(){
        return(
            <NestedDnd data = {initData} changedValues={this.stateChanged} styleObj={styles}/>
        )
    }
}

ReactDOM.render(
    <section>
        <App />
    </section>, document.getElementById("root")
)