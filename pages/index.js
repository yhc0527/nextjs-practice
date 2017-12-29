import Layout from '../components/Layout'
import Head from 'next/head'

const Index = () => (
    <Layout>
        <Head>
            <title>
                React with Next.js Page
            </title>
        </Head>
        <h1>
            Hello, Next.js
        </h1>
        <h2>
            <a href="/about">
                <div style={{background: 'black', color: 'white'}}>About</div>
            </a>
        </h2>
    </Layout>
);

export default Index;