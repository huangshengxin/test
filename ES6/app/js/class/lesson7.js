{
  function test(x, y = 'world'){//设置默认值
    console.log('默认值',x,y);
  }
  test('hello');
  test('hello','kill');
}

{
  let x='test';//
  function test2(x,y=x){
    console.log('作用域',x,y);
  }
  test2('kill');
}

{
  function test3(...arg){//将所有参数转换数组...
    for(let v of arg){
      console.log('rest',v);
    }
  }
  test3(1,2,3,4,'a');
}

{
  console.log(...[1,2,4]);
  console.log('a',...[1,2,4]);
}

{
  let arrow = v => v*2;//箭头函数 函数名 函数参数 函数返回值
  let arrow2 = () => 5;
  console.log('arrow',arrow(3));
  console.log(arrow2());

}

{
  function tail(x){//伪调用 提升性能
    console.log('tail',x);
  }
  function fx(x){
    return tail(x)
  }
  fx(123)
}
