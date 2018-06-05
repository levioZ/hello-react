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
      const likedText = this.props.likedText || '取消'
      const unlikedText = this.props.unlikedText || '点赞'
      return(
          <button onClick={this.handleClickOnLikeButton.bind(this)}>
              {this.state.isLiked? likedText:unlikedText}👍
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
                <LikeButton likedText='已赞' unlikedText='赞'/>
            </div>
        )
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
);




