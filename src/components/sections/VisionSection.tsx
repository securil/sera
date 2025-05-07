import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaGlobeAsia, FaChartLine } from 'react-icons/fa';

const VisionSection: React.FC = () => {
  const visionPoints = [
    {
      title: '실감형 경험의 표준화',
      description: '디지털 성인 콘텐츠 소비 방식에서 실감형 경험을 새로운 표준으로 만들어가고자 합니다.',
      icon: <FaRocket className="text-primary text-4xl" />
    },
    {
      title: '글로벌 10억 사용자 확보',
      description: '5년 내 전 세계 10억 사용자가 세라의 플랫폼을 통해 새로운 디지털 성인 경험을 즐기는 것을 목표로 합니다.',
      icon: <FaUsers className="text-secondary text-4xl" />
    },
    {
      title: '국제적 기업으로의 성장',
      description: '일본, 한국을 시작으로 북미, 유럽 등 글로벌 시장에 진출하여 국제적인 기업으로 성장하겠습니다.',
      icon: <FaGlobeAsia className="text-primary-light text-4xl" />
    },
    {
      title: '성인 콘텐츠 산업의 디지털 혁신',
      description: '기술 혁신을 통해 전통적인 성인 콘텐츠 산업의 디지털 혁신을 주도하겠습니다.',
      icon: <FaChartLine className="text-secondary-light text-4xl" />
    }
  ];

  const valuePoints = [
    {
      title: '혁신',
      description: '끊임없는 기술 혁신을 통해 사용자 경험을 향상시키고 새로운 가치를 창출합니다.',
    },
    {
      title: '품질',
      description: '최고 품질의 하드웨어와 콘텐츠로 사용자에게 최상의 경험을 제공합니다.',
    },
    {
      title: '신뢰성',
      description: '안정적인 서비스와 사용자 데이터 보호로 신뢰할 수 있는 플랫폼을 구축합니다.',
    },
    {
      title: '글로벌',
      description: '문화적 차이를 이해하고 존중하며 글로벌 시장에 맞춘 서비스를 제공합니다.',
    },
    {
      title: '사용자 중심',
      description: '모든 의사결정의 중심에 사용자 경험과 만족을 두고 서비스를 개발합니다.',
    },
    {
      title: '윤리적 접근',
      description: '성인 콘텐츠 서비스를 제공함에 있어 윤리적 기준과 법적 규제를 준수합니다.',
    }
  ];

  return (
    <section className="section bg-dark relative overflow-hidden">
      {/* 배경 효과 */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">비전 </span>
            및 가치
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            세라는 디지털 성인 경험의 새로운 패러다임을 창조하고, 기술과 감각의 접점을 
            완벽하게 구현하여 사용자에게 잊지 못할 경험을 제공하는 것을 목표로 합니다.
          </p>
        </motion.div>

        {/* 비전 포인트 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {visionPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-light p-8 rounded-xl hover-scale border border-gray-800"
            >
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-dark rounded-full">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
                  <p className="text-gray-300">{point.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 핵심 가치 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12">핵심 가치</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valuePoints.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark p-8 rounded-xl border border-gray-800"
              >
                <h4 className="text-xl font-bold mb-4 gradient-text">{value.title}</h4>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 비전 선언문 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center p-8 md:p-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-gray-800"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            "가상의 쾌감을 현실처럼 만드는 기술과 플랫폼"
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            세라는 단순한 "성인 콘텐츠 플랫폼"이 아니라, 기술과 감각의 접점을 구현하는 "리얼 인터랙티브 경험 플랫폼"입니다. 
            우리는 하드웨어와 콘텐츠의 완벽한 결합을 통해 디지털 성인 경험의 새로운 표준을 정립하고, 글로벌 시장을 선도하는 기업이 되겠습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary">
              투자 문의하기
            </button>
            <button className="btn btn-outline">
              회사 소개서 다운로드
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;