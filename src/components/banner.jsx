import React, { Component } from 'react';
import BannerImg from '../imgs/1200x380.png';

class Banner extends Component {
    state = {
        openAtStart: true,
        autoToggle: true, 
        button: { 
		    closeText: '收合', 
		    openText: '展開', 
		    class: 'btn' 
        }, 
        class: {
		    closed: 'closed', 
		    closing: 'closing', 
		    opened: 'opened', 
		    opening: 'opening' 
        },
        transition: true,
        whenTransition: function() {
		    console.log('whenTransition');
	    }

    }

    constructor(){
        super();
        this.slideToggle=this.slideToggle.bind(this);
    }

    slideToggle(){
        console.log(this,'click');
    }

    render() { 
        return (
            <div className="banner">
                <a className="wrap" href="#">
                    <img className="img" src={BannerImg} title="輸入廣告促銷說明文字" alt="輸入廣告促銷說明文字"/>
                    <button className="btn" onClick={this.slideToggle}>收合</button>
                </a>
            </div>              
        );
        
    }
}
 
export default Banner;