import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Header extends Component{

    render(){
        return(
            <div>
                <h1>hello react</h1>
            </div>
        )
    }
}


ReactDOM.render(
    <Header/>,
    document.getElementById('root')
);



