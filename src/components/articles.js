import React, {Component} from 'react';

class Articles extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var data = this.props.data;
    var term = this.props.term;
    if (term == "") {
      console.log('search term is empty');
    } else {
      console.log(`search term is ${term}`);
    }
    console.log(this.props.term);

    var results = "";
    if (data[1]) {
      results = data[1].map((title, index) => {
        return (
          <a href={data[3][index]} target="_blank">
            <div>
              <h1>{data[1][index]}</h1>
              <p>{data[2][index]}</p>
            </div>
          </a>
        );
      })
    }

    return (
      <div id="result">
        {results}
      </div>
    );
  }
}

export default Articles;
