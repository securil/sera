import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaGlobeAsia, FaUsers } from 'react-icons/fa';

const BusinessSection: React.FC = () => {
  const marketStats = [
    { 
      icon: <FaChartLine className="text-primary text-4xl mb-4" />,
      title: '글로벌 성인 시장',
      value: '150조 원',
      detail: '연 7% 이상 성장 중'
    },
    { 
      icon: <FaGlobeAsia className="text-primary text-4xl mb-4" />,
      title: '폰허브 월간 방문자',
      value: '8천만 명 이상',
      detail: '수요는 이미 폭발적'
    },
    { 
      icon: <FaUsers className="text-primary text-4xl mb-4" />,
      title: '성인 VR, 섹스테크',
      value: '급성장',
      detail: '기술 기반 성인 콘텐츠'
    }
  ];

  const needPoints = [
    {
      title: '시청에 불과한 기존 콘텐츠',
      description: '기존 콘텐츠는 단순 시청에 불과하여 더 이상 몰입하지 못합니다.'
    },
    {
      title: '실감형, 인터랙션',
      description: '새로운 세대는 실감형, 인터랙션 기반 콘텐츠에 익숙합니다.'
    },
    {
      title: '감각적 체험',
      description: '디지털/모바일에서 감각적 체험을 원합니다.'
    }
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: 0.1 * i,
        duration: 0.6
      } 
    })
  };

  return (
    <section className="section bg-dark-light relative overflow-hidden">
      {/* 배경 효과 */}
      <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 to-secondary/5" />
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">왜 </span>
            이걸 해야 하는가?
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            세라가 개발 중인 플랫폼은 단순한 "성인 콘텐츠 플랫폼"이 아니라, 
            기술과 감각의 접점을 구현하는 리얼 인터랙티브 경험 플랫폼입니다.
          </p>
        </motion.div>

        {/* 시장 현황 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12">
            🔍 시장은 이미 준비되어 있습니다
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketStats.map((stat, index) => (
              <motion.div
                key={stat.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUpVariants}
                className="bg-dark p-8 rounded-xl hover-scale"
              >
                <div className="text-center">
                  {stat.icon}
                  <h4 className="text-xl font-semibold mb-2">{stat.title}</h4>
                  <p className="text-3xl font-bold gradient-text mb-2">{stat.value}</p>
                  <p className="text-gray-400">{stat.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 사용자 니즈 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">
            🎯 사용자 니즈는 분명합니다
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {needPoints.map((point, index) => (
              <motion.div
                key={point.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUpVariants}
                className="bg-dark p-8 rounded-xl hover-scale border border-gray-800"
              >
                <h4 className="text-xl font-semibold mb-4 gradient-text">{point.title}</h4>
                <p className="text-gray-300">{point.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <button className="btn btn-primary">비즈니스 모델 자세히 보기</button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessSection;