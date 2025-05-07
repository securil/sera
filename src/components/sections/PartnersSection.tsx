import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaGlobeAsia, FaUsers, FaCertificate } from 'react-icons/fa';

const PartnersSection: React.FC = () => {
  const partnerCategories = [
    {
      title: '콘텐츠 파트너',
      description: '세라는 글로벌 성인 콘텐츠 시장의 주요 제작사, 스튜디오, 플랫폼과 전략적 파트너십을 맺고 있습니다.',
      icon: <FaHandshake className="text-primary text-4xl mb-4" />,
      partners: [
        {
          name: 'DMM',
          logo: '/images/placeholder-logo.png',
          description: '일본 최대 성인 콘텐츠 플랫폼과의 독점 제휴로 방대한 콘텐츠 라이브러리에 접근할 수 있습니다.'
        },
        {
          name: 'SOD',
          logo: '/images/placeholder-logo.png',
          description: '일본의 유명 AV 제작사와의 협력을 통해 META TOY 전용 콘텐츠를 제작합니다.'
        },
        {
          name: 'FC2',
          logo: '/images/placeholder-logo.png',
          description: '라이브 스트리밍 플랫폼과의 기술 통합으로 실시간 상호작용 경험을 제공합니다.'
        },
        {
          name: '기타 스튜디오',
          logo: '/images/placeholder-logo.png',
          description: '20개 이상의 성인 콘텐츠 스튜디오와 전략적 파트너십을 체결했습니다.'
        }
      ]
    },
    {
      title: '인플루언서 & 크리에이터',
      description: '인기 AV 배우, 스트리머, 인플루언서와의 협력을 통해 실시간 상호작용 콘텐츠를 제공합니다.',
      icon: <FaUsers className="text-secondary text-4xl mb-4" />,
      partners: [
        {
          name: '인기 배우/모델',
          logo: '/images/placeholder-logo.png',
          description: '일본 성인 산업의 인기 배우 및 모델 50명 이상과 전속 계약을 체결했습니다.'
        },
        {
          name: '인기 스트리머',
          logo: '/images/placeholder-logo.png',
          description: '실시간 상호작용 콘텐츠를 위한 인기 스트리머 및 BJ와의 파트너십을 구축했습니다.'
        },
        {
          name: '인플루언서',
          logo: '/images/placeholder-logo.png',
          description: '소셜 미디어 성인 인플루언서와의 협력을 통해 META TOY의 홍보 및 마케팅을 진행합니다.'
        },
        {
          name: '전속 크리에이터',
          logo: '/images/placeholder-logo.png',
          description: '세라만의 독점 콘텐츠를 제작할 전속 크리에이터팀을 구성했습니다.'
        }
      ]
    },
    {
      title: '기술 파트너',
      description: '최첨단 기술력을 바탕으로 혁신적인 제품과 서비스를 개발하기 위한 기술 파트너십을 구축하고 있습니다.',
      icon: <FaGlobeAsia className="text-primary-light text-4xl mb-4" />,
      partners: [
        {
          name: '하드웨어 제조',
          logo: '/images/placeholder-logo.png',
          description: '고품질 하드웨어 생산을 위한 전문 제조업체와의 파트너십을 통해 안정적인 공급망을 확보했습니다.'
        },
        {
          name: '클라우드 서비스',
          logo: '/images/placeholder-logo.png',
          description: '글로벌 클라우드 서비스 제공업체와의 협력으로 안정적이고 확장 가능한 인프라를 구축했습니다.'
        },
        {
          name: 'AI & 빅데이터',
          logo: '/images/placeholder-logo.png',
          description: 'AI 기술 전문 기업과의 협력을 통해 개인화된 경험과 패턴 학습 시스템을 개발하고 있습니다.'
        },
        {
          name: '보안 기술',
          logo: '/images/placeholder-logo.png',
          description: '사용자 데이터 보호 및 안전한 결제 시스템을 위한 보안 기술 파트너십을 체결했습니다.'
        }
      ]
    },
    {
      title: '인증 & 규제 파트너',
      description: '각 국가의 규제 준수 및 안전성 인증을 위한 전문 파트너와 협력하고 있습니다.',
      icon: <FaCertificate className="text-secondary-light text-4xl mb-4" />,
      partners: [
        {
          name: '법률 자문',
          logo: '/images/placeholder-logo.png',
          description: '일본, 한국, 미국 등 각 국가의 성인 콘텐츠 규제 전문 법률 자문사와 협력하고 있습니다.'
        },
        {
          name: '국제 인증',
          logo: '/images/placeholder-logo.png',
          description: '제품 안전성 및 품질 보증을 위한 국제 인증 기관과 파트너십을 맺고 있습니다.'
        },
        {
          name: '연령 확인 시스템',
          logo: '/images/placeholder-logo.png',
          description: '안전한 성인 인증 시스템 구축을 위한 전문 업체와 협력하고 있습니다.'
        },
        {
          name: '결제 서비스',
          logo: '/images/placeholder-logo.png',
          description: '글로벌 결제 서비스 제공업체와의 파트너십으로 안전하고 익명성이 보장된 결제 시스템을 구축했습니다.'
        }
      ]
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
            <span className="gradient-text">글로벌 </span>
            파트너십
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            세라는 글로벌 성인 콘텐츠 시장의 주요 기업들과 전략적 파트너십을 구축하여
            최고의 콘텐츠와 서비스를 제공합니다. 일본을 시작으로 글로벌 시장에서
            다양한 파트너들과 함께 성장하고 있습니다.
          </p>
        </motion.div>

        {/* 파트너 카테고리 */}
        <div className="space-y-20">
          {partnerCategories.map((category, categoryIndex) => (
            <div key={category.title} className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-block p-4 rounded-full bg-dark-light mb-4">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                <p className="text-gray-300 max-w-2xl mx-auto">{category.description}</p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.partners.map((partner, partnerIndex) => (
                  <motion.div
                    key={partner.name}
                    custom={partnerIndex}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInUpVariants}
                    className="bg-dark p-6 rounded-xl hover-scale border border-gray-800"
                  >
                    <div className="aspect-video mb-4 bg-dark-light rounded-lg overflow-hidden flex items-center justify-center">
                      <p className="text-lg font-medium gradient-text">{partner.name}</p>
                    </div>
                    <p className="text-gray-300 text-sm">{partner.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* 파트너 로고 모음 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold mb-12">주요 파트너사</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[...Array(12)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-dark-light p-4 rounded-lg aspect-square flex items-center justify-center hover-scale"
              >
                <p className="text-gray-500 font-medium">파트너 로고</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;