import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.ratePostClick = this.ratePostClick.bind(this);
    // this.handleFeedBack = this.handleFeedBack.bind(this);
    // this.handleEmail = this.handleEmail.bind(this);


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
        <div className="rating">
          <div>Does your day to day experience of working here feel aligned to this value?</div>
          <div className="ratingValue">{this.state.ratingArray.map((index) => {
            return (
              <div >
                <li key={index.toString()} className={`post-rating-points-li ratingActive`} onClick={this.ratePostClick.bind(this, index)}>
                  {index}
                </li>
              </div>
            )
          })}
          </div>
        </div>
        <form>
          <div className="feedback">
            <input placeholder="feedback" name='feedback' id='feedback' type='text' onChange={ e=> this.handleFeedBack(e)}></input>
          </div>
          <div className="feedInvitation">
            <div >
              <input placeholder='email' name='email' id='email' type='email' onChange={this.handleEmail}></input>
            </div>
          </div>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
