module.exports = function main(inputs) {
    // write your code here...
	var price=0.0;
	if(inputs.distance<=2){
		price=6+inputs.parkTime*0.25;
	}
	else if(inputs.distance>2&&inputs.distance<=8){
		price=6+inputs.parkTime*0.25+(inputs.distance-2)*0.8;
	}
	else{
		price=10.8+inputs.parkTime*0.25+(inputs.distance-8)*1.2;
	}
    return Math.round(price);
};
