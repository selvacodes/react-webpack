import React from 'react'
import ReactDOM from 'react-dom';
import '../css/app.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        This is a sub heading in Inconsolata. This paragraph is in Inconsolata.
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
