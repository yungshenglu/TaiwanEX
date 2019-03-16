import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
                <a 
                    id="ref" 
                    href="https://zhung.com.tw/japanex/" 
                    target="_blank">
                    Refer To JapanEX
                </a>
            </div>
        );
    }
}
export default Footer;