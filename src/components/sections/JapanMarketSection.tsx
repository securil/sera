import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaRegBuilding, FaRegHandshake, FaRegChartBar } from 'react-icons/fa';

const JapanMarketSection: React.FC = () => {
  const japanMarketPoints = [
    {
      title: '일본 성인 콘텐츠 시장 규모',
      value: '약 12조원',
      description: '일본은 세계 최대 규모의 성인 콘텐츠 시장 중 하나로, 연간 매출 규모가 약 12조원에 달합니다.',
      icon: <FaRegChartBar className="text-primary text-4xl" />
    },
    {
      title: '스튜디오 및 제작사',
      value: '500+ 업체',
      description: '일본에는 500개 이상의 성인 콘텐츠 제작사와 스튜디오가 있으며, 이들과의、파트너십을 통해 독점 콘텐츠를 확보할 수 있습니다.',
      icon: <FaRegBuilding className="text-secondary text-4xl" />
    },
    {
      title: '성인 콘텐츠 배우',
      value: '1만명 이상',
      description: '일본에는 1만명 이상의 활동 중인 성인 콘텐츠 배우가 있으며, 이들과의 협력을 통해 차별화된 콘텐츠를 제작할 수 있습니다.',
      icon: <FaRegHandshake className="text-primary-light text-4xl" />
    },
    {
      title: '디지털 성인 콘텐츠 소비자',
      value: '3,500만명',
      description: '일본 내 디지털 성인 콘텐츠 소비자는 약 3,500만명으로 추정되며, 높은 기술 수용성을 보이고 있습니다.',
      icon: <FaMapMarkerAlt className="text-secondary-light text-4xl" />
    }
  ];

  const japanAdvantages = [
    {
      title: '현지 법인 설립',
      description: '도쿄에 현지 법인을 설립하여 규제 대응 및 시장 적응력을 높이고 있습니다.',
      points: [
        '현지 법률 및 규제 대응',
        '일본 시장에 특화된 마케팅 전략',
        '현지 인재 채용 및 관리',
        '세금 및 법적 최적화'
      ]
    },
    {
      title: '콘텐츠 파트너십',
      description: '주요 성인 콘텐츠 제작사 및 플랫폼과의 전략적 파트너십을 구축했습니다.',
      points: [
        'DMM, SOD 등 주요 업체와 제휴',
        '독점 콘텐츠 확보',
        '하드웨어 연동 콘텐츠 제작',
        '라이브 스트리밍 통합'
      ]
    },
    {
      title: '현지 인플루언서',
      description: '일본의 인기 AV 배우 및 인플루언서와의 협력을 통해 브랜드 인지도를 높이고 있습니다.',
      points: [
        '50+ 인기 배우 섭외 완료',
        '전속 계약 체결',
        '팬 미팅 및 라이브 이벤트',
        '소셜 미디어 마케팅'
      ]
    },
    {
      title: '기술 현지화',
      description: '일본 사용자의 취향과 문화적 특성에 맞춘 기술 및 콘텐츠 현지화를 진행하고 있습니다.',
      points: [
        '일본어 전용 UI/UX',
        '현지 결제 시스템 통합',
        '일본 특화 콘텐츠 추천 알고리즘',
        '일본 사용자 피드백 기반 최적화'
      ]
    }
  ];

  const japanRoadmap = [
    {
      year: '2024',
      quarter: 'Q4',
      title: '일본 법인 설립',
      description: '도쿄에 현지 법인 설립 및 초기 팀 구성'
    },
    {
      year: '2025',
      quarter: 'Q1',
      title: '파트너십 체결',
      description: '주요 콘텐츠 제작사 및 플랫폼과 파트너십 체결'
    },
    {
      year: '2025',
      quarter: 'Q2',
      title: '제품 출시',
      description: '일본 시장에 META TOY 제품 공식 출시 및 판매 시작'
    },
    {
      year: '2025',
      quarter: 'Q3',
      title: '콘텐츠 확장',
      description: '독점 콘텐츠 확보 및 라이브 서비스 출시'
    },
    {
      year: '2025',
      quarter: 'Q4',
      title: '유통망 확대',
      description: '오프라인 유통 채널 확보 및 마케팅 강화'
    },
    {
      year: '2026',
      quarter: 'Q1',
      title: '사용자 10만 달성',
      description: '일본 시장 사용자 10만명 달성 및 서비스 고도화'
    }
  ];

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
            <span className="gradient-text">일본 시장 </span>
            진출 전략
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            세라는 세계 최대 성인 콘텐츠 시장 중 하나인 일본에 우선적으로 진출하여
            입지를 다지고, 이를 기반으로 글로벌 확장을 준비하고 있습니다.
          </p>
        </motion.div>

        {/* 일본 시장 통계 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {japanMarketPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark p-6 rounded-xl hover-scale border border-gray-800"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-dark-light rounded-full mr-4">
                  {point.icon}
                </div>
                <h3 className="text-xl font-semibold">{point.title}</h3>
              </div>
              <p className="text-3xl font-bold gradient-text mb-4">{point.value}</p>
              <p className="text-gray-300 text-sm">{point.description}</p>
            </motion.div>
          ))}
        </div>

        {/* 일본 시장 진출 장점 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12">일본 시장 진출 전략</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {japanAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark p-8 rounded-xl border border-gray-800"
              >
                <h4 className="text-xl font-bold mb-4 gradient-text">{advantage.title}</h4>
                <p className="text-gray-300 mb-6">{advantage.description}</p>
                
                <ul className="space-y-2">
                  {advantage.points.map((point, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 일본 시장 로드맵 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">일본 시장 진출 로드맵</h3>
          
          <div className="relative">
            {/* 타임라인 라인 */}
            <div className="absolute top-0 left-24 md:left-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-primary" />
            
            <div className="space-y-12">
              {japanRoadmap.map((milestone, index) => (
                <motion.div
                  key={milestone.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col md:flex-row"
                >
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                    <div className={`md:ml-auto ${index % 2 === 0 ? 'md:block' : 'md:hidden'}`}>
                      <div className="bg-dark p-6 rounded-xl inline-block border border-gray-800">
                        <div className="text-sm text-gray-400 mb-1">{milestone.year} {milestone.quarter}</div>
                        <h4 className="text-xl font-bold gradient-text mb-2">{milestone.title}</h4>
                        <p className="text-gray-300">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute top-6 left-24 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-dark z-10" />
                  
                  <div className="md:w-1/2 md:pl-12">
                    <div className={`${index % 2 === 1 ? 'md:block' : 'md:hidden'}`}>
                      <div className="bg-dark p-6 rounded-xl inline-block border border-gray-800">
                        <div className="text-sm text-gray-400 mb-1">{milestone.year} {milestone.quarter}</div>
                        <h4 className="text-xl font-bold gradient-text mb-2">{milestone.title}</h4>
                        <p className="text-gray-300">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <button className="btn btn-primary mx-2">
              일본 시장 보고서 다운로드
            </button>
            <button className="btn btn-outline mx-2">
              파트너십 문의하기
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default JapanMarketSection;