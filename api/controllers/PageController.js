module.exports = {

	index:function(req,res){
		return res.view({
			questions: [{title: 'Freddy a presidente?', content: 'Últimamente Freddy se encuentra con más diplomacia.'}]
		});

	}

}