// This component handles the App template used on every page.
// React router passes in child components as properties onto this app component.
// They will be composed here on the page.
import React, {PropTypes} from 'react';
import Header from './common/Header';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

// prop type validation
App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
