import * as React from "react";
import {
  NavLink,
  NavProvider,
  NavContent,
  NavNotFoundBoundary
} from "react-navi";

export interface Props {
  navigation: any;
}

class App extends React.Component<Props> {
  render() {
    return (
      <NavProvider navigation={this.props.navigation}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">
              <NavLink href="/">
                <img src="https://frontarm.com/navi-logo.png" />
                <span>Navi</span>
              </NavLink>
            </h1>
          </header>
          <main>
            <NavNotFoundBoundary render={renderNotFound}>
              <NavContent />
            </NavNotFoundBoundary>
          </main>
        </div>
      </NavProvider>
    );
  }
}

function renderNotFound() {
  return (
    <div className="App-error">
      <h1>404 - Not Found</h1>
    </div>
  );
}

export default App;
