import React, { Component } from 'react';


const mapStateToProps = (state) => ({
    TWCounty: state.TWCounty
});

class Title extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let style_title = {
            fill: '#333333',
            fontSize: '50px',
            fontWeight: 'bold',
            textDecoration: 'underline'
        };
        let style_subtitle = {
            fill: '#333333',
            fontSize: '30px'
        };

        return (
            <text transform="matrix(1 0 0 1 46.5859 91.9209)">
                <tspan 
                    x="0" 
                    y="0" 
                    style={style_title}>
                    TaiwanEX
                </tspan>
                <tspan 
                    x="0" 
                    y="37.5" 
                    style={style_subtitle}>
                    制縣等級
                </tspan>
                <tspan 
                    id="level"
                    x="130"
                    y="37.5" 
                    style={style_subtitle}>
                    { this.props.totalLevel }
                </tspan>
            </text>
        );
    }
}
export default Title;