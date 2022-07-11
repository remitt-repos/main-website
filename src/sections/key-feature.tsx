/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from '../components/feature-card-column';
import Performance from '../assets/key-feature/performance.svg';
import Partnership from '../assets/key-feature/partnership.svg';
import Subscription from '../assets/key-feature/subscription.svg';
import Support from '../assets/key-feature/support.svg';
import { TSXStylesObject } from "../pages/_app";

const data = [
  {
    id: 1,
    imgSrc: Performance.src,
    altText: 'Fast Performance',
    title: 'Fast Performance',
    text:
      'Based on Tron network, transactions take up to 2 minutes',
  },
  {
    id: 2,
    imgSrc: Partnership.src,
    altText: 'Partnership deal',
    title: 'Partnership deal',
    text:
      'Always looking for new partners to expand Remitt network',
  },
  {
    id: 3,
    imgSrc: Subscription.src,
    altText: 'Attractive rates',
    title: 'Attractive rates',
    text:
      'We offer best conversion rates on the market',
  },
  {
    id: 4,
    imgSrc: Support.src,
    altText: 'Customer Support',
    title: 'Customer Support',
    text:
      'Our customer support is always there to assist you',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
            slogan="Key features"
            title="Meet the features of product" isWhite={ false }
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles: TSXStylesObject = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
