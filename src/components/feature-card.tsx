/** @jsxImportSource theme-ui */
import { jsx, Image, Box, Heading, Text } from 'theme-ui';
import { TSXStylesObject } from "../pages/_app";

export default function FeatureCard({
  src,
  altText = 'default alt text',
  title,
  text,
}: any) {
  return (
    <Box sx={styles.card}>
      <Image src={src} alt={altText} sx={styles.img} />

      <Box sx={styles.wrapper}>
        <Heading sx={styles.wrapperTitle}>{title}</Heading>
        <Text sx={styles.wrapperSubTitle}>{text}</Text>
      </Box>
    </Box>
  );
}

const styles: TSXStylesObject = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    mb: -1,
  },
  img: {
    width: ['70px', null, null, '80px', '90px', 'auto'],
    height: 'auto',
    flexShrink: 0,
    mr: [2, 3, null, null, 4, 5],
    ml: -2,
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
  },
  wrapperTitle: {
    fontSize: [2, 3],
    color: 'heading_secondary',
    lineHeight: 1.4,
    fontWeight: 700,
    mb: ['10px', null, '15px'],
  },
  wrapperSubTitle: {
    fontSize: [1, '15px'],
    fontWeight: 400,
    lineHeight: '1.9',
  },
};
