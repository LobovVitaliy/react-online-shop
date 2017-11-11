import React, { Component } from 'react';
import './index.scss';

import Card from '../../components/Card';

const cards = [
    {
        img: require('../../../static/images/1.png'),
        title: 'Apple MacBook Pro',
        text: 'Core i5 - (8 GB/128 GB SSD/OS X Yosemite) MF839...',
        price: '93,990'
    },
    {
        img: require('../../../static/images/2.png'),
        title: 'Acer Aspire R3',
        text: 'Pentium Quad Core 4th Gen - (4 GB/500 GB HDD/Windo...',
        price: '24,990'
    },
    {
        img: require('../../../static/images/3.png'),
        title: 'Micromax Canvas II',
        text: '(WIFI) Atom 4th Gen - (2 GB/32 GB EMMC ...',
        price: '9,999'
    },
    {
        img: require('../../../static/images/4.png'),
        title: 'Acer One 10 Atom',
        text: '5th Gen - (2 GB/32 GB EMMC Storage/Windows 10 Ho...',
        price: '13,990'
    },
    {
        img: require('../../../static/images/5.png'),
        title: 'Acer E15 Celeron',
        text: 'Dual Core 4th Gen - (2 GB/500 GB HDD/Linux) UN.M...',
        price: '15,490'
    },
];

class Content extends Component {
    render() {
        return (
            <div className='row content'>
                {cards.map((card, i) =>
                    <div className='col-lg-4' key={i}>
                        <Card card={card }/>
                    </div>
                )}
            </div>
        );
    }
}

export default Content;