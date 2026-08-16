import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

const content = {
  en: {
    description: 'AIhub official docs, a unified access guide for AI model routing.',
  },
  zh: {
    description: 'AIhub 官方文档，一站式 AI 模型中转平台接入指南。',
  },
} as const;

export default function Home(): ReactNode {
  const { siteConfig, i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale as keyof typeof content;
  const pageContent = content[locale] ?? content.en;

  return (
    <Layout title={`${siteConfig.title}`} description={pageContent.description}>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
