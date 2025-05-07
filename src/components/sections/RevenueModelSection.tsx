import React from 'react';
import { motion } from 'framer-motion';
import { FaMoneyBillWave, FaUsers, FaRegCalendarAlt, FaChartLine } from 'react-icons/fa';

const RevenueModelSection: React.FC = () => {
  const revenueStreams = [
    {
      icon: <FaMoneyBillWave className="text-primary text-4xl mb-4" />,
      title: '하드웨어 판매',
      description: 'META TOY 디바이스 판매를 통한 기본 수익 창출',
      details: [
        '기본 모델 : 299,000원',
        '프리미엄 모델 : 399,000원',
        '리미티드 에디션 : 599,000원',
        '액세서리 및 부가 상품'
      ],
      color: 'from-primary to-primary-light'
    },
    {
      icon: <FaRegCalendarAlt className="text-secondary text-4xl mb-4" />,
      title: '구독 수익',
      description: '다양한 등급의 월간/연간 구독 서비스',
      details: [
        '기본 구독 : 월 15,000원',
        '프리미엄 구독 : 월 25,000원',
        'VIP 구독 : 월 45,000원',
        '연간 구독 시 20% 할인'
      ],
      color: 'from-secondary to-secondary-light'
    },
    {
      icon: <FaUsers className="text-primary-light text-4xl mb-4" />,
      title: '라이브 상호작용',
      description: '실시간 스트리밍 및 인터랙티브 세션',
      details: [
        '가상 선물 및 팁 시스템',
        '프라이빗 1:1 세션 (분당 과금)',
        '커스텀 요청 및 프리미엄 경험',
        '라이브 이벤트 및 스페셜 쇼'
      ],
      color: 'from-primary-light to-secondary-light'
    },
    {
      icon: <FaChartLine className="text-secondary-light text-4xl mb-4" />,
      title: '파트너십 및 제휴',
      description: '콘텐츠 제작자 및 스튜디오와의 파트너십',
      details: [
        '콘텐츠 제작사 수익 분배',
        '인플루언서 마케팅 및 브랜드 콜라보',
        '유명 AV 배우 및 BJ 전속 계약',
        '스트리밍 플랫폼 연동 제휴'
      ],
      color: 'from-secondary-light to-primary'
    }
  ];

  const subscriptionTiers = [
    {
      name: '기본',
      price: '월 15,000원',
      features: [
        '기본 콘텐츠 라이브러리 접근',
        '표준 품질 스트리밍',
        '일부 라이브 이벤트 참여',
        '제한된 인터랙션 기능'
      ],
      isPopular: false,
      color: 'border-gray-600 bg-dark-light'
    },
    {
      name: '프리미엄',
      price: '월 25,000원',
      features: [
        '전체 콘텐츠 라이브러리 접근',
        '최대 4K 고품질 스트리밍',
        '모든 라이브 이벤트 참여',
        '고급 인터랙션 기능',
        '우선 고객 지원'
      ],
      isPopular: true,
      color: 'border-primary bg-gradient-to-b from-dark to-primary/10'
    },
    {
      name: 'VIP',
      price: '월 45,000원',
      features: [
        '독점 프리미엄 콘텐츠',
        '8K 최고품질 스트리밍',
        'VIP 전용 프라이빗 이벤트',
        '무제한 인터랙션 기능',
        '월 1회 1:1 프라이빗 세션',
        '24/7 전용 고객 지원'
      ],
      isPopular: false,
      color: 'border-secondary bg-gradient-to-b from-dark to-secondary/10'
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
            <span className="gradient-text">차별화된 </span>
            수익 모델
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            세라는 하드웨어 판매, 구독 서비스, 라이브 상호작용을 통한 다각화된 
            수익 모델을 갖추고 있습니다. 안정적인 구독 기반 수익과 함께 
            확장 가능한 추가 수익원을 제공합니다.
          </p>
        </motion.div>

        {/* 수익 스트림 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {revenueStreams.map((stream, index) => (
            <motion.div
              key={stream.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark p-8 rounded-xl hover-scale"
            >
              <div className="text-center mb-6">
                {stream.icon}
                <h3 className="text-xl font-semibold mb-2">{stream.title}</h3>
                <p className="text-gray-300">{stream.description}</p>
              </div>
              
              <div className={`h-1 w-24 mx-auto mb-6 rounded-full bg-gradient-to-r ${stream.color}`} />
              
              <ul className="space-y-2">
                {stream.details.map((detail, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-gray-300">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* 구독 모델 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-12">구독 플랜 비교</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subscriptionTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className={`relative border-2 rounded-xl overflow-hidden ${tier.color}`}
              >
                {tier.isPopular && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg font-medium">
                    인기 플랜
                  </div>
                )}
                
                <div className="p-8">
                  <h4 className="text-xl font-bold mb-2">{tier.name}</h4>
                  <p className="text-2xl font-bold gradient-text mb-6">{tier.price}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">✓</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full btn ${tier.isPopular ? 'btn-primary' : 'btn-outline'}`}>
                    선택하기
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 수익 모델 다이어그램 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 bg-dark rounded-xl border border-gray-800"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            <span className="gradient-text">수익 성장 예측</span>
          </h3>
          
          <div className="aspect-video rounded-lg overflow-hidden bg-dark-light p-4 flex items-center justify-center">
            <p className="text-xl font-medium gradient-text">수익 성장 차트</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-dark-light p-4 rounded-lg text-center">
              <p className="text-gray-400 mb-1">1차년도</p>
              <p className="text-2xl font-bold gradient-text">30억</p>
            </div>
            <div className="bg-dark-light p-4 rounded-lg text-center">
              <p className="text-gray-400 mb-1">2차년도</p>
              <p className="text-2xl font-bold gradient-text">150억</p>
            </div>
            <div className="bg-dark-light p-4 rounded-lg text-center">
              <p className="text-gray-400 mb-1">3차년도</p>
              <p className="text-2xl font-bold gradient-text">450억</p>
            </div>
            <div className="bg-dark-light p-4 rounded-lg text-center">
              <p className="text-gray-400 mb-1">5차년도</p>
              <p className="text-2xl font-bold gradient-text">1,200억</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RevenueModelSection;