import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/HeroSection';
import BusinessSection from '../components/sections/BusinessSection';
import TechnologySection from '../components/sections/TechnologySection';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>(주)세라 IR - 새로운 디지털 성인 경험의 혁신</title>
        <meta
          name="description"
          content="세라는 하드웨어와 콘텐츠를 실시간으로 연결하여 이전에는 불가능했던 '사이버 섹스의 실시간 상호작용'을 가능하게 하는 디지털 성인 체험 플랫폼을 개발하고 있습니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection />
        <BusinessSection />
        <TechnologySection />
      </main>
    </Layout>
  );
};

export default Home;