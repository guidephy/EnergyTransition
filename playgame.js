

var username
var year=1;

var year1to2=0;
var year2to3=0;
var yearmax=0;
var annualcarbonEmission1to2=0;
var annualcarbonEmission2to3=0;
var annualcarbonEmissionmax=0;

var si=1;

var totalPower=0;
var annualIncome=0;
var annualcarbonEmission=0;
var powerUseful=0;
var totalMoney=50;
var totalcarbonEmission=0;

var powerreuse=0;

var level=0;

var waternumber=0;
var coalnumber=0;
var gasnumber=0;
var nuclearnumber=0;
var solarnumber=0;
var windnumber=0;




function png1(){

	if(totalMoney>=20){
	totalPower=totalPower+0;
	annualIncome=annualIncome+2;
	annualcarbonEmission=annualcarbonEmission+1;
    powerUseful=powerUseful+0;
    totalMoney=totalMoney-20;

	document.getElementById("totalPower").innerHTML=totalPower+" 度";
	document.getElementById("annualIncome").innerHTML=annualIncome+" 元";
	document.getElementById("annualcarbonEmission").innerHTML=annualcarbonEmission+" 公斤";
	document.getElementById("powerUseful").innerHTML=powerUseful+" 度";
	document.getElementById("totalMoney").innerHTML=totalMoney+" 元";
    }else{
    	alert("目前條件無法購買");
    }

	
}


function png2(){
	if(totalMoney>=30){
	totalPower=totalPower+0;
	annualIncome=annualIncome+4;
	annualcarbonEmission=annualcarbonEmission+2;
    powerUseful=powerUseful+0;
    totalMoney=totalMoney-30;

	document.getElementById("totalPower").innerHTML=totalPower+" 度";
	document.getElementById("annualIncome").innerHTML=annualIncome+" 元";
	document.getElementById("annualcarbonEmission").innerHTML=annualcarbonEmission+" 公斤";
	document.getElementById("powerUseful").innerHTML=powerUseful+" 度";
	document.getElementById("totalMoney").innerHTML=totalMoney+" 元";
	}else{
    	alert("目前條件無法購買");
    }

	
}

function png3(){
	if(totalMoney>=50){
	totalPower=totalPower+0;
	annualIncome=annualIncome+10;
	annualcarbonEmission=annualcarbonEmission+15;
    powerUseful=powerUseful;
    totalMoney=totalMoney-50;

	document.getElementById("totalPower").innerHTML=totalPower+" 度";
	document.getElementById("annualIncome").innerHTML=annualIncome+" 元";
	document.getElementById("annualcarbonEmission").innerHTML=annualcarbonEmission+" 公斤";
	document.getElementById("powerUseful").innerHTML=powerUseful+" 度";
	document.getElementById("totalMoney").innerHTML=totalMoney+" 元";
	}else{
    	alert("目前條件無法購買");
    }

	
}

function png4(){
	if(totalMoney>=80){
	totalPower=totalPower+0;
	annualIncome=annualIncome+15;
	annualcarbonEmission=annualcarbonEmission+10;
    powerUseful=powerUseful;
    totalMoney=totalMoney-80;

	document.getElementById("totalPower").innerHTML=totalPower+" 度";
	document.getElementById("annualIncome").innerHTML=annualIncome+" 元";
	document.getElementById("annualcarbonEmission").innerHTML=annualcarbonEmission+" 公斤";
	document.getElementById("powerUseful").innerHTML=powerUseful+" 度";
	document.getElementById("totalMoney").innerHTML=totalMoney+" 元";
	}else{
    	alert("目前條件無法購買");
    }

	
}


function png5(){
	if(totalMoney>=500&&powerUseful>=20){
	totalPower=totalPower+0;
	annualIncome=annualIncome+180;
	annualcarbonEmission=annualcarbonEmission+350;
    powerUseful=powerUseful-20;
    totalMoney=totalMoney-500;

	document.getElementById("totalPower").innerHTML=totalPower+" 度";
	document.getElementById("annualIncome").innerHTML=annualIncome+" 元";
	document.getElementById("annualcarbonEmission").innerHTML=annualcarbonEmission+" 公斤";
	document.getElementById("powerUseful").innerHTML=powerUseful+" 度";
	document.getElementById("totalMoney").innerHTML=totalMoney+" 元";
	}else{
    	alert("目前條件無法購買");
    }

	
}

function png6(){
	if(totalMoney>=2000&&powerUseful>=100){
	totalPower=totalPower+0;
	annualIncome=annualIncome+1200;
	annualcarbonEmission=annualcarbonEmission+3000;
    powerUseful=powerUseful-100;
    totalMoney=totalMoney-2000;

	document.getElementById("totalPower").innerHTML=totalPower+" 度";
	document.getElementById("annualIncome").innerHTML=annualIncome+" 元";
	document.getElementById("annualcarbonEmission").innerHTML=annualcarbonEmission+" 公斤";
	document.getElementById("powerUseful").innerHTML=powerUseful+" 度";
	document.getElementById("totalMoney").innerHTML=totalMoney+" 元";
	}else{
    	alert("目前條件無法購買");
    }

	
}

function png7(){
	if(totalMoney>=10000&&powerUseful>=300){
	totalPower=totalPower+0;
	annualIncome=annualIncome+5000;
	annualcarbonEmission=annualcarbonEmission+10000;
    powerUseful=powerUseful-300;
    totalMoney=totalMoney-10000;

	document.getElementById("totalPower").innerHTML=totalPower+" 度";
	document.getElementById("annualIncome").innerHTML=annualIncome+" 元";
	document.getElementById("annualcarbonEmission").innerHTML=annualcarbonEmission+" 公斤";
	document.getElementById("powerUseful").innerHTML=powerUseful+" 度";
	document.getElementById("totalMoney").innerHTML=totalMoney+" 元";
	}else{
    	alert("目前條件無法購買");
    }

	
}

function png8(){
	if(totalMoney>=100000&&powerUseful>=4000){
	totalPower=totalPower+0;
	annualIncome=annualIncome+80000;
	annualcarbonEmission=annualcarbonEmission+120000;
    powerUseful=powerUseful-4000;
    totalMoney=totalMoney-100000;

	document.getElementById("totalPower").innerHTML=totalPower+" 度";
	document.getElementById("annualIncome").innerHTML=annualIncome+" 元";
	document.getElementById("annualcarbonEmission").innerHTML=annualcarbonEmission+" 公斤";
	document.getElementById("powerUseful").innerHTML=powerUseful+" 度";
	document.getElementById("totalMoney").innerHTML=totalMoney+" 元";
	}else{
    	alert("目前條件無法購買");
    }

	
}

//水力
function png9(){

	if(totalMoney>=1000){
	totalPower=totalPower+50;
	annualIncome=annualIncome-50;
	annualcarbonEmission=annualcarbonEmission+20;
    powerUseful=powerUseful+50;
    totalMoney=totalMoney-1000;
    waternumber=waternumber+1;

	document.getElementById("totalPower").innerHTML=totalPower+" 度";
	document.getElementById("annualIncome").innerHTML=annualIncome+" 元";
	document.getElementById("annualcarbonEmission").innerHTML=annualcarbonEmission+" 公斤";
	document.getElementById("powerUseful").innerHTML=powerUseful+" 度";
	document.getElementById("totalMoney").innerHTML=totalMoney+" 元";
    }else{
    	alert("目前條件無法購買");
    }

	
}

//燃煤
function png10(){

	if(totalMoney>=4000){
	totalPower=totalPower+500;
	annualIncome=annualIncome-200;
	annualcarbonEmission=annualcarbonEmission+5000;
    powerUseful=powerUseful+500;
    totalMoney=totalMoney-4000;
    coalnumber=coalnumber+1;

	document.getElementById("totalPower").innerHTML=totalPower+" 度";
	document.getElementById("annualIncome").innerHTML=annualIncome+" 元";
	document.getElementById("annualcarbonEmission").innerHTML=annualcarbonEmission+" 公斤";
	document.getElementById("powerUseful").innerHTML=powerUseful+" 度";
	document.getElementById("totalMoney").innerHTML=totalMoney+" 元";
    }else{
    	alert("目前條件無法購買");
    }

	
}

//燃氣
function png11(){

	if(totalMoney>=10000){
	totalPower=totalPower+500;
	annualIncome=annualIncome-500;
	annualcarbonEmission=annualcarbonEmission+3000;
    powerUseful=powerUseful+500;
    totalMoney=totalMoney-10000;
    gasnumber=gasnumber+1;

	document.getElementById("totalPower").innerHTML=totalPower+" 度";
	document.getElementById("annualIncome").innerHTML=annualIncome+" 元";
	document.getElementById("annualcarbonEmission").innerHTML=annualcarbonEmission+" 公斤";
	document.getElementById("powerUseful").innerHTML=powerUseful+" 度";
	document.getElementById("totalMoney").innerHTML=totalMoney+" 元";
    }else{
    	alert("目前條件無法購買");
    }

	
}

//核能
function png12(){

	if(totalMoney>=100000){
	totalPower=totalPower+600;
	annualIncome=annualIncome-1500;
	annualcarbonEmission=annualcarbonEmission+150;
    powerUseful=powerUseful+600;
    totalMoney=totalMoney-100000;
    nuclearnumber=nuclearnumber+1;

	document.getElementById("totalPower").innerHTML=totalPower+" 度";
	document.getElementById("annualIncome").innerHTML=annualIncome+" 元";
	document.getElementById("annualcarbonEmission").innerHTML=annualcarbonEmission+" 公斤";
	document.getElementById("powerUseful").innerHTML=powerUseful+" 度";
	document.getElementById("totalMoney").innerHTML=totalMoney+" 元";
    }else{
    	alert("目前條件無法購買");
    }

	
}

//太陽能
function png13(){

	if(totalMoney>=5000){
	totalPower=totalPower+50;
	annualIncome=annualIncome-50;
	annualcarbonEmission=annualcarbonEmission+5;
    powerUseful=powerUseful+50;
    totalMoney=totalMoney-5000;
    solarnumber=solarnumber+1;

	document.getElementById("totalPower").innerHTML=totalPower+" 度";
	document.getElementById("annualIncome").innerHTML=annualIncome+" 元";
	document.getElementById("annualcarbonEmission").innerHTML=annualcarbonEmission+" 公斤";
	document.getElementById("powerUseful").innerHTML=powerUseful+" 度";
	document.getElementById("totalMoney").innerHTML=totalMoney+" 元";
    }else{
    	alert("目前條件無法購買");
    }

	
}

//風力
function png14(){

	if(totalMoney>=50000){
	totalPower=totalPower+200;
	annualIncome=annualIncome-100;
	annualcarbonEmission=annualcarbonEmission+2;
    powerUseful=powerUseful+200;
    totalMoney=totalMoney-50000;
    windnumber=windnumber+1;

	document.getElementById("totalPower").innerHTML=totalPower+" 度";
	document.getElementById("annualIncome").innerHTML=annualIncome+" 元";
	document.getElementById("annualcarbonEmission").innerHTML=annualcarbonEmission+" 公斤";
	document.getElementById("powerUseful").innerHTML=powerUseful+" 度";
	document.getElementById("totalMoney").innerHTML=totalMoney+" 元";
    }else{
    	alert("目前條件無法購買");
    }

	
}

function png15(){

	if(totalMoney>=2000&&annualIncome>=500){

    totalMoney=totalMoney-2000;

    level=level+1;

    year1to2=year;
    annualcarbonEmission1to2=annualcarbonEmission;

    document.getElementById("productionNextBtn").style.display='';

    document.getElementById("png15").style.display='none';
    document.getElementById("png16").style.display='';

    document.getElementById("playBoard").style.display='none';
    document.getElementById("story").style.display='';
    document.getElementById("storyImg").src="story11.jpg";
    si=1;
    document.getElementById("storynextBtn").style.visibility='visible';
    document.getElementById("storybackBtn").style.visibility='hidden';
    document.getElementById("startgame").style.display='none';


  

	document.getElementById("totalMoney").innerHTML=totalMoney+" 元";
    }else{
    	alert("目前條件無法購買");
    }

	
}

function png16(){

	if(totalMoney>=500000&&annualIncome>=100000&&totalPower>=1000){

    totalMoney=totalMoney-500000;

    level=level+1;

    year2to3=year;
    annualcarbonEmission2to3=annualcarbonEmission;


    document.getElementById("energyNextBtn").style.display='';

    document.getElementById("png16").style.display='none';
    document.getElementById("png17").style.display='';
    document.getElementById("png18").style.display='';
    document.getElementById("png28").style.display='';
    document.getElementById("png20").style.display='';

    document.getElementById("playBoard").style.display='none';
    document.getElementById("story").style.display='';
    document.getElementById("storyImg").src="story21.jpg";
    si=1;
    document.getElementById("storynextBtn").style.visibility='visible';
    document.getElementById("storybackBtn").style.visibility='hidden';
    document.getElementById("startgame").style.display='none';



    document.getElementById("carbontitle").style.visibility='visible';
    document.getElementById("carbonnumber").style.visibility='visible';
    
    

   

	document.getElementById("totalMoney").innerHTML=totalMoney+" 元";
    }else{
    	alert("目前條件無法購買");
    }

	
}



function png17(){

	if(totalMoney>=300000){

		totalMoney=totalMoney-300000;

       document.getElementById("oldoption").style.display='none';
       document.getElementById("png17").style.display='none';
        document.getElementById("newoption").style.display='';
        document.getElementById("totalMoney").innerHTML=totalMoney+" 元";
        alert("拆除電廠技術研發成功，可於拆除清單中，花錢拆除發電廠");




        

	}else{
		alert("目前條件無法購買");
	}
	

}

function png18(){

	if(totalMoney>=500000){

		totalMoney=totalMoney-500000;
		document.getElementById("totalMoney").innerHTML=totalMoney+" 元";


        alert("開發碳封存技術成功，未來可使用此技術減少每年的碳排放");
        document.getElementById("png18").style.display='none';
        document.getElementById("png27").style.display='';


	}else{
		alert("目前條件無法購買");
	}
	

}

function png28(){

	if(totalMoney>=10000){

        totalMoney=totalMoney-10000;
        annualcarbonEmission=annualcarbonEmission-10;

        document.getElementById("totalMoney").innerHTML=totalMoney+" 元";

   	    document.getElementById("annualcarbonEmission").innerHTML=annualcarbonEmission+"公斤";


        alert("已進行碳封存，每年碳排放將減少10公斤");

	}else{
		alert("你的錢不夠造林");
	}
	

}

function png20(){

	if(totalMoney>=1000000){

		totalMoney=totalMoney-1000000;

		document.getElementById("totalMoney").innerHTML=totalMoney+" 元";
		document.getElementById("png20").style.display='none';

		powerreuse=1;

        alert("未來可用電量將增加年總發電量的1%");

	}else{
		alert("目前的錢無法夠買此技術");
	}


}

function png21(){

	if(waternumber>=1 &&totalMoney>=2000&&powerUseful>=50){

        waternumber=waternumber-1;
        annualIncome=annualIncome+50;
        totalMoney=totalMoney-5000;
        powerUseful=powerUseful-50;
        totalPower=totalPower-50;
        annualcarbonEmission=annualcarbonEmission-20;

        document.getElementById("waternumber").innerHTML=waternumber+" 座";
        document.getElementById("annualIncome").innerHTML=annualIncome+" 元";
	    document.getElementById("totalMoney").innerHTML=totalMoney+" 元";
	    document.getElementById("powerUseful").innerHTML=powerUseful+" 度";
	    document.getElementById("totalPower").innerHTML=totalPower+" 度";
	    document.getElementById("annualcarbonEmission").innerHTML=annualcarbonEmission+"公斤";
	    alert("已拆除一座水力發電廠");



	}else{
		alert("目前條件無法拆除");
	}


}

function png22(){

	if(coalnumber>=1 &&totalMoney>=20000&&powerUseful>=500){

        coalnumber=coalnumber-1;
        annualIncome=annualIncome+200;
        totalMoney=totalMoney-20000;
        powerUseful=powerUseful-500;
        totalPower=totalPower-500;
        annualcarbonEmission=annualcarbonEmission-5000;

        document.getElementById("coalnumber").innerHTML=coalnumber+" 座";
        document.getElementById("annualIncome").innerHTML=annualIncome+" 元";
	    document.getElementById("totalMoney").innerHTML=totalMoney+" 元";
	    document.getElementById("powerUseful").innerHTML=powerUseful+" 度";
	    document.getElementById("totalPower").innerHTML=totalPower+" 度";
	    document.getElementById("annualcarbonEmission").innerHTML=annualcarbonEmission+"公斤";
	    alert("已拆除一座燃煤發電廠");


	}else{
		alert("目前條件無法拆除");
	}


}


function png23(){

	if(gasnumber>=1 &&totalMoney>=40000&&powerUseful>=500){

        gasnumber=gasnumber-1;
        annualIncome=annualIncome+500;
        totalMoney=totalMoney-40000;
        powerUseful=powerUseful-500;
        totalPower=totalPower-500;
        annualcarbonEmission=annualcarbonEmission-3000;

        document.getElementById("gasnumber").innerHTML=gasnumber+" 座";
        document.getElementById("annualIncome").innerHTML=annualIncome+" 元";
	    document.getElementById("totalMoney").innerHTML=totalMoney+" 元";
	    document.getElementById("powerUseful").innerHTML=powerUseful+" 度";
	    document.getElementById("totalPower").innerHTML=totalPower+" 度";
	    document.getElementById("annualcarbonEmission").innerHTML=annualcarbonEmission+"公斤";
	    alert("已拆除一座燃氣發電廠");


	}else{
		alert("目前條件無法拆除");
	}


}

function png24(){

	if(nuclearnumber>=1 &&totalMoney>=400000&&powerUseful>=600){

        nuclearnumber=nuclearnumber-1;
        annualIncome=annualIncome+1500;
        totalMoney=totalMoney-400000;
        powerUseful=powerUseful-600;
        totalPower=totalPower-600;
        annualcarbonEmission=annualcarbonEmission-150;

        document.getElementById("nuclearnumber").innerHTML=nuclearnumber+" 座";
        document.getElementById("annualIncome").innerHTML=annualIncome+" 元";
	    document.getElementById("totalMoney").innerHTML=totalMoney+" 元";
	    document.getElementById("powerUseful").innerHTML=powerUseful+" 度";
	    document.getElementById("totalPower").innerHTML=totalPower+" 度";
	    document.getElementById("annualcarbonEmission").innerHTML=annualcarbonEmission+"公斤";
	    alert("已拆除一座核能發電廠");


	}else{
		alert("目前條件無法拆除");
	}

}

function png25(){

	if(solarnumber>=1 &&totalMoney>=20000&&powerUseful>=50){

        solarnumber=solarnumber-1;
        annualIncome=annualIncome+50;
        totalMoney=totalMoney-20000;
        powerUseful=powerUseful-50;
        totalPower=totalPower-50;
        annualcarbonEmission=annualcarbonEmission-5;

        document.getElementById("solarnumber").innerHTML=solarnumber+" 座";
        document.getElementById("annualIncome").innerHTML=annualIncome+" 元";
	    document.getElementById("totalMoney").innerHTML=totalMoney+" 元";
	    document.getElementById("powerUseful").innerHTML=powerUseful+" 度";
	    document.getElementById("totalPower").innerHTML=totalPower+" 度";
	    document.getElementById("annualcarbonEmission").innerHTML=annualcarbonEmission+"公斤";
	    alert("已拆除一座太陽能發電廠");


	}else{
		alert("目前條件無法拆除");
	}

}

function png26(){

	if(windnumber>=1 &&totalMoney>=200000&&powerUseful>=200){

        windnumber=windnumber-1;
        annualIncome=annualIncome+100;
        totalMoney=totalMoney-200000;
        powerUseful=powerUseful-200;
        totalPower=totalPower-200;
        annualcarbonEmission=annualcarbonEmission-2;

        document.getElementById("windnumber").innerHTML=windnumber+" 座";
        document.getElementById("annualIncome").innerHTML=annualIncome+" 元";
	    document.getElementById("totalMoney").innerHTML=totalMoney+" 元";
	    document.getElementById("powerUseful").innerHTML=powerUseful+" 度";
	    document.getElementById("totalPower").innerHTML=powerUseful+" 度";
	    document.getElementById("annualcarbonEmission").innerHTML=annualcarbonEmission+"公斤";
	    alert("已拆除一座風力發電廠");


	}else{
		alert("目前條件無法拆除");
	}

}


function png27(){

   if(totalMoney>=500000){

   	totalMoney=totalMoney-500000;
   	annualcarbonEmission=annualcarbonEmission-5000;

   	 alert("已進行碳封存，每年碳排放將減少5000公斤");

	document.getElementById("totalMoney").innerHTML=totalMoney+" 元";

   	document.getElementById("annualcarbonEmission").innerHTML=annualcarbonEmission+"公斤";
    }else{
    	alert("你的錢不夠開發新的碳封存");
    }

}

function productionNextBtn(){
document.getElementById("production1").style.display='none';	
document.getElementById("production2").style.display='';
document.getElementById("productionNextBtn").style.display='none';	
document.getElementById("productionPreBtn").style.display='';

}

function productionPreBtn(){
document.getElementById("production1").style.display='';	
document.getElementById("production2").style.display='none';
document.getElementById("productionNextBtn").style.display='';	
document.getElementById("productionPreBtn").style.display='none';

}

function energyNextBtn(){
document.getElementById("energy1").style.display='none';	
document.getElementById("energy2").style.display='';
document.getElementById("energyNextBtn").style.display='none';	
document.getElementById("energyPreBtn").style.display='';

}

function energyPreBtn(){
document.getElementById("energy1").style.display='';	
document.getElementById("energy2").style.display='none';
document.getElementById("energyNextBtn").style.display='';	
document.getElementById("energyPreBtn").style.display='none';

}



function nextyear(){

	if (annualIncome>=100000&&level>=3&&annualcarbonEmission<=0) {

		var ctx = document.getElementById("myChart");


var myChart = new Chart(ctx, {
  type: 'scatter',
  data: {
    datasets: [
    
      {
        label: '年碳排放量',
        data: [{x: 0, y: 0}, {x: year1to2, y: annualcarbonEmission1to2}, {x: year2to3, y: annualcarbonEmission2to3},{x: year, y: 0}],
        showLine: true,
        fill: false,
        borderColor: 'rgba(200, 0, 0, 1)'
    	}
    ]
  },
  options: {
   

    tooltips: {

      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    },
  }
});





		alert("恭喜過關");
		document.getElementById("playBoard").style.display='none';
		document.getElementById("win").style.display='';



		document.getElementById("score").innerHTML=username+",恭喜你在第"+year1to2+"年進行第一次的產業升級，當時的年碳排量為"+annualcarbonEmission1to2+"公斤。"+ "<br>" +"接著在第"+year2to3+"年進行第二次的產業升級，當時的年碳排量為"+annualcarbonEmission2to3+"公斤。"+ "<br>" +"最後在第"+year+"年達到淨零碳排的目標，使Planet-285行星建立永續發展的典範";





	}else{

	


	totalMoney=totalMoney+annualIncome;

    totalcarbonEmission=totalcarbonEmission+annualcarbonEmission;

    powerUseful=powerUseful+parseInt(totalPower*0.01)*powerreuse;

    document.getElementById("totalMoney").innerHTML=totalMoney+" 元";
    document.getElementById("totalcarbonEmission").innerHTML=totalcarbonEmission+" 公斤";
    document.getElementById("powerUseful").innerHTML=powerUseful+" 度";

    year=year+1;
    document.getElementById("year").innerHTML="第"+year+"年";   
    }
    


}

function production(){

document.getElementById("production").style.display='';
document.getElementById("energy").style.display='none';
document.getElementById("technology").style.display='none';
document.getElementById("energyremove").style.display='none';

}

function energy(){

if (level==1) {
	alert("目前技術還未成熟，需進行產業升級才能使用");
}else{

document.getElementById("production").style.display='none';
document.getElementById("energy").style.display='';
document.getElementById("technology").style.display='none';
document.getElementById("energyremove").style.display='none';
}
	
}

function technology(){

document.getElementById("production").style.display='none';
document.getElementById("energy").style.display='none';
document.getElementById("technology").style.display='';
document.getElementById("energyremove").style.display='none';


	
}


function remove(){

document.getElementById("production").style.display='none';
document.getElementById("energy").style.display='none';
document.getElementById("technology").style.display='none';
document.getElementById("energyremove").style.display='';

document.getElementById("waternumber").innerHTML=waternumber+" 座";
document.getElementById("coalnumber").innerHTML=coalnumber+" 座";
document.getElementById("gasnumber").innerHTML=gasnumber+" 座";
document.getElementById("nuclearnumber").innerHTML=nuclearnumber+" 座";
document.getElementById("solarnumber").innerHTML=solarnumber+" 座";
document.getElementById("windnumber").innerHTML=windnumber+" 座";


	
}

function send(){

	 username=document.getElementById("username").value; 

	document.getElementById("idCheck").remove();

	//alert("遊戲提示:\n當你累績到一定的生產力，將可在「技術」中進行產業升級，第二次產業升級後，會出現遊戲過關條件的提示，開始來開發Planet-285吧!");

    document.getElementById("playBoard").style.display=''
    document.getElementById("year").innerHTML="第"+year+"年";   





	}

    function next(){

    if (level==0) {
      si=si+1;
     if(si==2){
       document.getElementById("storyImg").src="story02.jpg";
       
       document.getElementById("storybackBtn").style.visibility='visible';
     }else if(si==3){
       document.getElementById("storyImg").src="story03.jpg";
     }else if(si==4){
       document.getElementById("storyImg").src="story04.jpg";
     }else if(si==5){
       document.getElementById("storyImg").src="story05.jpg";
       document.getElementById("storynextBtn").style.visibility='hidden';
           document.getElementById("startgame").style.display=''
     }
     }else if (level==2) {

	 si=si+1;
     if(si==2){
       document.getElementById("storyImg").src="story12.jpg";
       
       document.getElementById("storybackBtn").style.visibility='visible';
     }else if(si==3){
       document.getElementById("storyImg").src="story13.jpg";
     }else if(si==4){
       document.getElementById("storyImg").src="story14.jpg";
       document.getElementById("storynextBtn").style.visibility='hidden';
           document.getElementById("startgame").style.display=''


     };
    }else if(level==3) {

	 si=si+1;
     if(si==2){
       document.getElementById("storyImg").src="story22.jpg";
       
       document.getElementById("storybackBtn").style.visibility='visible';
     }else if(si==3){
       document.getElementById("storyImg").src="story23.jpg";
     }else if(si==4){
       document.getElementById("storyImg").src="story24.jpg";
     }else if(si==5){
       document.getElementById("storyImg").src="story25.jpg";
     }else if(si==6){
       document.getElementById("storyImg").src="story26.jpg";
     }else if(si==7){
       document.getElementById("storyImg").src="story27.jpg";
       document.getElementById("storynextBtn").style.visibility='hidden';
           document.getElementById("startgame").style.display=''


     };

    };
    }

      
        function back(){

         if (level==0) {	
      si=si-1;
     if(si==2){
       document.getElementById("storyImg").src="story02.jpg";
     }else if(si==3){
     	document.getElementById("storyImg").src="story03.jpg";
     }else if(si==4){
       document.getElementById("storyImg").src="story04.jpg";

       document.getElementById("storynextBtn").style.visibility='visible';
       document.getElementById("startgame").style.display='none'

       
     }else if(si==1){
       document.getElementById("storyImg").src="story01.jpg";
       
       document.getElementById("storybackBtn").style.visibility='hidden';

     }
 	}else if (level==2) {

 		si=si-1;
     if(si==2){
       document.getElementById("storyImg").src="story12.jpg";
     }else if(si==3){
       document.getElementById("storyImg").src="story13.jpg";

       document.getElementById("storynextBtn").style.visibility='visible';
       document.getElementById("startgame").style.display='none'

       
     }else if(si==1){
       document.getElementById("storyImg").src="story11.jpg";
       
       document.getElementById("storybackBtn").style.visibility='hidden';


 	};

    }else if (level==3) {

 		si=si-1;
     if(si==2){
       document.getElementById("storyImg").src="story22.jpg";
     }else if(si==3){
       document.getElementById("storyImg").src="story23.jpg";

     }else if(si==4){
       document.getElementById("storyImg").src="story24.jpg";

     }else if(si==5){
       document.getElementById("storyImg").src="story25.jpg";

     }else if(si==6){
       document.getElementById("storyImg").src="story26.jpg";

       document.getElementById("storynextBtn").style.visibility='visible';
       document.getElementById("startgame").style.display='none'

       
     }else if(si==1){
       document.getElementById("storyImg").src="story21.jpg";
       
       document.getElementById("storybackBtn").style.visibility='hidden';


 	};

    }
	}


    function startgame(){

		if(level==0) {

			level=level+1;

			document.getElementById("story").style.display='none';
			document.getElementById("idCheck").style.display='';

		}else{

			document.getElementById("story").style.display='none';
		    document.getElementById("howPlayImg").style.display='none';
		    document.getElementById("playBoard").style.display='';

		};

    }

    function howPlay(){

    	document.getElementById("playBoard").style.display='none';

    	if(level==1){
    	document.getElementById("howPlayImgSrc").src="story04.jpg";
		}else if(level==2){
		document.getElementById("howPlayImgSrc").src="story14.jpg";

		}else{
		document.getElementById("howPlayImgSrc").src="story27.jpg";

		};


    	

    	document.getElementById("howPlayImg").style.display='';

    }
