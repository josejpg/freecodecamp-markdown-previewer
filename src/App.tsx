import React from 'react';
import './App.css';
import { connect, Provider } from "react-redux";
import { store } from "./stores/markdon.store";
import { mapDispatchToProps, mapStateToProps } from "./connections/markdown.connection";
import { Presentational } from "./Presentational";
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <Container/>
        </Provider>
    );
  }
};

export default App;
