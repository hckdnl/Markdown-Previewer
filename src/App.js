import "./App.css";
import { useState } from "react";
import { marked } from "marked";

function App() {
  const [text, setText] = useState(`
  # Markdown Previewer
  
  ## A simple Markdown previewer
  
  **This is a simple Markdown previewer built using React. It can render Markdown content and display it in a side-by-side preview.**
  
  *Features*
  
  - Markdown rendering
  - Side-by-side preview
  - Headers (H1, H2, H3)
  - Lists (ordered and unordered)
  - Links
  - Images
  - Emphasis (bold and italic)
  - Code blocks
  - Tables

  There's also [links](https://www.freecodecamp.org), and
> Block Quotes!
  
  ### Sample Code Block
  
  \`\`\`
  // This is a code block
  function sayHello() {
    console.log('Hello, world!');
  }
  \`\`\`
  \`code\`  
  
  ### Sample Table
  
  | Name  | Age |
  |-------|-----|
  | Alice | 25  |
  | Bob   | 30  |
  | Carol | 22  |
  
  Feel free to edit this Markdown and see the live preview on the right.
  
  Enjoy using the Markdown previewer!
  
  - [FreeCodeCamp](https://www.freecodecamp.org)
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `);

  marked.setOptions({ breaks: true });

  return (
    <div className="App">
      <div className="editorWrap">
        <div className="toolbar">
          <h2>Editor</h2>
        </div>
        <textarea
          id="editor"
          onChange={(event) => {
            setText(event.target.value);
          }}
          value={text}
        ></textarea>
      </div>
      <div className="converter"></div>
      <div className="previewWrap">
        <div className="toolbar">
          <h2>Preview</h2>
        </div>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(text) }}
        ></div>
      </div>
    </div>
  );
}

export default App;
