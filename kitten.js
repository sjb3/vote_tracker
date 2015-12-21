

var imageAlbum = [];

function makeFile(){

	var clicker = 0;
	
	while (clicker <= 21) {
		file = 'album/cat' + Math.floor(Math.random() *21)+'.jpeg';
		imageAlbum.push(file);
		clicker ++;

	};


};
var catPic1;
var catPic2;
var voteKitty1;
var voteKitty2;

function showImage(){

	var kitty1 = Math.floor(Math.random() *21);
	var kitty2 = Math.floor(Math.random() *21);

	while (kitty1 === kitty2){

		kitty2 = Math.floor(Math.random() *21);

	}
	voteKitty1 = kitty1;
	voteKitty2 = kitty2;

		catPic1 = imageAlbum[kitty1];
		catPic2 = imageAlbum[kitty2];

		$('#leftCat').html('<img src="' + catPic1 + '">');
		$('#rightCat').html('<img src="' + catPic2 + '">');
		
};

makeFile();
showImage();


 // $('#leftButton').click(function(){
 // 	$('#rightCat').empty();
 // })
 // $('#rightButton').click(function(){
 // 	$('#leftCat').empty();
 // })


var catAlbum = {
	0: 0,
	1: 0,
	2: 0,
	3: 0,
	4: 0,
	5: 0,
	6: 0,
	7: 0,
	8: 0,
	9: 0,
	10: 0,
	11: 0,
	12: 0,
	13: 0,
	14: 0,
	15: 0,
	16: 0,
	17: 0,
	18: 0,
	19: 0,
	20: 0
};


var clicks=0;
		
	function clickMe(cat){
		console.log(cat);
		catAlbum[cat] += 1;
		console.log(catAlbum[cat]);
	 	//catAlbum[cat] +=1;
			
		
		};
	
	clickMe();
//Array-fy
$('#results').click(function(){

var catArray = $.map(catAlbum, function(i,n){
	return [i];
	
});

console.log(catArray);

//Find the Largest Num

//var catArray[];
var largest= 0;

for (i=0; i<=catArray.length; i++){

	if (catArray[i]>largest) {
		var largest = catArray[i];

	}
}

console.log(largest);
//find the position of the largest #(IndexOF)
var index = catArray.indexOf(largest);
console.log(index);

// display!!!

var element = document.getElementById('score')
var elTxt = 'The Cutest Kitten is number # ' + index +'( with score of '+ largest +'!)';

	element.innerHTML = elTxt;

});




