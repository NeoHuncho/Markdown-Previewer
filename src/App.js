import React from 'react';
import './App.scss';
import marked from 'marked';
const initialState = `this is a paragraph

**This is a bolded text**

> Block Quotes!
# This is a H1
## This is a H2

- list first item
- list second item

[Come see my website](https://www.google.fr/)

This is a inline \`<div></div>\`

This is a block of code 
\`\`\`
let x=0;
let y=1;
let z=x+y;
\`\`\`

![Cross](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_aihiK1bzHiB9UJ2HDTUBYj_S4lLf8Rw5NA&usqp=CAU)
`
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: initialState
    }
    this.handleChange = (event) => {
      this.setState({
        text: event.target.value
      })
    }
  }
  render() {
    const { text } = this.state;
    const markdown = marked(text, { breaks: true });
    return (

      <div id="app">
        <h1 className="text-center mt-4" id="title">Markdown Converter</h1><hr />
        <section className="row">
          <div className="col">
            <h2 className="sub-title">Editor</h2><hr />
            <textarea className="form-control" id="editor" value={text} onChange={this.handleChange} /></div>
          <div className="col">
            <h2 id="titlePreview" className="sub-title">Preview</h2><hr />
            <div className="form-control" id="preview" dangerouslySetInnerHTML={{ __html: markdown }} />
          </div>
        </section>
      </div>
    );
  }
}



export default App;
