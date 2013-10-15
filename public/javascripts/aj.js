$(function(){
	
	$('.submit').on('click', function(e){
		event.preventDefault();
		console.log('hi');
		$.post('/form', $(this).parent().parent().parent().serialize(), function(data){
			console.log(data);
		});
	});
});
			// if(data.error){
			// 	$('#error').text(data.error);

			// $.post('/form', $(this).serialize(), function(data){
			// console.log(data);
			// });