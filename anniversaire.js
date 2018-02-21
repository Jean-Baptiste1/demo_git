$(function() {

  var $img1,img2,$wish1, $wish2, $wish3;
    
    $img1 = $('<img class="displayed" src="asset/1.jpg">');
    $img2 = $('<img class="displayed" src="asset/3.jpg">');
   
	$wish1 = $('<p>Voir la surprise</p>');
	$wish2 = $('<p>Je te souhaite un super méga grand Joyeux Anniversaire !!!</p>');
	$wish3 = $('<p>Oubli pas le gâteau pour souffler tes bougies !</p>');
    $wish4 = $('<p>Et surtout encore un Grand Joyeux Anniversaire !!!</p>');
    
    $('#img_section').html($img1);
	$('#newItemForm').append($wish1);
	$($wish1).on('click', function() {
		$($wish1).after($wish2);
        $liveSon = $('<audio autoplay="autoplay" preload="auto"><source src="asset/chanson_anniversaire.mp3" type="audio/mp3" /></audio>');
		$($wish1).after($liveSon);
	});
    
	$($wish2).on('click', function() {
		$($wish2).after($wish3);
	});
    
    $($wish3).on('click', function() {
		$($wish3).after($wish4);
        $('#img_section').html($img2);
	});
});
