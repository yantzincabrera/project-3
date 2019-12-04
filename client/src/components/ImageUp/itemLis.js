import React from 'react';
import 'whatwg-fetch';
import classNames from 'classnames';
import ItemAdd from './ItemAdd.jsx';

export default class ItemList extends React.Component {
    constructor() {
        super();
        this.createItem = this.createItem.bind(this);
    }

    createItem(newItem) {
        console.log('PHOTO:', newItem.image);
        fetch('/api/item', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newItem),
        }).then(response => {
        }).catch(err => {
        });
    }

    render() {
        return (
            <div>
                <ItemAdd createItem={this.createItem} />
            </div>
        );
    }
}