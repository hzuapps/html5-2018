Page({
  data: {
    back: 'back',
    C: 'C',
    addSub: 'addSub',
    add: '+',
    sub: '-',
    mut: '×',
    div: '÷',
    equ: '=',
    history: 'history',
    dot: '.',
    id0: '0',
    id1: '1',
    id2: '2',
    id3: '3',
    id4: '4',
    id5: '5',
    id6: '6',
    id7: '7',
    id8: '8',
    id9: '9',
    result: '0',
    valiBackOfArray: ['+', '-', '×', '÷', '.'],
    completeCalculate: false
  },
  // 计算结果
  calculate: function (str) {
    // 判断是不是有负数
    var isNagativeNum = false;
    if (str.charAt(0) == '-') {
      str = str.replace('-', '').replace('(', '').replace(')', '');
      isNagativeNum = true;
    }
    // 对字符串解析并运算
    var addArray = str.split('+');
    var sum = 0.0;
    for (var i = 0; i < addArray.length; i++) {
      if (addArray[i].indexOf('-') == -1) {
        if (addArray[i].indexOf('×') != -1 || addArray[i].indexOf('÷') != -1)
          sum += this.calculateMutDiv(addArray[i]);
        else sum += Number(addArray[i]);
      }

      else {
        var subArray = addArray[i].split('-');
        var subSum = 0;
        if (subArray[0].indexOf('×') != -1 || subArray[0].indexOf('÷') != -1) subSum = this.calculateMutDiv(subArray[0]);

        else subSum = Number(subArray[0]);
        for (var j = 1; j < subArray.length; j++) {
          if (subArray[i].indexOf('×') != -1 || subArray[i].indexOf('÷') != -1)
            subSum -= this.calculateMutDiv(subArray[j]);
          else subSum -= Number(subArray[j]);
        }

        sum += subSum;

      }

    }

    if (isNagativeNum) return (-sum).toString();

    else return sum.toString();

  },
  // 分块乘除运算
  calculateMutDiv: function (str) {
    var addArray = str.split('×');
    var sum = 1.0;
    for (var i = 0; i < addArray.length; i++) {
      if (addArray[i].indexOf('÷') == -1) {
        sum *= Number(addArray[i]);
      }
      else {
        var subArray = addArray[i].split('÷');
        var subSum = Number(subArray[0]);
        for (var j = 1; j < subArray.length; j++) {
          subSum /= Number(subArray[j]);
        }
        sum *= subSum;
      }
    }
    return sum;
  },
  // 是否以运算符结尾
  isOperatorEnd: function (str) {
    for (var i = 0; i < this.data.valiBackOfArray.length; i++) {
      if (str.charAt(str.length - 1) == this.data.valiBackOfArray[i]) return true;
    }
    return false;
  },
  clickButton: function (event) {
    if (this.data.result == 0) {
      if (event.target.id == 'back' || event.target.id == 'C' || event.target.id == 'addSub' || event.target.id == 'history' || event.target.id == '+' || event.target.id == '-' || event.target.id == '×' || event.target.id == '÷' || event.target.id == '=') return;
      this.setData({ result: event.target.id });
    }
    else if (event.target.id == 'back') {

      this.setData({ result: this.data.result.length == 1 ? '0' : this.data.result.substring(0, this.data.result.length - 1) });
    }
    else if (event.target.id == 'C') {
    this.setData({ result: '0' });

    }
    else if (event.target.id == 'addSub') {
      var r = this.data.result;
      if (this.isOperatorEnd(r)) return;
      if (r.charAt(0) == '-') this.setData({ result: r.replace('-', '').replace('(', '').replace(')', '') });
      else this.setData({ result: '-(' + r + ')' });
    }
    else if (event.target.id == 'history') {
    }
    else if (event.target.id == '=') {
      if (this.isOperatorEnd(this.data.result)) return;
      this.setData({ result: this.calculate(this.data.result) });
      this.setData({ completeCalculate: true });
    }
    else {
      if (this.isOperatorEnd(this.data.result) && this.isOperatorEnd(event.target.id)) return;
      // 如果计算结果有小数点，直到输入运算符前不能再输入小数点
      if (this.data.completeCalculate && this.data.result.indexOf('.') != -1 && event.target.id == '.') return;
      for (var i = 0; i < this.data.valiBackOfArray.length - 1; i++) {
       if (this.data.valiBackOfArray[i] == event.target.id) {
          this.setData({ completeCalculate: false });
          break;
        }
      }
      this.setData({ result: this.data.result + event.target.id });
    }
  }
})
