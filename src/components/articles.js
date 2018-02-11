import React, {Component} from 'react';

class Articles extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <ul>
          {
            this.props.data.map((item, i) => {
              return <li>item</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default Articles;
