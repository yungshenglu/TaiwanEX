import React, { Component } from 'react';

/* Import data */
import level from '../assets/level.json';

class Legend extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let dataArr = [];
        Object.keys(level.data).forEach(function(key) {
            dataArr.push(level.data[key]);
        });

        let style_legend = {
            fill: '#FFFFFF'
        };

        let style_legendText = {
            fill: '#333333',
            fontSize: '20px'
        };

        let style_legendLevel = {
            fill: '#FFFFFF',
            fontSize: '25px'
        };

        return (
            <g>
                <rect 
                    height="75" 
                    width="700" 
                    x="23" 
                    y="1032"
                    rx="10"
                    ry="10"
                    style={style_legend} />
                
                <circle 
                    cx="69.3"
                    cy="1069.3" 
                    r="19"
                    fill="#FF4E40" />
                <text 
                    transform="matrix(1 0 0 1 62.3 1077.2633)" 
                    style={style_legendLevel}>4</text>
                <text 
                    transform="matrix(1 0 0 1 104.6665 1075.2633)" 
                    style={style_legendText}>久居</text>
                
                <circle 
                    cx="199" 
                    cy="1069.3"
                    r="19"
                    fill="#FF7D73" />
                <text 
                    transform="matrix(1 0 0 1 192 1077.2633)" 
                    style={style_legendLevel}>3</text>
                <text 
                    transform="matrix(1 0 0 1 233.336 1075.2623)"
                    style={style_legendText}>居住</text>
                
                <circle 
                    cx="328.7" 
                    cy="1069.3" 
                    r="19"
                    fill="#FFCB40" />
                <text 
                    transform="matrix(1 0 0 1 321.7 1077.2633)" 
                    style={style_legendLevel}>2</text>
                <text 
                    transform="matrix(1 0 0 1 362.0052 1075.2633)"
                    style={style_legendText}>短居</text>
                
                <circle 
                    cx="458.3" 
                    cy="1069.3" 
                    r="19"
                    fill="#ADFCAD" />
                <text 
                    transform="matrix(1 0 0 1 451.3 1077.2633)" 
                    style={style_legendLevel}>1</text>
                <text 
                    transform="matrix(1 0 0 1 490.6747 1075.2633)"
                    style={style_legendText}>旅遊</text>
                
                <circle 
                    cx="588" 
                    cy="1069.3" 
                    r="19"
                    fill="#DCDCDC" />
                <text 
                    transform="matrix(1 0 0 1 581 1077.2633)" 
                    style={style_legendLevel}>0</text>
                <text 
                    transform="matrix(1 0 0 1 619.3439 1075.2633)"
                    style={style_legendText}>沒去過</text>
            </g>
        );
    }
}
export default Legend;