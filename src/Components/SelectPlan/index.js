import React, { useState } from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

// import images from 'E:Multi_steppermulti-step-form-mainassetsimages';
import './index.css';
const planDetails = [
  {
    id: 1,
    imgPath:
      'https://res.cloudinary.com/dywsrfqty/image/upload/v1699452412/glziimmtebow92tisn1v.svg',
    Heading: 'Arcade',
    priceInMonths: 9,
    priceInYear: 90,
  },
  {
    id: 2,
    imgPath:
      'https://res.cloudinary.com/dywsrfqty/image/upload/v1699452469/zsa0hcmaicbm0titektb.svg',
    Heading: 'Advanced',
    priceInMonths: 12,
    priceInYear: 120,
  },
  {
    id: 3,
    imgPath:
      'https://res.cloudinary.com/dywsrfqty/image/upload/v1699452502/ilbz0oe7dfsutixpfxlr.svg',
    Heading: 'Pro',
    priceInMonths: 15,
    priceInYear: 150,
  },
];

const SelectPlan = () => {
  const [plan, setPlan] = useState(true);

  return (
    <div className="select-plan-page">
      <div>
        <h1 className="card-head">Select your plan</h1>
        <p className="card-des">
          You have the option of monthly or yearly billing.
        </p>
        {planDetails.map((e) => (
          <div
            key={e.id}
            className="plan-item">
            <div className="plan-logo-con">
              <img
                src={e.imgPath}
                alt="planLogo"
                className="plan-logo"
              />
            </div>
            <div className="plan-des">
              <h1 className="plan-head">{e.Heading}</h1>
              <p className="plan-des">
                {plan ? `${e.priceInMonths}/mo` : `${e.priceInYear}/yr`}
              </p>
              {!plan && <p className="moths-des">2 months free</p>}
            </div>
          </div>
        ))}
        <div className="toggle-con">
          <span>Monthly</span>
          <Toggle
            className="custom-classname"
            onChange={() => setPlan((pre) => !pre)}
          />
          <span>Yearly</span>
        </div>
      </div>
    </div>
  );
};

export default SelectPlan;
