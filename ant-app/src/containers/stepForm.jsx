import React from 'react';
import { Steps, Icon,Popover  } from 'antd';
import styles from './stepForm.module.scss';
import SwitchStep from '../components/switchStepForm'

const Step = Steps.Step;

const customDot = (dot, { status, index }) => (
    <Popover content={<span>step {index} status: {status}</span>}>
      {dot}
    </Popover>
  );

const StepDemo = () => (
    <React.Fragment>
        <div className={styles.divframe}>
            <h2>Basic</h2>
            <Steps current={1}>
                <Step title="Finished" description="This is a description." />
                <Step title="In Progress" description="This is a description." />
                <Step title="Waiting" description="This is a description." />
            </Steps>
        </div>
        <div className={styles.divframe}>
            <h2>Mini</h2>
            <Steps size="small" current={1}>
                <Step title="Finished" />
                <Step title="In Progress" />
                <Step title="Waiting" />
            </Steps>
        </div>
        <div className={styles.divframe}>
            <h2>With Icon</h2>
            <Steps>
                <Step status="finish" title="Login" icon={<Icon type="user" />} />
                <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
                <Step status="process" title="Pay" icon={<Icon type="loading" />} />
                <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
            </Steps>
        </div>
        <div className={styles.divframe}>
            <h2>Switch Step</h2>
            <SwitchStep></SwitchStep>
        </div>
        <div className={styles.divframe}>
            <h2>Vertical</h2>
            <Steps direction="vertical" current={1}>
                <Step title="Finished" description="This is a description." />
                <Step title="In Progress" description="This is a description." />
                <Step title="Waiting" description="This is a description." />
            </Steps>
        </div>
        <div className={styles.divframe}>
            <h2>Vertical Mini</h2>
            <Steps direction="vertical" size="small" current={1}>
                <Step title="Finished" description="This is a description." />
                <Step title="In Progress" description="This is a description." />
                <Step title="Waiting" description="This is a description." />
            </Steps>
        </div>
        <div className={styles.divframe}>
            <h2>Error</h2>
            <Steps current={1} status="error">
                <Step title="Finished" description="This is a description" />
                <Step title="In Process" description="This is a description" />
                <Step title="Waiting" description="This is a description" />
            </Steps>
        </div>
        <div className={styles.divframe}>
            <h2>Dot Style</h2>
            <Steps progressDot current={1}>
                <Step title="Finished" description="This is a description." />
                <Step title="In Progress" description="This is a description." />
                <Step title="Waiting" description="This is a description." />
            </Steps>
        </div>
        <div className={styles.divframe}>
            <h2>Customized Dot Style</h2>
            <Steps current={1} progressDot={customDot}>
                <Step title="Finished" description="You can hover on the dot." />
                <Step title="In Progress" description="You can hover on the dot." />
                <Step title="Waiting" description="You can hover on the dot." />
                <Step title="Waiting" description="You can hover on the dot." />
            </Steps>
        </div>
    </React.Fragment>
);

export default StepDemo;