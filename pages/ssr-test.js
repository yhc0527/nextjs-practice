import Layout from '../components/Layout';

class SSRTest extends React.Component {
    static async getInitialProps ({req}) {
        return req
            ? { from: 'server' }
            : {from: 'client'};
    }

    render() {
        return (
          <Layout>
              <div>This page rendered by {this.props.from} !!</div>
          </Layout>
        );
    }
}

export default SSRTest