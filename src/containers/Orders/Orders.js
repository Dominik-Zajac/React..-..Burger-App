import React, { Component } from 'react';

/* Components */
import Order from '../../components/Order/Order';

class Orders extends Component {
    state = {}
    render() {
        return (
            <div>
                <Order></Order>
                <Order></Order>
            </div>
        );
    }
}

export default Orders;