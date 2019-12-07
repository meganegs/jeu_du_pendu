import React, {Component} from 'react'




class Word extends Component{
 
  componentDidMount(){

      window.addEventListener("keyup", (e) => {
          if(this.props.alphabet)
          console.log(e)
      } )
  }


  render(){
    return(
      <div>
        {
          this.props.alphabet.map(
            (letter, key) => {
                return <button 
                  key={"letter_" + key}
                  onClick={ () => this.props.action(letter)}
                > {letter} </button>
            }
          )
        }
      </div>
    )
  }

}





export default Word;