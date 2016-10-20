angular.module('sunn_sterk.controllers').controller('home-controller', function($scope, $stateParams, $state, $sce){

$('.carousel').carousel({
		interval: 8000,
	});
$("#carousel-1").hide();
//https://bootstrapbay.com/blog/bootstrap-3-carousel-tutorial/
$("#carousel-pause").click(function(){
	$('#carousel-example-generic').carousel("pause");
});

$('#carousel-example-generic').on('slide.bs.carousel', function (e) {
	var slideFrom = $(this).find('.active').index();
	var slideTo = $(e.relatedTarget).index();
	console.log(slideFrom+'-> '+slideTo);
	$("#carousel-"+slideFrom).toggle();
	$("#carousel-indicator-"+slideFrom).toggleClass('active');
	$("#carousel-"+slideTo).fadeToggle();
	$("#carousel-indicator-"+slideTo).toggleClass('active');
})
/*
$('.carousel').on('slide.bs.carousel', function(e){
	
});
*/




	$scope.welcome1 = "<h1>Velkommen</h1> <p> Og gratulerer med å ta det første skrittet for å virkelig investere i deg selv! Sunnsterk.no er veien til en sunn, energisk og strålende deg. Sammen skal vi jobbe for en sunn og sterk kropp i balanse og oppnå dine mål. Ikke minst kan du nyte herlig, sunne oppskrifter på naturlige råvarer og starte en aktiv hverdag tilpasset akkurat deg og hvor du er. </p> <p>Jeg ser frem til å jobbe med deg! Ernæringsfysiolog og Personlig trener Rubina Olsen,</br> Mastergrad i Ernæring fra Universitetet i Bergen</br> Lisensiert Personlig trener fra SAFE Education</p>";	
	//$scope.welcome_message = $sce.trustAsHtml(welcome_message_html);

	$scope.welcome2 ="<h1>Vi kan oppnå følgende resultater:</h1><p> <ul><li>Sunn mat- og treningsglede i hverdagen</li><li>En sunn og sterk kropp i balanse</li><li>Mer overskudd, energi og velvære</li><li>Maks utbytte av kosthold og trening</li><li>Gå ned i vekt (1-15 kg+)</li><li>Redusere % kroppsfett</li><li>Øke % muskelmasse</li><li>Sprekere og mer utholdende</li><li>En sterkere og mer rustet kropp</li></p>"


});