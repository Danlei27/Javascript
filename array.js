var  nums = [8,7,9,5,3]
console.log(nums)
for(var p = 0; nums.length > p; p++ ){
    console.log(nums[p])
}
/* ou */
for(var p2 in nums){
    console.log(nums[p2])
}
console.log(nums.sort())/* vai organizar os números, em forma crescente*/
console.log(nums.length)/* conta quantidades de elementos no array */
nums.push(9)/* var acrescentar um valor no final do array. ou nums[5] = 9 */
console.log(nums)
console.log(nums.indexOf(7))/* vai identificar, onde está localizado o indice do elemento, sua (posição)*/
