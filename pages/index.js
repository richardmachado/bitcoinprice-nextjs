

import Layout from '../components/Layout';
import Prices from '../components/Prices';

const Index = (props) => (
    <Layout>
        <div>

  <Prices bpi = {props.bpi} />
        </div>
    </Layout>
);


export default Index