import React from 'react'




const CurrentWord = ({CurrentWord, usedLetter}) => {

  return(
    <div>
      {
        CurrentWord.split('').map(
          (letter, key)=>{

            let status ="finded"

            if (usedLetter.indexOf(letter) === -1) {
              status = "notfinded"
            }

            
            return <span key={"letter_"+key} className={status}> 
            {status == "finded" ? letter: "?"} </span>
          }
        )
      
      }
    </div>
  )
}

export default CurrentWord;