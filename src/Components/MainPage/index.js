import React, { useState } from 'react';
import '@fontsource/ubuntu';
import '@fontsource/ubuntu/400.css';
import './index.css';
import PersonalDetails from '../PersonalDetails';
import SelectPlan from '../SelectPlan';
import PickAddOns from '../PickAddOns';

const steps = [
  { id: 1, displayText: 1 },
  { id: 2, displayText: 2 },
  { id: 3, displayText: 3 },
  { id: 4, displayText: 4 },
];

const MainPage = () => {
  const [activePage, setActivePage] = useState(1);

  const toNextPage = () => {
    if (activePage < 4) {
      setActivePage((pre) => pre + 1);
    }
  };

  const toBack = () => {
    if (activePage > 1) {
      setActivePage((pre) => pre - 1);
    }
  };

  const Page = () => {
    switch (activePage) {
      case 1:
        return <PersonalDetails />;
      case 2:
        return <SelectPlan />;
      case 3:
        return <PickAddOns />;

      default:
        break;
    }
  };
  return (
    <div className="MainPage">
      <div className="bg-img">
        <div className="steps-con">
          {steps.map((e) => (
            <div
              className={
                e.displayText !== activePage ? 'stepItem' : 'stepItem-active'
              }>
              {e.displayText}
            </div>
          ))}
        </div>
      </div>
      {Page()}
      <footer className={activePage === 1 ? 'bottom_1' : 'bottom-con'}>
        {activePage !== 1 && (
          <p
            className="back"
            onClick={toBack}>
            Go back
          </p>
        )}
        <button
          className="bottom-btn"
          onClick={toNextPage}>
          Next Step
        </button>
      </footer>
    </div>
  );
};

export default MainPage;
