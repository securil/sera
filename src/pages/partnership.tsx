import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import PartnersSection from '../components/sections/PartnersSection';
import JapanMarketSection from '../components/sections/JapanMarketSection';
import PartnershipCallSection from '../components/sections/PartnershipCallSection';

const PartnershipPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>파트너십 | (주)세라 IR</title>
        <meta
          name="description"
          content="세라는 일본 시장 현지 파트너십 구축을 통해 DMM, SOD, FC2 등과 연계 가능하며, 일본 AV 배우, 인플루언서 섭외를 완료했습니다. 현지 법인 설립 예정으로 규제 회피 및 문화 적응을 준비하고 있습니다."
        />
      </Head>

      <div className="pt-24">
        <PartnersSection />
        <JapanMarketSection />
        <PartnershipCallSection />
      </div>
    </Layout>
  );
};

export default PartnershipPage;