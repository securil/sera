import React from 'react';
import { motion } from 'framer-motion';
import { FaMicrochip, FaCode, FaHandshake } from 'react-icons/fa';

const TechnologySection: React.FC = () => {
  const techAdvantages = [
    {
      icon: <FaMicrochip className="text-primary text-4xl mb-4" />,
      title: '하드웨어 + 소프트웨어 자체 개발',
      points: [
        'META TOY는 3세대 기술로 직접 설계 및 제작',
        '브릿지 소프트웨어까지 자체 기술력 보유'
      ]
    },
    {
      icon: <FaHandshake className="text-primary text-4xl mb-4" />,
      title: '일본 시장 현지 파트너십 구축',
      points: [
        'DMM, SOD, FC2 등과 연계 가능',
        '일본 AV 배우, 인플루언서 섭외 완료',
        '현지 법인 설립 예정으로 규제 회피 및 문화 적응'
      ]
    },
    {
      icon: <FaCode className="text-primary text-4xl mb-4" />,
      title: '차별화된 수익모델',
      points: [
        '하드웨어 판매 + 구독형 콘텐츠 + 라이브 상호작용 수익',
        'VIP/프리미엄/1:1 미팅 등 확장성 높은 유료 콘텐츠',
        'BJ와 팬, 배우와 팬이 실시간으로 만나는 경험 제공'
      ]
    }
  ];

  const features = [
    {
      title: '실제 감각을 동반한 경험',
      description: '단순 시청이 아닌 촉각적 감각이 전달되는 실감형 콘텐츠',
      gradient: 'from-primary to-primary-light'
    },
    {
      title: '양방향 쌍방향 연결',
      description: 'BJ, AV 배우, 인플루언서와의 실시간 상호작용',
      gradient: 'from-primary-light to-secondary'
    },
    {
      title: '구독 기반 수익모델',
      description: 'VOD 콘텐츠와 연동되는 하드웨어, 안정적인 수익 창출',
      gradient: 'from-secondary to-secondary-light'
    },
    {
      title: '글로벌 사용자 대응',
      description: '라이브 인터랙션 + AI 번역으로 언어 장벽 해소',
      gradient: 'from-secondary-light to-primary'
    }
  ];

  const fadeInVariants = {
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
    <section className="section bg-dark relative overflow-hidden">
      {/* 배경 효과 */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">왜 우리는 </span>
            이걸 잘 해낼 수 있는가?
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            세라는 하드웨어와 소프트웨어의 완벽한 통합, 글로벌 파트너십, 
            그리고 혁신적인 비즈니스 모델을 통해 디지털 성인 체험의 새로운 
            패러다임을 창조합니다.
          </p>
        </motion.div>

        {/* 핵심 기술 장점 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {techAdvantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariants}
              className="bg-dark-light p-8 rounded-xl border border-gray-800 hover-scale"
            >
              <div className="text-center">
                {advantage.icon}
                <h4 className="text-xl font-semibold mb-4">{advantage.title}</h4>
                <ul className="space-y-2 text-left">
                  {advantage.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* META TOY 제품 소개 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12">META TOY 기술</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center"
            >
              <p className="text-xl font-medium gradient-text">META TOY 3D 모델</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-bold mb-6 gradient-text">3세대 촉각 전달 기술</h4>
              <p className="text-gray-300 mb-6">
                META TOY는 최첨단 촉각 피드백 기술을 적용하여 실제와 같은 감각을 제공합니다.
                자체 개발된 브릿지 소프트웨어와 함께 작동하여 콘텐츠와 하드웨어 간의
                완벽한 실시간 동기화를 구현합니다.
              </p>
              
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={feature.title}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInVariants}
                    className="flex items-start"
                  >
                    <div className={`mr-4 p-2 rounded-full bg-gradient-to-r ${feature.gradient}`}>
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold mb-1">{feature.title}</h5>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <button className="btn btn-primary">기술 상세 보기</button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection;