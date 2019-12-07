import React from 'react'




const Word = ({ alphabet, action }) => {
  return(
    <div>
      {
        alphabet.map(
          (letter, key) => {
              return <button 
                key={"letter_" + key}
                onClick={ () => action(letter)}
              > {letter} </button>
          }
        )
      }
    </div>
  )
}

export default Word;