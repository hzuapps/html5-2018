var app = getApp()
Page({
	data: {
		hidden:false,
		curNav:1,
		curIndex:0,
		cart:[],
		cartTotal:0,
		navList:[
			{
				id:1,
				name:'店家推荐'
			},
			{
				id:2,
				name:'川湘菜系'
			},
			{
				id:3,
				name:'粤菜系'
			},
      {
        id:4,
        name: '鲁菜系'
      },
      {
        id: 5,
        name: '苏浙菜系'
      },
      {
        id: 6,
        name: '闽菜系'
      },
      {
        id: 7,
        name: '徽菜系'
      },
			{
				id:8,
				name:'超值套餐'
			}
		],
		dishesList:[
			[
				{
					name:"姜葱鸡",
					price:76,
					num:1,
					id:1
				},
				{
					name:"啤酒鸭",
					price:58,
					num:1,
					id:2
				},
				{
					name:"清蒸鲫鱼",
					price:66,
					num:1,
					id:3
				}
			],
			[
				{
          name:"香辣土豆丝",
					price:18,
					num:1,
					id:4
				},
				{
          name:"家常毛血旺",
					price:38,
					num:1,
					id:5
				}
			],
			[
				{
          name:"潮州火筒炖鲍翅",
					price:98,
					num:1,
					id:6
				},
				{
          name:"蚝油牛柳",
					price:28,
					num:1,
					id:7
				},
        {
          name: "脆皮乳猪",
          price: 128,
          num: 1,
          id: 8
        }
			],
      [
        {
          name: "糖醋鱼",
          price: 98,
          num: 1,
          id: 9
        },
        {
          name: "锅烧肘子",
          price: 88,
          num: 1,
          id: 10
        },
        {
          name: "红烧海螺",
          price: 38,
          num: 1,
          id: 11
        }
      ],
      [
        {
          name: "盐水鸭",
          price: 118,
          num: 1,
          id: 12
        },
        {
          name: "叫花鸡",
          price: 98,
          num: 1,
          id: 13
        },
        {
          name: "扬州炒饭",
          price: 28,
          num: 1,
          id: 14
        }
      ],
      [
        {
          name: "佛跳墙",
          price: 118,
          num: 1,
          id: 15
        },
        {
          name: "沙奈焖鸭块",
          price: 88,
          num: 1,
          id: 16
        },
        {
          name: "蚝仔煎",
          price: 58,
          num: 1,
          id: 17
        }
      ],
      [
        {
          name: "石耳炖鸡",
          price: 138,
          num: 1,
          id: 18
        },
        {
          name: "绿豆煎饼",
          price: 28,
          num: 1,
          id: 19
        },
        {
          name: "方腊鱼",
          price: 108,
          num: 1,
          id: 20
        }
      ],
      [
        {
          name: "姜葱鸡+香辣土豆丝",
          price: 88,
          num: 1,
          id: 21
        },
        {
          name: "脆皮乳猪+糖醋鱼",
          price: 188,
          num: 1,
          id: 22
        },
        {
          name: "红烧海螺+石耳炖鸡",
          price: 168,
          num: 1,
          id: 23
        }
      ],
			[]
		],

	},
	loadingChange () {
		setTimeout(() => {
			this.setData({
				hidden:true
			})
		},2000)
	},
	selectNav (event) {
		let id = event.target.dataset.id,
			index = parseInt(event.target.dataset.index);
			self = this;
		this.setData({
			curNav:id,
			curIndex:index
		})
	},
	// 选择菜品
	selectDish (event) {
		let dish = event.currentTarget.dataset.dish;
		let flag = true;
		let	cart = this.data.cart;
		
		if(cart.length > 0){
			cart.forEach(function(item,index){
				if(item == dish){
					cart.splice(index,1);
					flag = false;
				}
			})
		}
		if(flag) cart.push(dish);
		this.setData({
			cartTotal:cart.length
		})
		this.setStatus(dish)
	},
	setStatus (dishId) {
		let dishes = this.data.dishesList;
		for (let dish of dishes){
			dish.forEach((item) => {
				if(item.id == dishId){
					item.status = !item.status || false
				}
			})
		}

		this.setData({
			dishesList:this.data.dishesList
		})
	},


	onLoad () {
		this.loadingChange()
	}
})