import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';

// Import the generated Lists API and types from Keystone
import { query } from '.keystone/api';
import React from "react";
import { ThemeProvider } from "@emotion/react";
import { AppTheme } from "../theme";
import { SEO } from "../components/seo";
import { StickyProvider } from '../contexts/app/app.provider';
import { Layout } from "../components/layout";
import { Banner } from "../sections/banner";
import KeyFeature from "../sections/key-feature";
import ServiceSection from "../sections/service-section";
import CoreFeature from "../sections/core-feature";
import Feature from "../sections/feature";
import WorkFlow from "../sections/workflow";
import Package from "../sections/package";
import TeamSection from "../sections/team-section";
import TestimonialCard from "../sections/testimonial";
import BlogSection from "../sections/blog-section";
import Subscribe from "../sections/subscribe";


type Post = {
  id: string;
  title: string;
  slug: string;
};

// Home receives a `posts` prop from `getStaticProps` below
export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
      <ThemeProvider theme={AppTheme}>
        <StickyProvider>
          <Layout>
            <SEO title="Remitt" />
            <Banner />
            <KeyFeature />
            {/*<ServiceSection />*/}
            {/*<Feature />*/}
            <CoreFeature />
            <WorkFlow />
            {/*<Package />*/}
            {/*<TeamSection />*/}
            {/*<TestimonialCard />*/}
            {/*<BlogSection posts={posts} />*/}
            {/*<Subscribe />*/}
          </Layout>
        </StickyProvider>
      </ThemeProvider>
  );
}

// Here we use the Lists API to load all the posts we want to display
// The return of this function is provided to the `Home` component
export async function getStaticProps() {
  const posts = await query.Post.findMany({ query: 'id title slug' }) as Post[];
  return {
    props: {
      posts
    }
  };
}
