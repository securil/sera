import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Montserrat:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta name="theme-color" content="#121212" />
          <meta name="description" content="(주)세라 - 새로운 디지털 성인 경험의 혁신" />
          <meta property="og:title" content="(주)세라 IR" />
          <meta
            property="og:description"
            content="세라는 하드웨어와 콘텐츠를 실시간으로 연결하여 이전에는 불가능했던 '사이버 섹스의 실시간 상호작용'을 가능하게 하는 디지털 성인 체험 플랫폼입니다."
          />
          <meta property="og:type" content="website" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;