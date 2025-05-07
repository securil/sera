import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import AboutSection from '../components/sections/AboutSection';
import TeamSection from '../components/sections/TeamSection';
import VisionSection from '../components/sections/VisionSection';
import ContactSection from '../components/sections/ContactSection';

const AboutPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>회사 소개 | (주)세라 IR</title>
        <meta
          name="description"
          content="(주)세라는 가상의 쾌감을 현실처럼 만드는 기술과 플랫폼을 제공하여 새로운 디지털 성인 경험의 혁신을 주도합니다. 하드웨어와 콘텐츠를 실시간으로 연결하는 기술력과 글로벌 파트너십을 바탕으로 미래 성인 콘텐츠 산업의 새로운 패러다임을 만들어갑니다."
        />
      </Head>

      <div className="pt-24">
        <AboutSection />
        <TeamSection />
        <VisionSection />
        <ContactSection />
      </div>
    </Layout>
  );
};

export default AboutPage;