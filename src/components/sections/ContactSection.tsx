import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFax, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-primary text-2xl" />,
      title: '주소',
      content: '서울특별시 강남구 테헤란로 123 세라빌딩 8층',
      link: 'https://maps.google.com'
    },
    {
      icon: <FaPhone className="text-primary text-2xl" />,
      title: '전화',
      content: '02-123-4567',
      link: 'tel:02-123-4567'
    },
    {
      icon: <FaEnvelope className="text-primary text-2xl" />,
      title: '이메일',
      content: 'info@sera-ir.com',
      link: 'mailto:info@sera-ir.com'
    },
    {
      icon: <FaFax className="text-primary text-2xl" />,
      title: '팩스',
      content: '02-123-4568',
      link: 'tel:02-123-4568'
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedin size={24} />, url: '#', name: 'LinkedIn' },
    { icon: <FaTwitter size={24} />, url: '#', name: 'Twitter' },
    { icon: <FaInstagram size={24} />, url: '#', name: 'Instagram' }
  ];

  const inquiryTypes = [
    '일반 문의',
    '투자 문의',
    '파트너십 문의',
    '채용 문의',
    '미디어 문의',
    '기타'
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
            <span className="gradient-text">연락처 </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            세라에 관심을 가져주셔서 감사합니다. 문의 사항이 있으시면 아래 양식을 통해 
            연락해 주시거나, 직접 연락처로 연락해 주시기 바랍니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 연락처 정보 및 지도 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center p-4 bg-dark rounded-lg hover:bg-gray-800 transition-colors duration-300"
                  >
                    <div className="mr-4 p-3 bg-dark-light rounded-full">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="p-6 bg-dark rounded-xl border border-gray-800"
              >
                <h4 className="text-xl font-bold mb-4">업무 시간</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-300">월요일 - 금요일:</span>
                    <span className="text-white">오전 9시 - 오후 6시</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">토요일:</span>
                    <span className="text-white">오전 10시 - 오후 2시</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">일요일:</span>
                    <span className="text-white">휴무</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="aspect-video bg-dark rounded-xl overflow-hidden flex items-center justify-center"
              >
                <p className="text-xl font-medium gradient-text">지도 위치</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex justify-center space-x-6"
              >
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-dark rounded-full hover:bg-primary/20 transition-colors duration-300 text-gray-300 hover:text-white"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
          
          {/* 문의 양식 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-dark p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-8 gradient-text">문의하기</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      이름
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-dark-light border border-gray-700 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                      placeholder="홍길동"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      이메일
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-dark-light border border-gray-700 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">
                    제목
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-dark-light border border-gray-700 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                    placeholder="문의 제목을 입력해주세요"
                  />
                </div>
                
                <div>
                  <label htmlFor="type" className="block text-gray-300 mb-2">
                    문의 유형
                  </label>
                  <select
                    id="type"
                    className="w-full bg-dark-light border border-gray-700 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                  >
                    <option value="" disabled selected>문의 유형을 선택해주세요</option>
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    메시지
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full bg-dark-light border border-gray-700 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                    placeholder="문의 내용을 입력해주세요"
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
                  문의 보내기
                </motion.button>
              </form>
              
              <div className="mt-8 pt-6 border-t border-gray-800">
                <p className="text-gray-400 text-sm">
                  * 문의하신 내용은 영업일 기준 2일 이내에 답변 드리겠습니다.
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  * 성인 인증이 필요한 콘텐츠 관련 문의는 성인 인증 후 가능합니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;