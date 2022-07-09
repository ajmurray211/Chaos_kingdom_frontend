import './App.css';

function App() {
  return (
    <div className="App">

      <h1> Welcome to the kingdom of chaos!!!</h1>
      <a href='https://github.com/ajmurray211/Chaos_Kingdom/archive/refs/tags/V1.zip'
      >Click here to downlaod the files</a>
      <section className='gameplay'>
        <h1>Game play screenshots</h1>
        <h2>Title screen</h2>
        <img src='./gamePics/title.png' alt='Title screen'></img>
        <h2>Game board</h2>
        <img src='./gamePics/board.png' alt='Game board'></img>
        <h2>Battle Map</h2>
        <img src='./gamePics/battle.png' alt='Battle Map'></img>
      </section>

        <h2>About the developer</h2>
      <section className='about'>
        <img src='./gamePics/IMG_6841.PNG' />
        <p>This game was inspired from starwars battlefront 2 a game 
          that my brother and I used to play growing up. The structure is 
          based off of battlefront but the theme of the game stems from my 
          love of Skyrim and fantasy RPGs. This is the first game that I have 
          ever built and I had a blast, hopefully you enjoy playing!</p>
      </section>

    </div>
  );
}

export default App;
