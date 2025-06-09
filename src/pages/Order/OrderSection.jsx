import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import { useState } from 'react';
import OrderCard from './OrderCard';
import "./Order.css"

const OrderSection = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [menus, loadingData] = useMenu();
    const drinksMenus = menus?.filter(item => item.category === "drinks")
    const dessertMenus = menus?.filter(item => item.category === "dessert")
    const pizzaMenus = menus?.filter(item => item.category === "pizza")
    const saladMenus = menus?.filter(item => item.category === "salad")
    const soupMenus = menus?.filter(item => item.category === "soup")

    return (
        <div className='my-5 flex justify-center px-2 max-w-screen-2xl mx-auto'>
            <Tabs>
                <TabList
                    className="flex justify-center my-6 space-x-6 font-medium text-xl"
                    defaultindex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                    <OrderCard menus={saladMenus} />
                </TabPanel>
                <TabPanel>
                    <OrderCard menus={pizzaMenus} />
                </TabPanel>
                <TabPanel>
                    <OrderCard menus={soupMenus} />
                </TabPanel>
                <TabPanel>
                    <OrderCard menus={dessertMenus} />
                </TabPanel>
                <TabPanel>
                    <OrderCard menus={drinksMenus} />
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default OrderSection