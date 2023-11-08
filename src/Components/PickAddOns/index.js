import React from 'react';
import './index.css';

const PickOptions = [
  {
    id: 1,
    heading: 'Online service',
    des: 'Access to multiplayer games',
    cost: 1,
    yearCost: 10,
  },
  {
    id: 2,
    heading: 'Largest storage',
    des: 'Extra 1TB of cloud save',
    cost: 2,
    yearCost: 20,
  },
  {
    id: 1,
    heading: 'Customizable profile',
    des: 'Custom theme on your profile',
    cost: 2,
    yearCost: 20,
  },
];

const PickAddOns = (props) => {
  const isYear = false;
  return (
    <div className="pickItem-con">
      <h1 className="card-head">Pick add-ons</h1>
      <p className="card-des">Add-ons help enchance your gaming experience. </p>
      {PickOptions.map((e) => (
        <div
          key={e.id}
          className="pick-item">
          <div>
            <input
              type="checkbox"
              value={e.id}
              className="checkbox"
            />
          </div>
          <div>
            <h1 className="pick-head">{e.heading}</h1>
            <p className="pick-des">{e.des}</p>
          </div>
          <div>
            {!isYear ? (
              <p className="pick-cost">+${e.cost}/mo</p>
            ) : (
              <p className="pick-cost">+${e.yearCost}/yr</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PickAddOns;
