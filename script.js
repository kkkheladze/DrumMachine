function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const data = [
{
  id: "Chord1",
  letter: "Q",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" },

{
  id: "Chord2",
  letter: "W",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" },

{
  id: "Chord3",
  letter: "E",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" },

{
  id: "GiveUsALight",
  letter: "A",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3" },

{
  id: "bass 3",
  letter: "S",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3" },

{
  id: "shotgun",
  letter: "D",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3" },

{
  id: "high hat",
  letter: "Z",
  src: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" },

{
  id: "drum hit",
  letter: "X",
  src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" },

{
  id: "laser",
  letter: "C",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" }];


class DrumPad extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "handleKeydown",










    e => {
      if (e.keyCode === this.props.letter.charCodeAt()) {
        this.audio.play();
        this.audio.currentTime = 0;
        this.props.handleDisplay(this.props.id);
      }
    });_defineProperty(this, "handleClick",

    () => {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id);
    });}componentDidMount() {console.log(this.audio);document.addEventListener("keydown", this.handleKeydown);window.focus();}componentWillUnmount() {document.removeEventListener("keydown", this.handleKeydown);}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "drum-pad", id: this.props.id, onClick: this.handleClick }, /*#__PURE__*/
      React.createElement("h1", null, this.props.letter), /*#__PURE__*/
      React.createElement("audio", {
        id: this.props.letter,
        className: "clip",
        src: this.props.src,
        ref: ref => this.audio = ref })));



  }}


class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleDisplay",




    display => this.setState({ display }));this.state = { display: "Click or Press a Key" };}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "container containers text-center ", id: "drum-machine" }, /*#__PURE__*/
      React.createElement("h3", { id: "header" }, "DrumMachine"), /*#__PURE__*/
      React.createElement("div", {
        className: "text-center container rounded border-primary  border",
        id: "display" },

      this.state.display), /*#__PURE__*/

      React.createElement("div", { className: "watap" },
      data.map((d) => /*#__PURE__*/
      React.createElement(DrumPad, {
        className: "drum-pad",
        key: d.id,
        id: d.id,
        letter: d.letter,
        src: d.src,
        handleDisplay: this.handleDisplay },

      d.letter, /*#__PURE__*/
      React.createElement("audio", { src: d.src, id: d.letter, className: "clip" })))), /*#__PURE__*/



      React.createElement("div", { className: "footer" }, "By GuJa")));


  }}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));