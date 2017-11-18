import React, { Component } from 'react';
import './index.scss';

import Card from '../../components/Card';

const cards = [
    {
        img: require('../../../static/images/1.jpg'),
        title: 'Apple MacBook Pro',
        text: 'Core i5 - (8 GB/128 GB SSD/OS X Yosemite) MF839...',
        price: '93,990'
    },
    {
        img: require('../../../static/images/2.jpg'),
        title: 'Acer Aspire R3',
        text: 'Pentium Quad Core 4th Gen - (4 GB/500 GB HDD/Windo...',
        price: '24,990'
    },
    {
        img: require('../../../static/images/3.jpeg'),
        title: 'Micromax Canvas II',
        text: '(WIFI) Atom 4th Gen - (2 GB/32 GB EMMC ...',
        price: '9,999'
    },
    {
        img: require('../../../static/images/4.jpg'),
        title: 'Acer One 10 Atom',
        text: '5th Gen - (2 GB/32 GB EMMC Storage/Windows 10 Ho...',
        price: '13,990'
    },
    {
        img: require('../../../static/images/5.jpeg'),
        title: 'Acer E15 Celeron',
        text: 'Dual Core 4th Gen - (2 GB/500 GB HDD/Linux) UN.M...',
        price: '15,490'
    },
];

class Content extends Component {
    render() {
        return (
            <div className='row content'>
                {cards.map((card, i) => (
                    <div className='card-col' key={i}>
                        <Card card={card} />
                    </div>
                ))}
            </div>
        );
    }
}

export default Content;