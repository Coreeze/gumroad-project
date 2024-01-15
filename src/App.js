import { IoArrowBackSharp } from "react-icons/io5";

function App() {
  return (
    <div className="App">
      <header>
        <button className="back-button">Back to Library</button>
      </header>
      <main>
        <h1>Masterclass: How to be an amazing comedy MC</h1>
        <div className="rating">
          <span>Liked it? Give it a rating:</span>
          {/* Star rating component would go here */}
        </div>
        <div className="zoom-link">
          <p>Here is the Zoom link!</p>
          <a href="https://zoom.us/j/9131756247">
            https://zoom.us/j/913 1756247
          </a>
        </div>
        <div className="instructions">
          <p>
            Please connect five minutes before we're due to start. Here's a
            calendar event so you won't forget!
          </p>
          <button className="download-button">Download</button>
        </div>
        <div className="footer-links">
          <button className="footer-button">Receipt</button>
          <button className="footer-button">Library</button>
        </div>
        <div className="author">
          <p>By Ollie Horn</p>
        </div>
      </main>
    </div>
  );
}

export default App;
