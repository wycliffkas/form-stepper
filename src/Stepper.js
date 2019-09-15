import React from 'react';
import './index.css';
import '../node_modules/antd/dist/antd.css';

import { Steps, Button, message } from 'antd';

const { Step } = Steps;

const StepOne = ({title, handleChange, amount, nextStep, disable}) => (<div className="card">
<div className="card-body">
  <form>
    <div className="form-group">
      <label>{title}</label>
      <input
        name="amount"
        type="number"
        id="amount-input"
        className="form-control"
        onChange={handleChange}
        value={amount}
      />
    </div>
    <button
      type="button"
      className="btn btn-primary"
      onClick={nextStep}
      disabled={disable}
    >
      Continue
    </button>
  </form>
</div>
</div>)

const steps = [
  {
    title: 'Stake',
    content: <StepOne/>,
  },
  {
    title: 'Second',
    content: 'Second-content',
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
];

class Stepper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <div>
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    );
  }
}
export default Stepper;