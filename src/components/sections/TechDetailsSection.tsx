import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaNetworkWired, FaRocket, FaLock } from 'react-icons/fa';

const TechDetailsSection: React.FC = () => {
  const techDetails = [
    {
      icon: <FaBrain className="text-primary text-4xl" />,
      title: '고급 촉각 피드백 시스템',
      description: '인체공학적으로 설계된 META TOY는 초정밀 모터와 압력 센서를 활용하여 실제와 같은 촉각 피드백을 제공합니다. 실시간으로 영상 콘텐츠와 동기화되는 감각을 경험할 수 있습니다.'
    },
    {
      icon: <FaNetworkWired className="text-primary text-4xl" />,
      title: '실시간 인터랙티브 스트리밍',
      description: '독자적인 저지연 프로토콜을 통해 라이브 스트리밍 환경에서도 즉각적인 상호작용이 가능합니다. 콘텐츠 제작자와 사용자 간의 실시간 쌍방향 커뮤니케이션이 가능합니다.'
    },
    {
      icon: <FaRocket className="text-primary text-4xl" />,
      title: '자체 개발 브릿지 소프트웨어',
      description: '콘텐츠와 하드웨어를 연결하는 브릿지 소프트웨어는 복잡한 동작 패턴을 정확하게 디바이스에 전달합니다. AI 기반 학습 알고리즘으로 콘텐츠에 맞춤화된 경험을 제공합니다.'
    },
    {
      icon: <FaLock className="text-primary text-4xl" />,
      title: '보안 및 개인정보 보호',
      description: '모든 사용자 데이터는 엔드-투-엔드 암호화로 보호되며, 프라이버시 중심 설계로 안전한 서비스를 제공합니다. 국제 표준을 준수하는 보안 시스템을 갖추고 있습니다.'
    }
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
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
            <span className="gradient-text">META TOY</span> 기술 상세
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            세라의 META TOY는 단순한 장치가 아닌 첨단 기술의 집약체입니다. 
            실제 감각을 디지털로 전달하는 혁신적인 기술을 만나보세요.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techDetails.map((detail, index) => (
            <motion.div
              key={detail.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUpVariants}
              className="bg-dark p-8 rounded-xl hover-scale border border-gray-800"
            >
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-dark-light rounded-full">
                  {detail.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{detail.title}</h3>
                  <p className="text-gray-300">{detail.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-gray-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                특허 출원 기술
              </h3>
              <p className="text-gray-300 mb-4">
                세라의 핵심 기술은 글로벌 특허로 보호받고 있습니다. 독자적인 진동 패턴 전송 기술과
                생체역학 기반 반응 시스템은 업계에서도 독보적인 위치를 차지하고 있습니다.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-300">실시간 촉각 데이터 전송 프로토콜</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-300">AI 기반 패턴 학습 및 재현 시스템</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-300">생체역학 기반 반응 알고리즘</span>
                </li>
              </ul>
            </div>
            <div className="aspect-square rounded-xl overflow-hidden bg-dark p-4 flex items-center justify-center">
              <div className="w-full h-full rounded-lg border border-primary/30 flex items-center justify-center">
                <p className="text-xl font-medium gradient-text">특허 인증서 이미지</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechDetailsSection;