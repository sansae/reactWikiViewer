import React from 'react';

const RandomArticle = ({randomArticle}) => {
  const url = randomArticle;

  return (
    <div id="random-article">
      <p>Click <a href={url} target="_blank">here</a> for a random article</p>
    </div>
  )
}

export default RandomArticle;
