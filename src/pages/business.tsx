import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import BusinessSection from '../components/sections/BusinessSection';
import RevenueModelSection from '../components/sections/RevenueModelSection';
import MarketStrategySection from '../components/sections/MarketStrategySection';

const BusinessPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>비즈니스 모델 | (주)세라 IR</title>
        <meta
          name="description"
          content="세라의 비즈니스 모델은 하드웨어 판매, 구독형 콘텐츠, 라이브 상호작용을 통한 수익으로 구성됩니다. VIP, 프리미엄, 1:1 미팅 등 확장성 높은 유료 콘텐츠를 제공하며, BJ와 팬, 배우와 팬이 실시간으로 만나는 경험을 제공합니다."
        />
      </Head>

      <div className="pt-24">
        <BusinessSection />
        <RevenueModelSection />
        <MarketStrategySection />
      </div>
    </Layout>
  );
};

export default BusinessPage;