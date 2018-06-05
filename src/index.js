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
      const wordings = this.props.wordings || {likedText:'取消',unlikedText:'点赞'}

      return(
          <button onClick={this.handleClickOnLikeButton.bind(this)}>
              {this.state.isLiked? wordings.likedText:wordings.unlikedText}👍
          </button>
      )
  }


}

class Index extends  Component
{
    render()
    {
        return(
            <div>
                <LikeButton wordings={{likedText:'已赞',unlikedText:'赞'}}/>
            </div>
        )
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
);




