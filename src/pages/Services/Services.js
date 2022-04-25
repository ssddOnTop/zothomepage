import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjOne } from './Data';

function Services() {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjOne} />
      {/* <InfoSection {...homeObjThree} /> */}
    </>
  );
}

export default Services;