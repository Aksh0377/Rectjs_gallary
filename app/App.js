import React, { Component } from 'react'
//import './style.css'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.ratePostClick = this.ratePostClick.bind(this);
    // this.handleFeedBack = this.handleFeedBack.bind(this);
    // this.handleEmail = this.handleEmail.bind(this)

    this.state = {
      ratingArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      feedback: null,
      email: null,
      rating:null,
    }
  }

  componentWillMount()
  {
  }

  ratePostClick(index) {
    this.setState({rating:index})
  }

  handleFeedBack(value)
  {
    console.log(value.target.value)
    this.setState({feedback:value.target.value})
  }

  handleEmail(value)
  {
    console.log(value)
    this.setState({email:value.target.value})
  }

  handleSubmit() {  
   let data = {
         rating: this.state.rating,
         feedback:this.state.feedback,
         email:this.state.email     
    }

    console.log('data',JSON.stringify(data));

      return fetch('http://api.symfony-3.dev/app_dev.php/posts', {
          method: 'POST',
          mode: 'CORS',
          body: JSON.stringify(data),
          headers: {
              'Content-Type': 'application/json'
          }
      }).then(res => {
          return res;
      }).catch(err => err);
   }

  render() {
    return (
      <div>
         <div className="ratingBox">
            <div className="npsIconBlockMobile">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg> NPS
            </div>
            <div className="ratingTitle">On a scale of zero to ten, how likely are you to recommend our business to a friend or colleague?</div>
            <div className="ratingNumberWrapper">
                <div className="npsIconBlock">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg> NPS
                </div>
                <div className="npsNumberBlock">
                {this.state.ratingArray.map((index) => {
            return (
              <div >
                <div key={index.toString()} className={`post-rating-points-li ratingActive npsNumber`} onClick={this.ratePostClick.bind(this, index)}>
                  {index}
                </div>
              </div>
            )
          })}
                </div>
            </div>
        </div>

      
        <form>
          <div className="feedbackBox">
            <div className="feedbackBox-inner">
              <textarea placeholder="feedback" name='feedback' id='feedback' type='text' onChange={ e=> this.handleFeedBack(e)}></textarea>
            </div>
          </div>
          <div className="feedbackBtnWrapper"><button className="feedbackBtn" onClick={this.handleSubmit}>Submit</button></div>
          
          <div className="npsThankyouBox">
            <div className="npsThankyouTitle">Thanks so much!</div>
            <div className="npsThankyouSubTitle">Are you interested in joining our advocate program? The benefits to you include...</div>
                <div className="npsThankyouList">
                    <ul >
                        <li>Prizes and company swag.</li>
                        <li>A testimonial on our website.</li>
                        <li>Early access to new job vacancies.</li>
                        <li>Invites to company events.</li>
                    </ul>
                </div>
                <div className="npsJoinUsBlock">
                    <div className="inputWrapper">
                    <input placeholder='email' name='email' id='email' type='email' onChange={this.handleEmail}></input>
                    </div>
                    <div className="buttonWrapper">
                        <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg> Join our program</button>
                    </div>
                </div>
        </div>


          
        </form>
      </div>
    )
  }
}
