import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

/* Import components */
import * as Actions from '../redux/actions';
import County from './County.jsx';
import Title from './Title.jsx';
import Legend from './Legend.jsx';
import Hint from './Hint.jsx';
import Footer from './Footer.jsx';
import Caption from './Caption.jsx';


const mapStateToProps = (state) => ({
    TWCounty: state.TWCounty
});

// Store current county level
const countyLevel = new Array(22);
for (var i = 0; i < countyLevel.length; ++i)
    countyLevel[i] = 0;

class Map extends Component {
    constructor(props){
        super(props);
        this.state = {
            totalLevel: 0,
            hint: ''
        };
        this.updateHint = this.updateHint.bind(this);
        this.updateTotalLevel = this.updateTotalLevel.bind(this);
    }

    // Update current hint
    updateHint(data) {
        this.setState(prevState => {
            return {
                hint: data
            }
        });
    }

    // Update current total level
    updateTotalLevel(data) {
        this.setState(prevState => {
            return {
                totalLevel: prevState.totalLevel + data
            }
        });
    }

    render() {
        var counties = [];
        if (this.props.TWCounty.features) {
            for (var county in this.props.TWCounty.features) {
                counties.push(
                    <County 
                        county={this.props.TWCounty.features[county]}
                        index={county }
                        key={'county' + county}
                        updateHint={this.updateHint}
                        updateTotalLevel={this.updateTotalLevel} />
                );
            }
        }

        let style_map = {
            fill: '#B4DEF7'
        };
    
        return (
            <div>
                <Caption />
                <div className="default">
                    <div className="map">
                        <Hint county={this.state.hint} />
                        <svg
                            id='map'
                            version='1.0'
                            xmlns='http://www.w3.org/2000/svg'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            xmlSpace="preserve"
                            x='0px'
                            y='0px'
                            viewBox='0 0 750 1124'
                            style={{
                                enableBackground: "new 0 0 750 1124"
                            }}>
                            <rect 
                                x="-0.2" 
                                y="0"
                                height="1124"
                                width="750"
                                style={style_map} />
                            <Title totalLevel={this.state.totalLevel} />
                            <Legend />
                            <g id='taiwan'>
                                { counties }
                            </g>
                        </svg>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

var mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Actions, dispatch)
}
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Map))  