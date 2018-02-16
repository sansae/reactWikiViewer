import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'min-jquery';
import SearchBar from './components/search_bar';
import RandomArticle from './components/random_article';
import Articles from './components/articles';

const randomArticle = "https://en.wikipedia.org/wiki/Special:Random";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '', api: "https://en.wikipedia.org/w/api.php?action=query&prop=extracts|pageimages&exintro&exsentences=2&generator=search&gsrsearch=apple&format=json", data: [] };
    this.wikiSearch = this.wikiSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: this.state.api,
      dataType: "jsonp",
      success:
      function processJson(json) {
        console.log('api call was a success, Kent!');
        console.log(json.query.pages[856].title);
        this.setState({ data: json })
      }
    })
  }

  wikiSearch(term) {
    const api = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts|pageimages&exintro&exsentences=2&generator=search&gsrsearch=" + term + "&format=json";
    this.setState({ api: api })
    console.log(api);
    // this.fetchJson();
  }

  handleChange(event) {
    this.setState({ term: event.target.value });
    this.wikiSearch(event.target.value);
  }

  render () {
    return (
      <div>
        <div>
          <h1 id="title">Wiki Viewer</h1>
          <SearchBar value={this.state.term} onChange={this.handleChange}/>
        </div>
        <div>
          <RandomArticle randomArticle={randomArticle}/>
        </div>
        <div>
          <div key={this.state.data.response}>
            <ul>{this.state.data}</ul>
          </div>
          <Articles data={this.state.data}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
