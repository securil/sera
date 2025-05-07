import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/20 via-dark to-secondary-dark/20 animate-gradient-xy" />
      </div>
      
      {/* 콘텐츠 */}
      <div className="container-custom px-4 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="gradient-text">새로운 디지털 성인 경험</span>의 <br />
              혁신을 선도합니다
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              (주)세라는 하드웨어와 콘텐츠를 실시간으로 연결하여 이전에는 불가능했던 
              "사이버 섹스의 실시간 상호작용"을 가능하게 하는 디지털 성인 체험 플랫폼을 개발하고 있습니다.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button className="btn btn-primary hover-scale">
                플랫폼 알아보기
              </button>
              <button className="btn btn-outline hover-scale">
                META TOY 기술 소개
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* 여기에는 나중에 제품 이미지나 3D 모델을 추가할 수 있습니다 */}
            <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-md flex items-center justify-center">
              <p className="text-xl font-medium gradient-text">META TOY 제품 이미지</p>
            </div>
            
            {/* 부유하는 장식 요소들 */}
            <motion.div
              className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
              animate={{ 
                y: [0, 15, 0],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="absolute -bottom-5 -left-5 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"
              animate={{ 
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </div>
      </div>
      
      {/* 스크롤 다운 인디케이터 */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.div 
          className="w-8 h-14 rounded-full border-2 border-white/30 flex justify-center pt-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut"
          }}
        >
          <motion.div 
            className="w-1 h-3 bg-white/60 rounded-full"
            animate={{ 
              height: [12, 6, 12],
              opacity: [0.6, 0.3, 0.6]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;