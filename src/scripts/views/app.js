import DrawerInitiator from '../utils/drawer-initiator';

/* eslint-disable no-underscore-dangle */
class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  // eslint-disable-next-line class-methods-use-this
  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

    // kita bisa menginisiasikan komponen lain bila ada
  }
}

export default App;
