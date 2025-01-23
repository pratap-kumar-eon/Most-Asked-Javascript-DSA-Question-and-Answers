function fun(arr1,arr2){
    const result={}
    
  arr1.forEach((obj)=>{
      result[obj.id] = {...obj}
  })
  
  arr2.forEach((obj)=>{
      result[obj.id] = {...result[obj.id],...obj}
  })
  
  return Object.values(result).sort((a,b)=>a.id-b.id)
}

const arr1 = [
    { "id": 1, "x": 2, "y": 3 },
    { "id": 2, "x": 3, "y": 6 }
];

const arr2 = [
    { "id": 2, "x": 10, "y": 20 },
    { "id": 3, "x": 0, "y": 0 }
];
console.log(fun(arr1,arr2))

// output
/*
[
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 }
] 
 */