import React from 'react';
import './Home.css';

function Home() {
  const [htmlCode, setHtmlCode] = React.useState('');
  const [cssCode, setCssCode] = React.useState('');
  const [jsCode, setJsCode] = React.useState('');

  function run() {
    const output = document.getElementById('output');
    output.contentDocument.body.innerHTML = htmlCode + '<style>' + cssCode + '</style>';
    output.contentWindow.eval(jsCode);
  }

  return (
    
    <div className="container">
       <div className='center'>
       <h1 className="main-heading">Code Harmony - The Ultimate Online Code Editor</h1>
       </div>
      <div className="left">
        
    

        <label>HTML</label>
        <textarea id="html-code" value={htmlCode} onChange={(e) => setHtmlCode(e.target.value)}></textarea>

        <label>CSS</label>
        <textarea id="css-code" value={cssCode} onChange={(e) => setCssCode(e.target.value)}></textarea>

        <label>JavaScript</label>
        <textarea id="js-code" value={jsCode} onChange={(e) => setJsCode(e.target.value)}></textarea>
      </div>

      <div className="right">
        <label><i className="fa-solid fa-play"></i> Output</label>
        <iframe id="output"></iframe>
      </div>
   <div className='right-bottom'>
     <button id="run-button" onClick={run}>Run</button>
   </div>
    </div>
  );
}

export default Home;
