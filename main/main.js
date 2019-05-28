module.exports = function main(distance,parkTime) {
    // write your code here...
	var price=0.0;
	if(distance<=2){
		price=6+parkTime*0.25;
	}
	else if(distance>2&&distance<=8){
		price=6+parkTime*0.25+(distance-2)*0.8;
	}
	else{
		price=10.8+parkTime*0.25+(distance-8)*1.2;
	}
    return Math.round(price);
};
