import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter, resetCounter } from './store/actions';

const Counter = ({ count, increaseCounter, decreaseCounter, resetCounter }) => {
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrease</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.counter.count
});

const mapDispatchToProps = {
  increaseCounter,
  decreaseCounter,
  resetCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
