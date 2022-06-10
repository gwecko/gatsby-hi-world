import * as React from 'react';
import Layout from '../components/layout';

const ArticlePage = () => {
    return (
        <Layout pageTitle="Article">
            <p>What's the weather gonna be <span role="img" aria-label='Feeling stressed emoji'>😮‍💨</span></p>
        </Layout>
    )
}

export default ArticlePage;