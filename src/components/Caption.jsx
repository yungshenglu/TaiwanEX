import React, { Component } from 'react';

/* Import modules */
import saveCanvas from 'save-canvas-to-image';
import xmlserializer from 'xmlserializer';
import canvg from 'canvg'

class Caption extends Component {
    constructor(props) {
        super(props);
        this.handelSaveImage = this.handelSaveImage.bind(this);
    }

    handelSaveImage() {
        var svgString = xmlserializer.serializeToString(document.querySelector('#map'));
        var canvas = document.createElement('canvas');
        canvas.setAttribute('id', 'canvas');
        canvas.setAttribute('height', 1124);
        canvas.setAttribute('width', 750);
        canvg(canvas, svgString);
        canvas.toBlob((blob) => { 
            saveCanvas.savePNG('canvas', 'taiwan'); 
        });
    }

    render() {
        return (
            <div className="caption">
                <button 
                    id="saveAs" 
                    className="button"
                    onClick={this.handelSaveImage}>產生圖片</button>
            </div>
        );
    }
}
export default Caption;