{
  let arr = Array.of(3,4,7,9,11);//转换成数组
  console.log('arr=',arr);

  let empty=Array.of();
  console.log('empty',empty);
}

{
  let p=document.querySelectorAll('p');
  let pArr=Array.from(p);//将伪数组转换成数组
  pArr.forEach(function(item){
    console.log(item.textContent);
  });

  console.log(Array.from([1,3,5],function(item){return item*2}));
}

{
  console.log('fill-7',[1,'a',undefined].fill(7));//将数组覆盖替换 第一个值替换数 开始替换下标 结束替换下标
  console.log('fill,pos',['a','b','c'].fill(7,1,3));
}

{
  for(let index of ['1','c','ks'].keys()){//返回下标
    console.log('keys',index);
  }
  for(let value of ['1','c','ks'].values()){//返回value值
    console.log('values',value);
  }
  for(let [index,value] of ['1','c','ks'].entries()){//返回下标和value
    console.log('values',index,value);
  }
}

{
  console.log([1,2,3,4,5].copyWithin(0,3,4));//覆盖数 第一个开始替换下标 替换值得下标 结束替换下标
}

{
  console.log([1,2,3,4,5,6].find(function(item){return item>3}));//查找数组中第一个符合条件的数
  console.log([1,2,3,4,5,6].findIndex(function(item){return item>3}));//查找数组中第一个符合条件数的下标
}

{
  console.log('number',[1,2,NaN].includes(1));//是否包含
  console.log('number',[1,2,NaN].includes(NaN));
}
