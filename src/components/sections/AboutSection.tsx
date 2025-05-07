import React from 'react';
import { motion } from 'framer-motion';
import { FaBusinessTime, FaGlobe, FaTrophy, FaRegLightbulb } from 'react-icons/fa';

const AboutSection: React.FC = () => {
  const companyInfo = [
    {
      title: '설립 일자',
      value: '2023년 6월',
      description: '차세대 디지털 성인 콘텐츠 플랫폼을 목표로 설립',
      icon: <FaBusinessTime className="text-primary text-4xl" />
    },
    {
      title: '사업 분야',
      value: '디지털 성인 플랫폼',
      description: '하드웨어와 콘텐츠를 연결하는 통합 플랫폼 제공',
      icon: <FaGlobe className="text-secondary text-4xl" />
    },
    {
      title: '핵심 경쟁력',
      value: '독자 기술 보유',
      description: 'META TOY 3세대 기술 및 브릿지 소프트웨어 자체 개발',
      icon: <FaTrophy className="text-primary-light text-4xl" />
    },
    {
      title: '비전',
      value: '글로벌 리더',
      description: '디지털 성인 경험 시장의 글로벌 선도 기업',
      icon: <FaRegLightbulb className="text-secondary-light text-4xl" />
    }
  ];

  const milestones = [
    {
      year: '2023',
      events: [
        { month: '6월', title: '(주)세라 설립' },
        { month: '8월', title: '시드 투자 유치 (10억원)' },
        { month: '11월', title: 'META TOY 프로토타입 개발 완료' }
      ]
    },
    {
      year: '2024',
      events: [
        { month: '2월', title: '일본 콘텐츠 파트너십 체결 (DMM, SOD)' },
        { month: '5월', title: 'META TOY 베타 테스트 시작' },
        { month: '7월', title: '시리즈 A 투자 유치 (50억원)' },
        { month: '9월', title: '일본 법인 설립 준비' },
        { month: '12월', title: 'META TOY 출시 및 서비스 오픈 예정' }
      ]
    },
    {
      year: '2025',
      events: [
        { month: '1분기', title: '일본 시장 정식 진출' },
        { month: '2분기', title: '한국 시장 진출' },
        { month: '4분기', title: '누적 사용자 10만명 달성 목표' }
      ]
    }
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
            <span className="gradient-text">세라 </span>
            소개
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            세라는 하드웨어와 콘텐츠를 실시간으로 연결하여 이전에는 불가능했던 
            "사이버 섹스의 실시간 상호작용"을 가능하게 하는 디지털 성인 체험 플랫폼을 
            개발하는 기업입니다. 단순한 시청이 아닌 실제 감각을 동반한 경험을 제공합니다.
          </p>
        </motion.div>

        {/* 회사 정보 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {companyInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-light p-6 rounded-xl hover-scale border border-gray-800"
            >
              <div className="text-center">
                <div className="inline-block p-4 bg-dark rounded-full mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                <p className="text-2xl font-bold gradient-text mb-2">{info.value}</p>
                <p className="text-gray-300 text-sm">{info.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 회사 소개 본문 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-6 gradient-text"
            >
              디지털 성인 경험의 혁신
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4 text-gray-300"
            >
              <p>
                세라는 성인 콘텐츠 소비 방식의 근본적인 변화를 추구합니다. 기존의 수동적인 
                시청에서 벗어나, 실시간 상호작용이 가능한 몰입형 경험을 제공합니다.
              </p>
              <p>
                META TOY 하드웨어와 브릿지 소프트웨어의 자체 개발을 통해 기술적 우위를 
                확보했으며, 일본 시장 파트너십을 기반으로 글로벌 확장을 준비하고 있습니다.
              </p>
              <p>
                우리의 목표는 단순한 "성인 콘텐츠 플랫폼"이 아니라, 기술과 감각의 접점을 
                구현하는 "리얼 인터랙티브 경험 플랫폼"을 만드는 것입니다.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <button className="btn btn-primary mr-4">
                투자 자료 다운로드
              </button>
              <button className="btn btn-outline">
                문의하기
              </button>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
              <p className="text-xl font-medium gradient-text">회사 소개 비디오</p>
            </div>
            
            <motion.div
              className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>

        {/* 회사 연혁 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">회사 연혁</h3>
          
          <div className="space-y-8">
            {milestones.map((milestone, milestoneIndex) => (
              <div key={milestone.year} className="space-y-4">
                <motion.h4
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold gradient-text inline-block px-6 py-2 bg-dark-light rounded-full"
                >
                  {milestone.year}
                </motion.h4>
                
                <div className="pl-6 border-l-2 border-gray-700 ml-6 space-y-6">
                  {milestone.events.map((event, eventIndex) => (
                    <motion.div
                      key={event.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 + eventIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="absolute left-0 top-3 w-3 h-3 rounded-full bg-primary transform -translate-x-[25px]" />
                      <div className="bg-dark p-6 rounded-lg">
                        <span className="text-sm text-primary font-medium">{event.month}</span>
                        <h5 className="text-lg font-semibold mt-1">{event.title}</h5>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;