import React, { JSX } from 'react';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

const content = {
  en: {
    title: 'AIhub',
    description:
      'A one-stop AI model routing platform built on New-API.\nAggregate multi-vendor APIs and provide a unified, stable, and fast access layer so developers can focus on product innovation.',
    primaryButton: 'Docs',
    secondaryButton: 'Official Site',
    features: [
      {
        icon: '🚀',
        title: 'Unified Access',
        desc: 'Connect OpenAI, Anthropic, Google, Azure, and other major model providers through one gateway.\nIntegrate once, use everywhere.',
      },
      {
        icon: '⚡',
        title: 'Fast Response',
        desc: 'High-concurrency architecture with low latency and automatic failover to keep services highly available.',
      },
      {
        icon: '🔒',
        title: 'Secure & Reliable',
        desc: 'Encrypted API key transmission, audit logs, and permission control for enterprise-grade reliability.',
      },
    ],
  },
  zh: {
    title: 'AIhub',
    description:
      '基于 New-API 构建的一站式 AI 模型中转平台，\n聚合多厂商 API，提供统一、稳定、高速的接入服务，\n让开发者专注业务创新，轻松集成 AI 能力。',
    primaryButton: '使用文档',
    secondaryButton: 'AIhub 官网',
    features: [
      {
        icon: '🚀',
        title: '聚合接入',
        desc: '基于 New-API 统一接入 OpenAI、Anthropic、Google、Azure 等\n主流大模型，一次集成，随处调用。',
      },
      {
        icon: '⚡',
        title: '极速响应',
        desc: '高并发架构设计，毫秒级延迟，\n自动故障切换，保障业务高可用。',
      },
      {
        icon: '🔒',
        title: '安全可靠',
        desc: 'API 密钥加密传输，支持审计日志与权限控制，\n企业级 SLA 承诺，让您后顾无忧。',
      },
    ],
  },
} as const;

export default function HomepageFeatures(): JSX.Element {
  const { i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale as keyof typeof content;
  const pageContent = content[locale] ?? content.en;
  const logoUrl = '/img/logo.png';
  const docsHref = '/docs/quickstart/';
  const officialHref = 'https://aihub.skrepy.dpdns.org/';

  return (
    <section className={styles.container}>
      <img src={logoUrl} alt="AIhub Logo" className={styles.logo} />

      <Heading as="h1" className={styles.title}>
        {pageContent.title}
      </Heading>

      <p className={styles.description}>{pageContent.description}</p>

      <div className={styles.buttonGroup}>
        <a href={docsHref} className={styles.primaryButton}>
          {pageContent.primaryButton}
        </a>
        <a href={officialHref} className={styles.secondaryButton}>
          {pageContent.secondaryButton}
        </a>
      </div>

      <div className={styles.cards}>
        {pageContent.features.map((item, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.cardIcon}>{item.icon}</div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDesc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
