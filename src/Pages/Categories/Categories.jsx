import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useAllProducts from '../../Hooks/useAllProducts';
import CategoryTabs from './CategoryTabs';

const Categories = () => {
  const [allProducts] = useAllProducts();

  const cosmetics = allProducts.filter(item => item.category === "cosmetics")
  const fashion = allProducts.filter(item => item.category === "fashion")
  const bag = allProducts.filter(item => item.category === "bag")
  const sunglass = allProducts.filter(item => item.category === "sunglass");

  return (
    <div className='pt-20'>
      <Tabs>
        <TabList>
          <Tab>Fashion</Tab>
          <Tab>Cosmetics</Tab>
          <Tab>Bags</Tab>
          <Tab>Sunglasses</Tab>
        </TabList>

        <TabPanel>
          <CategoryTabs items={fashion}></CategoryTabs>
        </TabPanel>

        <TabPanel>
          <CategoryTabs items={cosmetics}></CategoryTabs>
        </TabPanel>

        <TabPanel>
          <CategoryTabs items={bag}></CategoryTabs>
        </TabPanel>

        <TabPanel>
          <CategoryTabs items={sunglass}></CategoryTabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Categories;