/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui';

import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import BannerImg from '../assets/banner-thumb.png';
import ShapeLeft from '../assets/shape-left.png';
import ShapeRight from '../assets/shape-right.png';
import { TSXStylesObject } from "../pages/_app";

export function Banner() {
  return (
    <section sx={bannerStyles.banner} id="home">
      <Container sx={bannerStyles.container}>
        <Box sx={bannerStyles.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Stablecoins with 100% reserve
          </Heading>
          <Text as="p" variant="heroSecondary">
            Fully-collaterized stablecoins with AI-powered P2P exchange-bot that provides additional comfort in buying nad selling stablecoins to cash
          </Text>
          <Button variant="primary">Explore</Button>
        </Box>

        <Box sx={bannerStyles.imageBox}>
          <Image src={ BannerImg.src } alt="Banner Image" />
        </Box>
      </Container>
    </section>
  );
}

const bannerStyles: TSXStylesObject = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft.src})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeRight.src})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
  },
  container: {
    minHeight: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  contentBox: {
    width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
    mx: 'auto',
    textAlign: 'center',
    mb: ['40px', null, null, null, null, 7],
  },
  imageBox: {
    justifyContent: 'center',
    textAlign: 'center',
    display: 'inline-flex',
    mb: [0, null, -6, null, null, '-40px', null, -3],
    img: {
      position: 'relative',
      height: [245, 'auto'],
    },
  },
};
