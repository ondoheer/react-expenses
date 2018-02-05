import {
  connect,
}                          from 'react-redux';
import {
  compose,
}                          from 'recompose';
import App                 from '../../components/App';
import {
  incCount,
  getFooEpic,
}                          from '../../redux/modules/expenses';


// const connect = (mapStateToProps, mapDispatchToProps) => (BaseComponent) => {
//   return class Connect extends React.Component {
//     constructor(props) {
//       super(props);

//       store.subscribe(() => this.setState({ state: store.getState() }));
//     }

//     render() {
//       return (
//         <BaseComponent
//           {...{
//             ...this.props,
//             ...mapStateToProps(this.state, this.props),
//             ...mapDispatchToProps(store.dispatch, this.props),
//           }}
//         />
//       );
//     }
//   };
// };


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
