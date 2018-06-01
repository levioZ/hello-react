import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'


class LikeButton extends Component
{
  constructor(){
      super();
      this.state = {
          isLiked : false,
          name : 'eli'
      }
  }

  handleClickOnLikeButton(){
      console.log(this.state.isLiked);
      this.setState(
          {
              isLiked:!this.state.isLiked
          }
      );
      console.log(this.state.isLiked);
  }



  render(){
      return(
          <button onClick={this.handleClickOnLikeButton.bind(this)}>
              {this.state.isLiked? 'cancel':'good'}👍
          </button>
      )
  }


}

ReactDOM.render(
    <LikeButton/>,
    document.getElementById('root')
);




