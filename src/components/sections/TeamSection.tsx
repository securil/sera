import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: '김재석',
      position: 'CEO / 공동창업자',
      bio: '10년 이상의 하드웨어 개발 경험을 보유한 전문가로, 삼성전자 출신. 섹스테크 분야에서의 혁신적인 제품 개발로 여러 특허를 보유하고 있습니다.',
      image: '/images/placeholder-profile.jpg',
      social: [
        { icon: <FaLinkedin />, url: '#' },
        { icon: <FaTwitter />, url: '#' },
        { icon: <FaEnvelope />, url: '#' }
      ]
    },
    {
      name: '이민지',
      position: 'CTO / 공동창업자',
      bio: '네이버 출신 소프트웨어 엔지니어로, 실시간 스트리밍 및 인터랙티브 플랫폼 개발 경험이 풍부합니다. 브릿지 소프트웨어 개발을 주도했습니다.',
      image: '/images/placeholder-profile.jpg',
      social: [
        { icon: <FaLinkedin />, url: '#' },
        { icon: <FaTwitter />, url: '#' },
        { icon: <FaEnvelope />, url: '#' }
      ]
    },
    {
      name: '타나카 히로시',
      position: '일본 비즈니스 총괄',
      bio: '일본 성인 콘텐츠 산업에서 15년 이상의 경험을 보유한 전문가로, DMM 출신. 일본 시장 진출 전략과 현지 파트너십을 담당합니다.',
      image: '/images/placeholder-profile.jpg',
      social: [
        { icon: <FaLinkedin />, url: '#' },
        { icon: <FaTwitter />, url: '#' },
        { icon: <FaEnvelope />, url: '#' }
      ]
    },
    {
      name: '박지현',
      position: 'CMO',
      bio: '글로벌 성인 콘텐츠 마케팅 전문가로 FC2 출신. 디지털 마케팅 및 콘텐츠 전략 수립을 담당하며 글로벌 브랜드 성장에 기여하고 있습니다.',
      image: '/images/placeholder-profile.jpg',
      social: [
        { icon: <FaLinkedin />, url: '#' },
        { icon: <FaTwitter />, url: '#' },
        { icon: <FaEnvelope />, url: '#' }
      ]
    },
    {
      name: '정태원',
      position: 'COO',
      bio: '스타트업 운영 및 성장 전략 전문가로, 쿠팡 출신. 효율적인 비즈니스 운영과 글로벌 확장 전략을 수립하고 있습니다.',
      image: '/images/placeholder-profile.jpg',
      social: [
        { icon: <FaLinkedin />, url: '#' },
        { icon: <FaTwitter />, url: '#' },
        { icon: <FaEnvelope />, url: '#' }
      ]
    },
    {
      name: '김수연',
      position: 'UX 디자인 책임자',
      bio: '사용자 경험에 특화된 디자이너로, 네이버 출신. META TOY와 플랫폼의 직관적이고 몰입감 있는 UI/UX 설계를 담당합니다.',
      image: '/images/placeholder-profile.jpg',
      social: [
        { icon: <FaLinkedin />, url: '#' },
        { icon: <FaTwitter />, url: '#' },
        { icon: <FaEnvelope />, url: '#' }
      ]
    },
    {
      name: '존 스미스',
      position: '글로벌 비즈니스 개발',
      bio: '미국과 유럽 시장 진출을 담당하는 글로벌 비즈니스 전문가. 다양한 기술 스타트업의 국제 확장을 주도한 경험이 풍부합니다.',
      image: '/images/placeholder-profile.jpg',
      social: [
        { icon: <FaLinkedin />, url: '#' },
        { icon: <FaTwitter />, url: '#' },
        { icon: <FaEnvelope />, url: '#' }
      ]
    }
  ];

  const advisors = [
    {
      name: '마사토 요시다',
      position: '기술 고문',
      bio: '일본 최대 성인 콘텐츠 제작사 전 CTO로, 20년 이상의 업계 경험을 보유. 기술 전략과 일본 시장 진출에 조언을 제공합니다.',
      image: '/images/placeholder-profile.jpg'
    },
    {
      name: '최영철',
      position: '투자 고문',
      bio: '벤처 캐피탈리스트로 성인 테크 및 엔터테인먼트 분야에서 다수의 성공적인 투자 경험을 보유. 자금 조달 및 사업 확장 전략을 지원합니다.',
      image: '/images/placeholder-profile.jpg'
    },
    {
      name: '스테이시 왕',
      position: '글로벌 마케팅 고문',
      bio: '글로벌 성인 콘텐츠 플랫폼 마케팅 전문가로, 아시아 및 북미 시장에서의 브랜드 전략 수립에 조언을 제공합니다.',
      image: '/images/placeholder-profile.jpg'
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
            <span className="gradient-text">팀 </span>
            소개
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            세라는 하드웨어, 소프트웨어, 콘텐츠 비즈니스 분야의 전문가들로 구성된 
            다양한 배경의 팀을 갖추고 있습니다. 우리의 열정과 전문성으로 
            디지털 성인 경험의.새로운 표준을 만들어갑니다.
          </p>
        </motion.div>

        {/* 경영진 */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">핵심 경영진</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.slice(0, 4).map((member, index) => (
              <motion.div
                key={member.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUpVariants}
                className="bg-dark rounded-xl overflow-hidden hover-scale"
              >
                <div className="aspect-square bg-dark-light">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/30 to-secondary/30">
                    <p className="text-xl font-medium gradient-text">{member.name}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                  <p className="text-primary font-medium mb-4">{member.position}</p>
                  <p className="text-gray-300 text-sm mb-6">{member.bio}</p>
                  
                  <div className="flex space-x-4">
                    {member.social.map((social, i) => (
                      <a
                        key={i}
                        href={social.url}
                        className="text-gray-400 hover:text-primary transition-colors duration-300"
                        aria-label="소셜 미디어"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 팀원 */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">주요 팀원</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.slice(4).map((member, index) => (
              <motion.div
                key={member.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUpVariants}
                className="bg-dark p-6 rounded-xl border border-gray-800 hover-scale"
              >
                <div className="flex items-center mb-4 space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                    <p className="text-white font-medium">{member.name.charAt(0)}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">{member.name}</h4>
                    <p className="text-primary text-sm">{member.position}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                
                <div className="flex space-x-3">
                  {member.social.map((social, i) => (
                    <a
                      key={i}
                      href={social.url}
                      className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                      aria-label="소셜 미디어"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 자문단 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">자문단</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark p-6 rounded-xl border border-gray-800 hover-scale"
              >
                <div className="flex items-center mb-4 space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                    <p className="text-white font-medium">{advisor.name.charAt(0)}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">{advisor.name}</h4>
                    <p className="text-primary text-sm">{advisor.position}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm">{advisor.bio}</p>
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
            <p className="text-gray-300 mb-6">
              성장하는 세라 팀에 합류하여 함께 혁신을 만들어 나갈 인재를 찾고 있습니다.
            </p>
            <button className="btn btn-primary">
              채용 정보 보기
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;