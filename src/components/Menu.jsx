import React, { Component } from 'react';

class Menu extends Component {
    constructor() {
        super();
        
    }

    render() {
        return (
            <div id="menu">
                <div class="row menuItem menuTitle">
                    <p id="menuTitle">
                        { this.props.title }
                    </p>
                </div>
                <div class="row menuItem menuButton red-border" id="lv5">
                    <p>久居 (超過三年)</p>
                </div>
                <div class="row menuItem menuButton yellow-border" id="lv3">
                    <p>居住 (一年以上)</p>
                </div>
                <div class="row menuItem menuButton green-border" id="lv2">
                    <p>短居 (一個月以上)</p>
                </div>
                <div class="row menuItem menuButton blue-border" id="lv1">
                    <p>旅遊</p>
                </div>
                <div class="row menuItem menuButton" id="lv0">
                    <p>沒去過</p>
                </div>
            </div>
        );
    }
}
export default Menu;