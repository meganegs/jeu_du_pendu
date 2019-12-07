import React, { Component } from 'react';
import './App.css';

import Word from './components/Word';
import CurrentWord from './components/CurrentWord';


//Produit une représentation textuelle de l’état de la partie,


// chaque lettre non découverte étant représentée par un _underscore_.
// (CSS assurera de l’espacement entre les lettres pour mieux visualiser le tout).
//function computeDisplay(phrase, usedLetters) {  return phrase.replace(/\w/g,    (letter) => (usedLetters.has(letter) ? letter : '_')  )}...import './App.css'






class App extends Component {

  //
  state = {
    listMots:["debut", "test", "projet"],
    currentWord: null,
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split(''),
    usedLetter: [],
    win: 0, 
    tentative: 0
  }


  //Initilisation de la partie
    initGame =() => {
    
        this.setState({currentWord:"projet", usedLetter: []})
    }

    componentDitMount() {
        this.initGame()
    }



    //fontion click sur les lettres
    clickLetter = (letter) => {
    console.log("=>" + letter )




        //Vérifier que la lettre existe
          /* -> affichage lettre
            -> changement d'état
            ->gagner ou perdu */

        if (this.state.usedLetter.indexOf(letter) === -1){

          const usedLetter = [letter, ...this.state.usedLetter]

          if( this.state.currentWord.indexOf(letter) === -1 ){
              const tentative = this.state.tentative + 1
              this.setState({ tentative })
          } else {

            this.setState({ usedLetter })
        
          } 


        
        } else {

          console.log(" la lettre existe déjà")
        }


    }


    render()  {
      

      return (
        <div id="game">
         <h1> Pendu</h1>

          {this.state.tentative}

        {
          (this.state.currentWord !== null) && 
          <CurrentWord 
          
            currentWord={this.state.currentWord}
            usedLetter={this.state.usedLetter}
            /> 

        }

         
         <Word 
         alphabet={this.state.alphabet}
         action = {this.clickLetter}
         />


        </div>
    )
  }
}

export default App;
