import Layout from '../layouts/Main';
import Footer from '../components/footer';
import Storecrumb from '../components/storecrumb/index';
import BrandsContent from './../components/brands-content/index';

const Stores = () => (
  <Layout>
    <Storecrumb />
    <section className="products-page">
      <div className="container">
        <BrandsContent />
      </div>
    </section>
    <Footer />
  </Layout>
)
  
export default Stores
  