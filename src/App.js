import React from 'react';
import './App.scss';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      markdown:''
     }
     this.handleChange= (event)=>{
      this.setState({
        markdown:event.target.value
      })
     }
  }
  render() { 
    const {markdown}=this.state;
    return ( 
      
      <div id="app">
      <h2 className="text-center mt-4" id="title">Convert your Markdown</h2>
      <section className="row">
        <div className="col">
          <textarea className="form-control" id="editor" value={markdown} onChange={this.handleChange}/></div>
          <div className="col" id="preview">hellooooo
        </div>
    </section>
   </div>
   );
  }
}
 


export default App;
