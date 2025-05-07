import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import TechnologySection from '../components/sections/TechnologySection';
import TechDetailsSection from '../components/sections/TechDetailsSection';
import TechSpecsSection from '../components/sections/TechSpecsSection';

const TechnologyPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>기술 소개 | (주)세라 IR</title>
        <meta
          name="description"
          content="세라의 META TOY 기술은 3세대 촉각 전달 기술을 적용하여 실제와 같은 감각을 제공합니다. 자체 개발된 브릿지 소프트웨어와 함께 작동하여 콘텐츠와 하드웨어 간의 완벽한 실시간 동기화를 구현합니다."
        />
      </Head>

      <div className="pt-24">
        <TechnologySection />
        <TechDetailsSection />
        <TechSpecsSection />
      </div>
    </Layout>
  );
};

export default TechnologyPage;