import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobeAsia, FaRocket, FaHandshake, FaChartLine } from 'react-icons/fa';

const MarketStrategySection: React.FC = () => {
  const strategies = [
    {
      title: '일본 시장 우선 진출',
      description: '세계 최대 성인 콘텐츠 시장인 일본에 먼저 진출하여 입지를 다지고, 이를 기반으로 글로벌 확장을 준비합니다.',
      points: [
        '현지 법인 설립으로 규제 대응 및 현지화 강화',
        'DMM, SOD 등 주요 콘텐츠 업체와 파트너십 구축',
        '일본 AV 배우 및 인플루언서 섭외 완료',
        '현지 마케팅 에이전시와 협력하여 맞춤형 프로모션'
      ],
      icon: <FaGlobeAsia className="text-4xl text-primary" />
    },
    {
      title: '단계적 글로벌 확장',
      description: '성공적인 일본 시장 진출 후, 한국, 미국, 유럽 등 주요 시장으로 단계적으로 사업을 확장합니다.',
      points: [
        '1단계 (1-2년): 일본 시장 안정화 및 한국 시장 진출',
        '2단계 (2-3년): 북미 및 유럽 주요국 진출',
        '3단계 (3-5년): 동남아시아 및 남미 시장 개척',
        '현지 규제 및 문화에 맞춘 맞춤형 전략 수립'
      ],
      icon: <FaRocket className="text-4xl text-secondary" />
    },
    {
      title: '전략적 파트너십',
      description: '각 지역의 주요 콘텐츠 제작사, 스트리머, 인플루언서와의 전략적 파트너십을 통해 시장 침투율을 높입니다.',
      points: [
        '주요 성인 콘텐츠 제작사와 독점 계약',
        '인기 스트리머 및 인플루언서 스폰서십 프로그램',
        '스트리밍 플랫폼과의 기술 통합 파트너십',
        '하드웨어 유통망 확보를 위한 소매 파트너십'
      ],
      icon: <FaHandshake className="text-4xl text-primary-light" />
    },
    {
      title: '지속적 기술 혁신',
      description: '끊임없는 R&D 투자를 통해 기술적 우위를 유지하고, 사용자 경험을 지속적으로 개선합니다.',
      points: [
        '연간 매출의 20% 이상을 R&D에 재투자',
        '정기적인 하드웨어 업그레이드 및 신제품 출시',
        '소프트웨어 플랫폼의 지속적 개선 및 확장',
        'AI 기반 개인화 기능 강화'
      ],
      icon: <FaChartLine className="text-4xl text-secondary-light" />
    }
  ];

  const marketSizes = [
    { region: '일본', size: '45조원', growth: '+5%', color: 'bg-red-500' },
    { region: '북미', size: '38조원', growth: '+8%', color: 'bg-blue-500' },
    { region: '유럽', size: '32조원', growth: '+6%', color: 'bg-green-500' },
    { region: '아시아(기타)', size: '25조원', growth: '+12%', color: 'bg-yellow-500' },
    { region: '기타 지역', size: '10조원', growth: '+9%', color: 'bg-purple-500' }
  ];

  return (
    <section className="section bg-dark relative overflow-hidden">
      {/* 배경 효과 */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5" />
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">시장 </span>
            전략
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            세라는 전략적인 시장 접근과 단계적 확장을 통해 글로벌 성인 콘텐츠 시장의 
            새로운 표준을 정립하고자 합니다. 철저한 시장 분석과 현지화 전략으로 
            각 지역의 특성에 맞는 서비스를 제공합니다.
          </p>
        </motion.div>

        {/* 시장 전략 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {strategies.map((strategy, index) => (
            <motion.div
              key={strategy.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-light p-8 rounded-xl hover-scale border border-gray-800"
            >
              <div className="flex items-start mb-4">
                <div className="mr-4 p-3 bg-dark rounded-full">
                  {strategy.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{strategy.title}</h3>
                  <p className="text-gray-300">{strategy.description}</p>
                </div>
              </div>
              
              <ul className="space-y-2 mt-4 pl-12">
                {strategy.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* 글로벌 시장 규모 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12">글로벌 성인 시장 규모</h3>
          
          <div className="bg-dark p-8 rounded-xl border border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {marketSizes.map((market, index) => (
                <motion.div
                  key={market.region}
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{ 
                    opacity: 1, 
                    height: [0, 100, 150, 180, 200][index] + 'px'
                  }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <div 
                    className={`w-full rounded-t-lg ${market.color} flex-grow flex items-center justify-center px-4 text-center`}
                  >
                    <span className="text-white font-bold text-xl">{market.size}</span>
                  </div>
                  <div className="w-full bg-dark-light p-3 rounded-b-lg text-center">
                    <p className="font-medium">{market.region}</p>
                    <p className="text-green-400">{market.growth} YoY</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 text-center text-gray-400">
              <p>※ 출처: 글로벌 성인 콘텐츠 시장 보고서 2024</p>
            </div>
          </div>
        </motion.div>

        {/* 시장 침투 타임라인 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">시장 침투 타임라인</h3>
          
          <div className="relative">
            {/* 타임라인 라인 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-primary-light" />
            
            {/* 타임라인 아이템 */}
            <div className="space-y-16 relative">
              {[
                { year: '2025', title: '일본 시장 진출', items: ['DMM, SOD 플랫폼 연동', '도쿄 오피스 설립', '1만 디바이스 판매 목표'] },
                { year: '2026', title: '한국 & 대만 진출', items: ['한국 파트너사 제휴', '국내 스트리머 제휴', '대만 유통망 확보'] },
                { year: '2027', title: '북미 시장 진출', items: ['LA 지사 설립', '미국 성인 스튜디오 파트너십', '북미 인증 취득'] },
                { year: '2028', title: '유럽 시장 진출', items: ['암스테르담 지사 설립', '유럽 규제 대응 체계 구축', '다국어 서비스 확장'] },
                { year: '2029', title: '글로벌 리더십 확보', items: ['글로벌 유저 500만 달성', '차세대 META TOY 2.0 출시', 'IPO 추진'] }
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="w-1/2 px-8">
                    <div 
                      className={`p-6 bg-dark rounded-xl border border-gray-800 ${
                        index % 2 === 0 ? 'text-right' : 'text-left'
                      }`}
                    >
                      <h4 className="text-xl font-bold gradient-text mb-2">{item.title}</h4>
                      <p className="text-2xl font-bold mb-4">{item.year}</p>
                      <ul className={`space-y-1 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                        {item.items.map((point, i) => (
                          <li key={i} className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                            <span className={`text-primary ${index % 2 === 0 ? 'order-2 ml-2' : 'order-1 mr-2'}`}>✓</span>
                            <span className="text-gray-300">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-dark" />
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
              투자 안내서 다운로드
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

export default MarketStrategySection;