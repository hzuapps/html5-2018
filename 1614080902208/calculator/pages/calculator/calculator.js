Page({
  data: {
    value: null, // 上次计算后的结果，null表示没有上次计算的结果
    displayValue: '0', // 显示数值
    operator: null, // 上次计算符号，null表示没有未完成的计算
    waitingForOperand: false // 前一按键是否为计算符号
  },

  onLoad: function (options) {
    this.calculatorOperations = {
      'key-divide': (prevValue, nextValue) => prevValue / nextValue,
      'key-multiply': (prevValue, nextValue) => prevValue * nextValue,
      'key-add': (prevValue, nextValue) => prevValue + nextValue,
      'key-subtract': (prevValue, nextValue) => prevValue - nextValue,
      'key-equals': (prevValue, nextValue) => nextValue
    }
  },

  /* AC操作，一下回到解放前 */
  clearAll() {
    this.setData({
      value: null,
      displayValue: '0',
      operator: null,
      waitingForOperand: false
    })
  },

  /* 仅清空当前显示的输入值 */
  clearDisplay() {
    this.setData({
      displayValue: '0'
    })
  },

  onTapFunction: function (event) {
    const key = event.target.dataset.key;

    switch (key) {
      case 'key-clear':
        if (this.data.displayValue !== '0') {
          this.clearDisplay();
        } else {
          this.clearAll();
        }

        break;

      case 'key-sign':
        var newValue = parseFloat(this.data.displayValue) * -1

        this.setData({
          displayValue: String(newValue)
        })

        break;

      case 'key-percent':
        const fixedDigits = this.data.displayValue.replace(/^-?\d*\.?/, '')
        var newValue = parseFloat(this.data.displayValue) / 100

        this.setData({
          displayValue: String(newValue.toFixed(fixedDigits.length + 2))
        });

        break;

      default:
        break;
    }
  },

  onTapOperator: function (event) {
    const nextOperator = event.target.dataset.key;
    const inputValue = parseFloat(this.data.displayValue);

    if (this.data.value == null) {
      this.setData({
        value: inputValue
      });
    } else if (this.data.operator) {
      const currentValue = this.data.value || 0;
      const newValue = this.calculatorOperations[this.data.operator](currentValue, inputValue);

      this.setData({
        value: newValue,
        displayValue: String(newValue)
      });
    }

    this.setData({
      waitingForOperand: true,
      operator: nextOperator
    });
  },

  onTapDigit: function (event) {
    const key = event.target.dataset.key; // 根据data-key标记按键

    if (key == 'key-dot') {
      // 按下点号
      if (!(/\./).test(this.data.displayValue)) {
        this.setData({
          displayValue: this.data.displayValue + '.',
          waitingForOperand: false
        })
      }
    } else {
      // 按下数字键
      const digit = key[key.length - 1];

      if (this.data.waitingForOperand) {
        this.setData({
          displayValue: String(digit),
          waitingForOperand: false
        })
      } else {
        this.setData({
          displayValue: this.data.displayValue === '0' ? String(digit) : this.data.displayValue + digit
        })
      }
    }
  }
})
