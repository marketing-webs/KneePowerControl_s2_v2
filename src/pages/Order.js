import React from 'react';
import { Helmet } from 'react-helmet'
import OrderPage from '../components/OrderPage/OrderPage';

const Order = () => {
    return (
        <div>
            <Helmet title="Zamów Knee Power Control!" defer={false}>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
                />
                <meta
                    name="description"
                    content="Knee Power Pad Control odmieni Twoje życie na zawsze!"
                />
                <html lang="pl" />
                <meta charSet="utf-8" />
            </Helmet>
            <OrderPage />
        </div>
    );
};

export default Order;


