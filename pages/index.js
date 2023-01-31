import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

// import useRouter from 'next/router';

import Link from 'next/link';

import Date from '../components/date';

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I am Ranjan Mangla. A Web Devloper, Open Source Enthusiast, and a designer. Here, You will get to know abut my experiences and learnings on this blog. Stay tuned to not miss any update.</p>
        <p>
          (This is my blog. I have used next.js here. I learnt to use it on{' '}
          <a href="https://nextjs.org/learn">the Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <u1 className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`posts/${id}`}>
                {title}
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </u1>
      </section>
    </Layout>
  );
}
