import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import RandomArticle from './components/random_article';
import Articles from './components/articles';

const randomArticle = "https://en.wikipedia.org/wiki/Special:Random";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '', api: '', data: [] };
    this.wikiSearch = this.wikiSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch(this.state.api)
    .then(results => {
      return results.json();
    }).then(data => {
      let results = data.results.map((data) => {
        return(
          <div key={data.results}>
            <ul>this.state.data</ul>
          </div>
        )
      })
      this.setState({data: results});
      console.log("state", this.state.data);
    })
  }


  wikiSearch(term) {
    const api = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts|pageimages&exintro&exsentences=2&generator=search&gsrsearch=" + term + "&format=json";
    this.setState({ api: api })
    console.log(api);
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
          {this.state.data}
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
