import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Home" description="NXCodes Game Engine Documentation">
      <main style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '70vh', textAlign: 'center', padding: '2rem'}}>
        <h1 style={{fontSize: '3rem', marginBottom: '1rem'}}>{siteConfig.title}</h1>
        <p style={{fontSize: '1.5rem', color: '#888', marginBottom: '2rem'}}>{siteConfig.tagline}</p>
        <Link
          className="button button--primary button--lg"
          to="/docs/intro">
          Get Started →
        </Link>
      </main>
    </Layout>
  );
}
