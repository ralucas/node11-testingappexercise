$(function(){
	
	('.submit').on('click', function(){
		$.ajax({
			type: 'POST',
			url: '/',
			data: data,
			dataType: 'json',
			success: '/success', function (){
				console.log('success');
				console.log(data);
			})
		});
	});
});