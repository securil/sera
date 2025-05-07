import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

const PartnershipCallSection: React.FC = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-primary text-2xl" />,
      title: '이메일',
      content: 'partnership@sera-ir.com',
      link: 'mailto:partnership@sera-ir.com'
    },
    {
      icon: <FaPhone className="text-primary text-2xl" />,
      title: '전화',
      content: '+82-2-123-4567',
      link: 'tel:+82-2-123-4567'
    },
    {
      icon: <FaMapMarkerAlt className="text-primary text-2xl" />,
      title: '주소',
      content: '서울특별시 강남구 테헤란로 123',
      link: 'https://maps.google.com'
    },
    {
      icon: <FaGlobe className="text-primary text-2xl" />,
      title: '웹사이트',
      content: 'www.sera-ir.com',
      link: 'https://www.sera-ir.com'
    }
  ];

  const partnershipTypes = [
    {
      title: '콘텐츠 제작사',
      description: '귀사의 콘텐츠를 META TOY와 연동하여 새로운 경험을 제공하세요.',
      benefits: [
        '콘텐츠 수익 추가 창출',
        'META TOY 사용자 접근성',
        '실시간 데이터 분석',
        '마케팅 지원'
      ]
    },
    {
      title: '스트리머 & 인플루언서',
      description: '팬들과 새로운 방식으로 소통하고 수익을 창출하세요.',
      benefits: [
        '팬과의 실시간 상호작용',
        '새로운 수익 모델',
        '독점 콘텐츠 제작 지원',
        'META TOY 무료 제공'
      ]
    },
    {
      title: '플랫폼 & 유통사',
      description: '귀사의 플랫폼에 META TOY를 통합하여 사용자 경험을 향상시키세요.',
      benefits: [
        'API 및 SDK 지원',
        '하드웨어 유통 수익',
        '공동 마케팅 기회',
        '독점 프로모션'
      ]
    },
    {
      title: '투자자 & 비즈니스 파트너',
      description: '성장하는 디지털 성인 산업에 함께 투자하고 성장하세요.',
      benefits: [
        '고성장 시장 기회',
        '혁신적인 비즈니스 모델',
        '글로벌 확장 계획',
        '다각화된 수익 구조'
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
            <span className="gradient-text">파트너십 </span>
            문의
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            세라와 함께 새로운 디지털 성인 경험의 미래를 만들어갈 파트너를 찾고 있습니다.
            아래 정보를 통해 파트너십 문의를 진행해주세요.
          </p>
        </motion.div>

        {/* 파트너십 유형 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {partnershipTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-light p-8 rounded-xl hover-scale border border-gray-800"
            >
              <h3 className="text-xl font-bold mb-4 gradient-text">{type.title}</h3>
              <p className="text-gray-300 mb-6">{type.description}</p>
              
              <h4 className="text-lg font-semibold mb-4">주요 혜택</h4>
              <ul className="space-y-2">
                {type.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* 문의 양식 및 연락처 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 연락처 정보 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-dark p-8 rounded-xl border border-gray-800 h-full">
              <h3 className="text-2xl font-bold mb-8 gradient-text">연락처</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 bg-dark-light rounded-lg hover:bg-gray-800 transition-colors duration-300"
                  >
                    <div className="p-3 bg-dark rounded-full">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">{info.title}</h4>
                      <p className="text-gray-300">{info.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg"
              >
                <h4 className="text-lg font-semibold mb-2">업무 시간</h4>
                <p className="text-gray-300">월-금: 오전 9시 - 오후 6시</p>
                <p className="text-gray-300">토-일: 휴무</p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* 문의 양식 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-dark p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-8 gradient-text">파트너십 문의하기</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      이름 / 담당자명
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-dark-light border border-gray-700 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                      placeholder="홍길동"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-gray-300 mb-2">
                      회사명 / 소속
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full bg-dark-light border border-gray-700 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                      placeholder="(주)예시기업"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      이메일
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-dark-light border border-gray-700 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                      placeholder="example@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-300 mb-2">
                      연락처
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full bg-dark-light border border-gray-700 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                      placeholder="010-1234-5678"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="partnership-type" className="block text-gray-300 mb-2">
                    파트너십 유형
                  </label>
                  <select
                    id="partnership-type"
                    className="w-full bg-dark-light border border-gray-700 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                  >
                    <option value="" disabled selected>파트너십 유형을 선택해주세요</option>
                    <option value="content">콘텐츠 제작사</option>
                    <option value="influencer">스트리머 & 인플루언서</option>
                    <option value="platform">플랫폼 & 유통사</option>
                    <option value="investor">투자자 & 비즈니스 파트너</option>
                    <option value="other">기타</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    문의 내용
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full bg-dark-light border border-gray-700 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                    placeholder="파트너십에 대한 문의 내용을 자세히 작성해주세요."
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="mr-2 accent-primary h-4 w-4"
                  />
                  <label htmlFor="privacy" className="text-gray-300 text-sm">
                    개인정보 수집 및 이용에 동의합니다.
                  </label>
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn btn-primary"
                >
                  문의하기
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipCallSection;