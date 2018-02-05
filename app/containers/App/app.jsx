import {
  connect,
}                          from 'react-redux';
import {
  compose,
}                          from 'recompose';
import App                 from '../../components/App';

const AppContainer = compose(
  connect(
    ({ expenses: { count, fooStatus, }, }) => ({
      count,
      fooStatus,
    }),
    (dispatch) => ({
      testAction: () => dispatch(incCount()),
      getFoo: () => dispatch(getFooEpic()),
    })
  )
)(App);

export default AppContainer;
