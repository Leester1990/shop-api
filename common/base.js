exports.base = {
	createFirstArr(arr, id) {
		let childs = [];
		arr.forEach(v => {
			if (v.parent_id == id) {
				childs.push(v);
			}
		});
		return childs;
	}, 
	createResetCate: function (data, id) {
		let childs = this.createFirstArr(data, id);
		if (childs.length == 0) return null;
		
		childs.forEach((v, k) => {
			let buildTree = this.createResetCate(data, v.id);
			if (null != buildTree) {
				v['children'] = buildTree;
			}
		});
				
		return childs;
	}
}