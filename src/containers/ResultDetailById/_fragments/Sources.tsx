import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';

import Sources1 from './Sources/1';
import Sources2 from './Sources/2';
import Sources3 from './Sources/3';
import Sources4 from './Sources/4';
import Sources5 from './Sources/5';
import Sources6 from './Sources/6';
import Sources7 from './Sources/7';
import Sources8 from './Sources/8';
import Sources9 from './Sources/9';
import Sources10 from './Sources/10';
import Sources11 from './Sources/11';
import Sources12 from './Sources/12';
import Sources13 from './Sources/13';
import Sources14 from './Sources/14';
import Sources15 from './Sources/15';

function Sources({ id }: any) {
  return (
    <Box mb="40px">
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton my="10px" _hover={{ background: 'transparent' }}>
            <Box as="span" flex="1" textAlign="left">
              ※적용인자출처
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            {id === '1' && <Sources1 />}
            {id === '2' && <Sources2 />}
            {id === '3' && <Sources3 />}
            {id === '4' && <Sources4 />}
            {id === '5' && <Sources5 />}
            {id === '6' && <Sources6 />}
            {id === '7' && <Sources7 />}
            {id === '8' && <Sources8 />}
            {id === '9' && <Sources9 />}
            {id === '10' && <Sources10 />}
            {id === '11' && <Sources11 />}
            {id === '12' && <Sources12 />}
            {id === '13' && <Sources13 />}
            {id === '14' && <Sources14 />}
            {id === '15' && <Sources15 />}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

export default Sources;
