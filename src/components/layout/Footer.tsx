import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-light py-16">
      <div className="container-custom px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">세라 IR</h3>
            <p className="text-gray-300">
              디지털 성인 경험의 혁신을 선도하는 (주)세라는 하드웨어와 콘텐츠를 실시간으로 연결하여 이전에는 불가능했던 사이버 섹스의 실시간 상호작용을 가능하게 합니다.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-4">바로가기</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-secondary transition-colors duration-300">
                  홈
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-gray-300 hover:text-secondary transition-colors duration-300">
                  기술
                </Link>
              </li>
              <li>
                <Link href="/business" className="text-gray-300 hover:text-secondary transition-colors duration-300">
                  비즈니스 모델
                </Link>
              </li>
              <li>
                <Link href="/partnership" className="text-gray-300 hover:text-secondary transition-colors duration-300">
                  파트너십
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-secondary transition-colors duration-300">
                  회사 소개
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-4">법적 고지</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-secondary transition-colors duration-300">
                  개인정보 처리방침
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-secondary transition-colors duration-300">
                  이용약관
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-300 hover:text-secondary transition-colors duration-300">
                  쿠키 정책
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-300 hover:text-secondary transition-colors duration-300">
                  면책 조항
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-4">연락처</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-primary" />
                <span className="text-gray-300">서울특별시 강남구 테헤란로 123</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-primary" />
                <span className="text-gray-300">02-123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-primary" />
                <span className="text-gray-300">info@sera-ir.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn btn-primary">문의하기</button>
            </div>
          </motion.div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} (주)세라. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            성인 콘텐츠 관련 서비스로 만 19세 이상만 이용 가능합니다.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;