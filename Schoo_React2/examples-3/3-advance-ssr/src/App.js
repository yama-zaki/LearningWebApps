import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

function App({ stories, readyToRender }) {
  const slices = readyToRender ? stories : stories.slice(0, 10);
  const lists = slices.map(story => (
    <li key={story.id}>
      <a href={story.url}>{story.title}</a>
    </li>
  ));

  return (
    <div>
      <h1>Hacker News 新着</h1>
      <ul>{lists}</ul>
    </div>
  );
}
App.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })),
  readyToRender: PropTypes.bool,
};
App.defaultProps = {
  stories: [],
  readyToRender: false,
};

export default connect(state => ({
  readyToRender: state.readyToRender,
  stories: state.stories,
}))(App);
