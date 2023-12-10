import React from 'react';

import Methodology14 from './14';
import Methodology15 from './15';
import Other from './other';

const CUSTOM = ['14', '15'];
function MethodologyTab({ id }: any) {
  return (
    <>
      {!CUSTOM.includes(id) && <Other id={id} />}
      {id === '14' && <Methodology14 />}
      {id === '15' && <Methodology15 />}
    </>
  );
}

export default MethodologyTab;
