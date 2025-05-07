import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBatteryThreeQuarters, FaWifi, FaMobileAlt, FaBluetoothB } from 'react-icons/fa';

const TechSpecsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  
  const tabs = [
    { name: '하드웨어 사양', icon: <FaBatteryThreeQuarters /> },
    { name: '연결성', icon: <FaWifi /> },
    { name: '호환성', icon: <FaMobileAlt /> },
    { name: '부가 기능', icon: <FaBluetoothB /> }
  ];
  
  const tabContents = [
    {
      title: '하드웨어 사양',
      specs: [
        { label: '크기', value: '170 x 80 x 60 mm' },
        { label: '무게', value: '230g' },
        { label: '배터리 수명', value: '최대 6시간 (사용 강도에 따라 다름)' },
        { label: '충전 시간', value: '약 90분 (고속 충전)' },
        { label: '방수 등급', value: 'IPX7 (일시적인 침수에 견딤)' },
        { label: '모터 수', value: '12개의 고정밀 듀얼 모터' },
        { label: '재질', value: '의료용 실리콘 및 ABS 플라스틱' },
        { label: '센서', value: '압력, 온도, 가속도 센서 탑재' }
      ]
    },
    {
      title: '연결성',
      specs: [
        { label: '블루투스', value: 'Bluetooth 5.2 지원' },
        { label: 'Wi-Fi', value: 'Wi-Fi 6 (802.11ax) 지원' },
        { label: '유효 거리', value: '최대 15m (장애물 없는 환경)' },
        { label: '지연 시간', value: '15ms 이하 (최적 환경)' },
        { label: '데이터 전송 속도', value: '최대 25Mbps' },
        { label: '암호화', value: 'AES-256 암호화' },
        { label: '앱 연결', value: 'iOS 14.0+ / Android 10.0+' },
        { label: '동시 연결', value: '최대 2대 기기 동시 연결 가능' }
      ]
    },
    {
      title: '호환성',
      specs: [
        { label: '지원 OS', value: 'Windows 10+, macOS 10.15+, iOS 14.0+, Android 10.0+' },
        { label: '브라우저 지원', value: 'Chrome 90+, Firefox 88+, Safari 14+, Edge 90+' },
        { label: '콘텐츠 파트너', value: 'DMM, SOD, FC2 및 주요 스트리밍 플랫폼' },
        { label: '화상 통화 연동', value: 'Zoom, Teams, FaceTime 등과 호환 가능' },
        { label: '스트리밍 연동', value: 'OBS, Streamlabs 등 방송 소프트웨어 연동 지원' },
        { label: 'VR 호환성', value: 'Oculus Quest 2, HTC Vive, Valve Index 지원' },
        { label: 'API 지원', value: '개발자용 API 및 SDK 제공' },
        { label: '언어 지원', value: '한국어, 영어, 일본어, 중국어, 스페인어 등 8개 언어' }
      ]
    },
    {
      title: '부가 기능',
      specs: [
        { label: 'AI 패턴 학습', value: '사용자 선호도에 따른 맞춤형 패턴 생성' },
        { label: '음성 제어', value: '핸즈프리 조작을 위한 음성 명령 지원' },
        { label: '실시간 번역', value: '라이브 스트리밍 중 실시간 언어 번역 기능' },
        { label: '프라이버시 모드', value: '모든 데이터 로컬 처리 옵션' },
        { label: '패턴 공유', value: '커뮤니티 패턴 공유 및 다운로드' },
        { label: '원격 제어', value: '파트너에게 제어 권한 부여 가능' },
        { label: '자동 펌웨어 업데이트', value: '무선 OTA 업데이트 지원' },
        { label: '에너지 절약 모드', value: '미사용 시 자동 절전 모드 전환' }
      ]
    }
  ];
  
  return (
    <section className="section bg-dark relative overflow-hidden">
      {/* 배경 효과 */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">기술 </span>
            사양
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            META TOY의 상세 사양을 확인하세요. 최고의 성능과 안정성을 갖춘 하드웨어가
            새로운 차원의 실감형 경험을 제공합니다.
          </p>
        </motion.div>
        
        {/* 탭 네비게이션 */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === index 
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'bg-dark-light text-gray-300 hover:bg-gray-800'
              }`}
              onClick={() => setActiveTab(index)}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.name}
            </motion.button>
          ))}
        </div>
        
        {/* 탭 콘텐츠 */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-dark-light p-8 rounded-2xl border border-gray-800"
        >
          <h3 className="text-2xl font-bold mb-8 gradient-text">
            {tabContents[activeTab].title}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tabContents[activeTab].specs.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex justify-between items-center p-4 bg-dark rounded-lg border border-gray-800"
              >
                <span className="text-gray-300 font-medium">{spec.label}</span>
                <span className="text-white font-semibold">{spec.value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* 제품 이미지 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block relative">
            <div className="w-full max-w-3xl mx-auto aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-gray-800">
              <p className="text-xl font-medium gradient-text">META TOY 제품 이미지 갤러리</p>
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
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <button className="btn btn-primary mx-2">
              사전 예약하기
            </button>
            <button className="btn btn-outline mx-2">
              기술 문서 다운로드
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechSpecsSection;