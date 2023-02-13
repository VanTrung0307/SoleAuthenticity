import Layout from '../layouts/Main';
import Footer from '../components/footer';
import StoresContent from './../components/stores-content/index';
import Storecrumb from './../components/storecrumb/index';

const Stores = () => (
  <Layout>
    <Storecrumb />
    <section className="products-page">
      <div className="container">
        <StoresContent />
      </div>
    </section>
    <Footer />
  </Layout>
)
  
export default Stores
  