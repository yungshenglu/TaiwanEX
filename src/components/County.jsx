import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { geoMercator, geoPath } from 'd3-geo';

/* Import components */
import * as Actions from '../redux/actions';

const mapStateToProps = (county, ownProps) => ({
    county: ownProps.county,
    index: ownProps.index
});

// Define color for each level of county
const countyColor = ['gainsboro', '#adfcad', '#ffcb40', '#ff7d73', '#ff4e40'];

class County extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            level: 0
        };
    }

    handleMarkerEnter() {
        this.props.updateHint(this.props.county.properties.name_traditional_chinese);
        this.setState({
            hover: true
        });
    }

    handleMarkerLeave() {
        this.props.updateHint('');
        this.setState({
            hover: false
        });
    }

    handleMarkerClick() {
        // Add level in current clicked county
        if (this.state.level < 4) {
            this.state.level += 1;
            this.props.updateTotalLevel(1);
        } else {
            this.state.level = 0;
            this.props.updateTotalLevel(-4);
        }

        this.setState({
            hover: true
        });        
    }

    projection() {
        return geoMercator()
            .center([121, 23, 5])
            .scale(12000)
            .translate([440, 730]);
    }

    render() {
        var inputs = {
            stateBoundaries: {
                style: {
                    cursor: 'default'
                },
                key: `path-${ this.props.index }`,
                d: geoPath().projection(this.projection())(this.props.county),
                fill: countyColor[this.state.level], 
                stroke:  '#000000',
                strokeWidth: this.state.hover ? 2.5 : 0.5, 
                onClick: () => this.handleMarkerClick(), 
                onMouseEnter: () => this.handleMarkerEnter(),
                onMouseLeave: () => this.handleMarkerLeave()
            }
        };

        return (
            <path { ...inputs.stateBoundaries } />
        );
    }
}

var mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Actions, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(County));
