let newarr=[2,3,4,5,6,7,8,9,10]
const newnum=newarr
            .map((num) => num*10)//the result of frist map is passed to second chained map mean the output of frist map is "[20, 30, 40,  50, 60, 70, 80, 90, 100] "
            .map( (num) => num+1)//and this "passed to second map method" and "the output of second chain map is passed to third filter method"
            .filter( (num) => num>=50 )// output of second map:-[21, 31, 41,  51, 61, 71, 81, 91, 101]
 console.log(newnum)//[51, 61, 71, 81, 91, 101]