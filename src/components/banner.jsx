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
        
    init(){
        console.log('init');
        // let vm=this;
        // let wr=document.querySelector(".wrap");
        // let btn=document.querySelector(".btn");

        // function autoSlide() {
        //     wr.classList.toggle("opened");
        //     wr.classList.toggle("closed");
        //     toggleTxt();
        //     return {};  //測試
        // }	
        // function autoSlideUD() {
        //     wr.classList.toggle("closed");
        //     wr.classList.toggle("opened");
        //     toggleTxt();
        //     return {};  //測試
        // }	
        // //openAtStart & autoToggle 
        //     console.log(this); 
		// 	let open=this.state.openAtStart;
		// 	console.log('openAtStart',open);
		// 	let classN=document.getElementsByTagName('a');			
		// 	let clStr=classN[0].classList[1];			
			
		// 	 if(typeof(open)=="boolean"&&open==true){              
        //         wr.classList.remove( clStr );
        //         wr.classList.add( "opened" );				 
		// 		let atToggle = this.state.autoToggle;
		// 		console.log('autoToggle',atToggle);

		// 		if(typeof(atToggle)=="boolean"&&atToggle==true){					
		// 			setTimeout(autoSlide, 1000);										
		// 		}else if(typeof(atToggle)=="boolean"&&atToggle==false){
		// 			console.log('atToggle false，沒有自動開合');
		// 		}else if(typeof(atToggle)=="number"){
		// 			setTimeout(autoSlide, this.state.autoToggle);					
		// 		}	
		// 	 }else if(typeof(open)=="boolean"&&open==false){
        //          wr.classList.remove( clStr );
        //          wr.classList.add( "closed" );
		// 		 this.btn.textContent=this.state.button.openText;
		// 		 if(typeof(this.state.autoToggle)=="boolean"&&this.state.autoToggle==true){
		// 			setTimeout(autoSlideUD, 1000);					
		// 		 }else if(typeof(this.state.autoToggle)=="boolean"&&this.state.autoToggle==false){
		// 			console.log('atToggle false，沒有自動開合');			
		// 		 }else if(typeof(this.state.autoToggle)=="number"){
		// 			setTimeout(autoSlideUD, this.state.autoToggle);		
		// 		 }	
		// 	 }

		// 	// toggle text
		// 	function toggleTxt(){
		// 		console.log(vm);
		// 		let txt=document.getElementsByTagName('a');
		// 		if(txt[0].classList[1]=="closed"){					
		// 			console.log('btntxt',vm.btn.textContent,'changeTo',vm.state.button.openText);									
		// 			vm.btn.textContent=vm.state.button.openText;
		// 		}else if(txt[0].classList[1]=="opened"){
		// 			console.log('btntxt',vm.btn.textContent,'changeTo',vm.state.button.closeText);
		// 			vm.btn.textContent=vm.state.button.closeText;
		// 		}
		// 	}


    }
   
    slideToggle(){
        console.log(this,'click');
        let str=document.getElementsByTagName('a');
        
        if(str[0].classList.length>1){            
            let classStr=str[0].classList[1];
            console.log(classStr);
        }else{
            console.log(str[0].classList[0]);  //wrap
        }   		
        
    }

    render() { 
        return (
            <div className="banner" onLoad={this.init}>
                <a className="wrap" href="#">
                    <img className="img" src={BannerImg} title="輸入廣告促銷說明文字" alt="輸入廣告促銷說明文字"/>
                    <button className="btn" onClick={this.slideToggle}>收合</button>                    
                </a>
            </div>              
        );
        
    }
}
 
export default Banner;