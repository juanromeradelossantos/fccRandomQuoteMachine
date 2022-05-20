import * as pleasejs from "https://cdn.skypack.dev/pleasejs@0.4.2";


let colors = pleasejs.make_color({
  saturation: 0.3,
  value: 0.8,
  colors_returned: 100 });


let quotes = [
{
  quote: "“When you have a dream, you’ve got to grab it and never let go.”",
  author: "Carol Burnett" },

{
  quote: "“The purpose of our lives is to be happy.”",
  author: "Dalai Lama" },

{
  quote: "“Life is what happens when you’re busy making other plans.”",
  author: "John Lennon" },

{
  quote: "“Get busy living or get busy dying.”",
  author: "Stephen King" },

{
  quote: "“Many of life’s failures are people who did not realize how close they were to success when they gave up.”",
  author: "Thomas A. Edison" },

{
  quote: "“If you want to live a happy life, tie it to a goal, not to people or things.”",
  author: "Albert Einstein" },

{
  quote: "“Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.”",
  author: "Steve Jobs" },

{
  quote: "“Not how long, but how well you have lived is the main thing.”",
  author: "Seneca" },

{
  quote: "“The big lesson in life, baby, is never be scared of anyone or anything.”",
  author: "Frank Sinatra" },

{
  quote: "“Life is like riding a bicycle. To keep your balance, you must keep moving.”",
  author: "Albert Einstein" },

{
  quote: "“Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.”",
  author: "Steve Jobs" },

{
  quote: "“Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. Watch your habits; they become character. Watch your character; it becomes your destiny.”",
  author: "Lao-Tze" },

{
  quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  author: "Albert Einstein" },

{
  quote: "“A room without books is like a body without a soul.”",
  author: "Marcus Tullius Cicero" },

{
  quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
  author: "Bernard M. Baruch" },

{
  quote: "“Be the change that you wish to see in the world.”",
  author: "Mahatma Gandhi" },

{
  quote: "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
  author: "J. K. Rowling" }];




class GetNewQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idx: Math.floor(Math.random() * quotes.length),
      color: colors[Math.floor(Math.random() * colors.length)] };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      idx: Math.floor(Math.random() * quotes.length),
      color: colors[Math.floor(Math.random() * colors.length)] });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "d-flex flex-column justify-content-center align-items-center h-100 w-100" }, /*#__PURE__*/
      React.createElement("div", { style: { background: this.state.color, transition: "background .3s linear" }, className: "h-100 w-100 position-absolute zindex-dropdown" }), /*#__PURE__*/
      React.createElement("div", { id: "quote-box", className: "rounded zindex-fixed position-relative" }, /*#__PURE__*/
      React.createElement("p", { className: "text-center", id: "text", style: { color: this.state.color, transition: "color .3s linear" } }, quotes[this.state.idx].quote, " "), /*#__PURE__*/
      React.createElement("p", { className: "text-right", id: "author", style: { color: this.state.color, transition: "color .3s linear" } }, quotes[this.state.idx].author), /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-10" }, /*#__PURE__*/
      React.createElement("button", { className: "btn btn-primary", id: "new-quote", onClick: this.handleClick }, "New quote")), /*#__PURE__*/

      React.createElement("div", { className: "col-2" }, /*#__PURE__*/
      React.createElement("a", { className: "fa-brands fa-twitter fa-xl", id: "tweet-quote", href: "https://twitter.com/intent/tweet", target: "_top" }))))));





  }}



const domContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(domContainer);
root.render( /*#__PURE__*/React.createElement(GetNewQuote, null));