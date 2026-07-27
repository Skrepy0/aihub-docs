import React, { JSX } from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function HomepageFeatures(): JSX.Element {
  const logoUrl = '/img/logo.png';

  const features = [
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
  ];

  return (
    <section className={styles.container}>
      <img src={logoUrl} alt="AIhub Logo" className={styles.logo} />

      <Heading as="h1" className={styles.title}>
        AIhub
      </Heading>

      <p className={styles.description}>
        基于 New-API 构建的一站式 AI 模型中转平台，
        <br />
        聚合多厂商 API，提供统一、稳定、高速的接入服务，
        <br />
        让开发者专注业务创新，轻松集成 AI 能力。
      </p>

      <div className={styles.buttonGroup}>
        <a href="/docs/intro" className={styles.primaryButton}>
          快速开始
        </a>
        <a href="https://github.com" className={styles.secondaryButton}>
          GitHub
        </a>
      </div>

      <div className={styles.cards}>
        {features.map((item, idx) => (
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
