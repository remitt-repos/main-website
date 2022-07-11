/** @jsxImportSource theme-ui */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from '../components/text-feature';
import Image from '../components/image';

import FeatureThumb from '../assets/core-feature.png';
import ShapePattern from '../assets/shape-pattern2.png';
import { TSXStylesObject } from "../pages/_app";

const data = {
  subTitle: 'Core feature',
  title: '100% transparency on reserves',
  description:
    'All Remitts tokens are pegged at 1-to-1 with a matching fiat currency and are backed 100% by Remitt’s reserves. We publish a daily record of the current total assets and reserves.',
  btnName: 'Transparency report',
  btnURL: '#',
};

export default function CoreFeature() {
  return (
    <section sx={{ variant: 'section.coreFeature' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={FeatureThumb.src} alt="Thumbnail" />
          <Box sx={styles.shapeBox}>
            <Image src={ShapePattern.src} alt="Shape" />
          </Box>
        </Box>
      </Container>
    </section>
  );
}

const styles: TSXStylesObject = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block'],
  },
};
