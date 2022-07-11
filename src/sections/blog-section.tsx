/** @jsxImportSource theme-ui */

import { Container, Box } from 'theme-ui';
import SectionHeader from '../components/section-header';
import PostCard from '../components/post-card';
import ButtonGroup from '../components/button-group';
import Carousel from 'react-multi-carousel';
import PostThumb1 from '../assets/blog/1.jpg';
import PostThumb2 from '../assets/blog/2.jpg';
import PostThumb3 from '../assets/blog/3.jpg';
import { InferGetStaticPropsType } from "next";
import { getStaticProps } from "../pages";
import Link from "next/link";
import React from "react";
import { TSXStylesObject } from "../pages/_app";

const data = [
  {
    id: 1,
    imgSrc: PostThumb1.src,
    altText: 'Marketing',
    postLink: '#',
    title: 'Product Marketing: Monopoly Market',
    authorName: 'Cali Cartel',
    date: 'Oct 20, 2020',
  },
  {
    id: 2,
    imgSrc: PostThumb2.src,
    altText: 'Creative',
    postLink: '#',
    title: 'Product Marketing: Creative Market',
    authorName: 'James Carter',
    date: 'Oct 20, 2020',
  },
  {
    id: 3,
    imgSrc: PostThumb3.src,
    altText: 'Startup',
    postLink: '#',
    title: 'Product Marketing: Startup Product Sales',
    authorName: 'Aston Aagar',
    date: 'Oct 20, 2020',
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1310 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1310, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function BlogSection({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <section sx={{ variant: 'section.news' }}>
      <Container>
        <SectionHeader
            slogan="our blog"
            title="Explore our products for your business solution" isWhite={ false }        />

        <Box sx={styles.carouselWrapper}>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="carousel-container"
            customButtonGroup={<ButtonGroup next={undefined} previous={undefined} />}
            dotListClass="test"
            draggable={true}
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside
            renderDotsOutside={false}
            responsive={responsive}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
          >
            {/* Render each post with a link to the content page */}
            {posts.map((post: any) => (
              <PostCard
              key={post.id}
              src={post.image}
              alt={post.altText}
              postLink={'/post/' + post.slug}
              title={post.title}
              authorName={post.authorName}
              date={post.date}
              />
            ))}
          </Carousel>
        </Box>
      </Container>
    </section>
  );
}

const styles: TSXStylesObject = {
  carouselWrapper: {
    '.carousel-container': {
      mx: -3,
    },
  },
};
