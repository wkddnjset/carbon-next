import React from 'react';

import Addition3 from './3';
import Addition5 from './5';
import Addition6 from './6';
import Addition12 from './12';
import Addition13 from './13';
import Addition14 from './14';
import Addition15 from './15';
import Other from './other';

const CUSTOM = ['3', '5', '6', '12', '13', '14', '15'];
function AdditionalTab({ id }: any) {
  console.log('id : ', id);
  console.log('CUSTOM.includes(id) : ', CUSTOM.includes(id));
  return (
    <>
      {!CUSTOM.includes(id) && <Other id={id} />}
      {id === '3' && <Addition3 />}
      {id === '5' && <Addition5 />}
      {id === '6' && <Addition6 />}
      {id === '12' && <Addition12 />}
      {id === '13' && <Addition13 />}
      {id === '14' && <Addition14 />}
      {id === '15' && <Addition15 />}
    </>
  );
}

export default AdditionalTab;
