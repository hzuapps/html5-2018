var app = getApp()
Page({
  data: {
    hidden: false,
    curNav: 1,
    curIndex: 0,
    cart: [],
    cartTotal: 0,
    navList: [
      {
        id: 1,
        name: '热销'
      },
      {
        id: 2,
        name: '荤类'
      },
      {
        id: 3,
        name: '素类'
      },
      {
        id: 4,
        name: '小吃'
      }
    ],
    dishesList: [
      [
        {
          name: "红烧肉",
          price: 25,
          num: 1,
          id: 1
        },
        {
          name: "湿炒牛河",
          price: 20,
          num: 1,
          id: 29
        },
        {
          name: "酸菜鱼",
          price: 88,
          num: 1,
          id: 2
        }
      ],
      [
        {
          name: "北京烤鸭",
          price: 98,
          num: 1,
          id: 3
        },
        {
          name: "尖椒炒牛肉",
          price: 28,
          num: 1,
          id: 4
        }
      ],
      [
        {
          name: "番茄炒鸡蛋",
          price: 15,
          num: 1,
          id: 5
        },
        {
          name: "炒时蔬",
          price: 12,
          num: 1,
          id: 6
        }
      ],
      []
    ],
    dishes: []
  },
  loadingChange() {
    setTimeout(() => {
      this.setData({
        hidden: true
      })
    }, 2000)
  },
  selectNav(event) {
    let id = event.target.dataset.id,
      index = parseInt(event.target.dataset.index);
    self = this;
    this.setData({
      curNav: id,
      curIndex: index
    })
  },
  // 选择菜品
  selectDish(event) {
    let dish = event.currentTarget.dataset.dish;
    let flag = true;
    let cart = this.data.cart;

    if (cart.length > 0) {
      cart.forEach(function (item, index) {
        if (item == dish) {
          cart.splice(index, 1);
          flag = false;
        }
      })
    }
    if (flag) cart.push(dish);
    this.setData({
      cartTotal: cart.length
    })
    this.setStatus(dish)
  },
  setStatus(dishId) {
    let dishes = this.data.dishesList;
    for (let dish of dishes) {
      dish.forEach((item) => {
        if (item.id == dishId) {
          item.status = !item.status || false
        }
      })
    }

    this.setData({
      dishesList: this.data.dishesList
    })
  },
  onLoad() {
    this.loadingChange()
  }
})