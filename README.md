# 세라(Sera) IR 프로젝트

새로운 디지털 성인 경험의 혁신을 위한 (주)세라 IR 웹사이트 프로젝트입니다.

## 프로젝트 개요

(주)세라는 하드웨어(META TOY)와 콘텐츠(AV, 라이브 스트리밍, 인플루언서 콘텐츠)를 실시간으로 연결하여 이전에는 불가능했던 "사이버 섹스의 실시간 상호작용"을 가능하게 하는 디지털 성인 체험 플랫폼을 개발하고 있습니다.

본 프로젝트는 세라의 IR 웹사이트로, 회사의 비전, 기술, 비즈니스 모델 및 파트너십 정보를 제공합니다.

## 기술 스택

- **프론트엔드**: React.js + Next.js (SSR 지원)
- **스타일링**: Tailwind CSS + Framer Motion (애니메이션)
- **배포**: GitHub Pages 또는 Vercel

## 현재까지 적용된 내용

### 프로젝트 구조
- 모듈화된 디렉토리 구조 설계
- Next.js 기본 설정 완료
- TypeScript 설정 완료
- Tailwind CSS 설정 및 사용자 정의 스타일 적용

### 컴포넌트
1. **레이아웃 컴포넌트**
   - 헤더 (반응형, 모바일 메뉴 지원)
   - 푸터 (회사 정보, 빠른 링크, 연락처 등)
   - 레이아웃 Wrapper

2. **섹션 컴포넌트**
   - HeroSection: 웹사이트의 첫 화면 섹션
   - BusinessSection: 시장 현황과 사용자 니즈 설명
   - TechnologySection: 기술적 장점과 META TOY 제품 소개

3. **페이지**
   - 메인 페이지(index.tsx)
   - 전역 스타일 및 설정(_app.tsx, _document.tsx)

### 디자인 및 UX
- 세라 브랜드 컬러 (퍼플, 핑크 그라데이션) 적용
- 모던하고 미래지향적인 디자인 적용
- Framer Motion을 활용한 애니메이션 효과 구현
- 반응형 디자인 구현
- 마우스 오버 효과 및 인터랙션 적용

## 앞으로 해야 할 내용

### 추가 페이지 개발
- 기술 페이지 (`/technology`)
- 비즈니스 모델 페이지 (`/business`)
- 파트너십 페이지 (`/partnership`)
- 회사 소개 페이지 (`/about`)
- 문의 페이지 (`/contact`)

### 추가 컴포넌트 개발
- 파트너십 섹션
- 팀 소개 섹션
- 투자 정보 섹션
- 컨택트 폼 컴포넌트
- 갤러리/제품 소개 컴포넌트

### 데이터 및 자산
- 실제 회사 로고 및 브랜드 이미지 추가
- META TOY 제품 이미지/3D 모델 추가
- 실제 비즈니스 데이터 및 내용 업데이트
- 팀원 정보 및 이미지 추가

### 기능 구현
- 문의 양식 기능 구현
- 다국어 지원 (한국어/영어/일본어)
- 이메일 뉴스레터 구독 기능
- SEO 최적화
- 성인인증 팝업 구현

### 테스트 및 배포
- 브라우저 호환성 테스트
- 성능 최적화
- 반응형 디자인 테스트
- 배포 파이프라인 구축
- 분석 도구(Google Analytics 등) 설정

## 실행 방법

1. 필요한 패키지 설치:
```bash
npm install
```

2. 개발 서버 실행:
```bash
npm run dev
```

3. 접속:
```
http://localhost:3000
```

## 배포

빌드 생성:
```bash
npm run build
```

정적 파일 생성(GitHub Pages 배포 시):
```bash
npm run export
```

## 기타 참고사항

- 모든 컴포넌트는 모듈화되어 있어 독립적으로 수정 가능
- 디자인 시스템은 Tailwind CSS 기반으로 tailwind.config.js에서 커스터마이징 가능
- 애니메이션은 Framer Motion 라이브러리를 사용하여 구현
- 성인 콘텐츠 관련 법적 고지 및 성인인증 시스템 구현 필요
