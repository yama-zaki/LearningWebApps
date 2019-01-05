import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadData } from './actions';

class TitanicApp extends Component {
  componentDidMount() {
    this.props.onMounted();
  }

  render() {
    const { status, data, error } = this.props;

    switch(status) {
      case 'LOADED':
        return (
          <div>
            <h1>映画タイタニックの情報</h1>
            <dl>
              <dt>公開年</dt>
              <dd>{data.Year}</dd>
              <dt>長さ</dt>
              <dd>{data.Runtime}</dd>
              <dt>監督</dt>
              <dd>{data.Director}</dd>
              <dt>主演俳優</dt>
              <dd>{data.Actors}</dd>
              <dt>主な受賞</dt>
              <dd>{data.Awards}</dd>
            </dl>
          </div>
        );
      case 'ERROR':
        return (
          <div>
            <h1>エラー</h1>
            <p>{error.message}</p>
          </div>
        );
      default:
        return <h1>読み込み中</h1>;
    }
  }
}
TitanicApp.propTypes = {
  status: PropTypes.oneOf(['LOADING', 'LOADED', 'ERROR']),
  data: PropTypes.object,
  error: PropTypes.instanceOf(Error),
  onMounted: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    status: state.status || 'LOADING',
    data: state.data,
    error: state.error,
  }),
  dispatch => ({
    onMounted() {
      dispatch(loadData());
    },
  }),
)(TitanicApp);
