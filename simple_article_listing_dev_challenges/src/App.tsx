import Articles from "./Articles"

function App() {

  return (
    <>
      <header>
       <h1>We release interesting articles about technology</h1> 
        <img src="/images/Seperator.svg" alt="" />
      </header>
      <main>
        <Articles/>
      </main>
      <footer className="footer">
      <p>Coded by SG | Challenge by <a href="https://devchallenges.io/profile/2a4158ff-e4a1-4981-a906-b12a3c88d007/projects">devChallenges.io</a>.</p>
      </footer>
    </>
  )
}

export default App
