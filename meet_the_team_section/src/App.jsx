import arrowUp from '/arrow up right.svg'
function App() {

  return (
    <>
      <main className="grid">
        <div>
          <h2>Our team</h2>
          <h1>Meet the brain</h1>
          <p>We are proud to have them as part of our community and look forward to continuing to push the boundaries of what's possible in the world of digital art.</p>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Liam Novak</h3>
          <h4>Software Engineer</h4>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Sophia Moretti</h3>
          <h4>Business Development Manager</h4>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Ethan Rossi</h3>
          <h4>Business Development Manager</h4>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Isabella Ricci</h3>
          <h4>UX Designer</h4>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Noah Conti</h3>
          <h4>Content Creator</h4>
        </div>
        <div>
          <a href="#none">See all members <img src={arrowUp} alt="" /></a>
        </div>
      </main>
    </>
  )
}

export default App
