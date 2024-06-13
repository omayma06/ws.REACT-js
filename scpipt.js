function addUp(num) {
	let sum = 0;
	for(let i=1;i<=num;i++){
		sum=sum+i;
    }
	return sum;
	const result = addUp(8)
	console.log(result);
		
                  }
                  //Got 10 XP

                  function WhitchIsLarger(g, f) {
                    const resultF = f();
                    const resultG = g();
                
                    if (resultF > resultG) {
                        return 'f';
                    } else if (resultG > resultF) {
                        return 'g';
                    } else {
                        return 'neither';
                    }
                }
                //Got 20 XP
                function cubes(a) {
                    return a ** 3
                }
                //Got 25 XP



                /*Créez une fonction javascript qui prend un tableau de nombres et renvoie les nombres minimum et maximum, 
                dans cet ordre .Exemples minMax([1, 2, 3, 4, 5]) ➞ [1, 5] minMax([2334454, 5 ]) ➞ [5, 2334454] minMax([1]) ➞ [1, 1]*/
                function minMax(numbers) {
                    if (numbers.length === 0) {
                        return []; // Return an empty array for an empty input array.
                    }
                
                    let min = numbers[0];
                    let max = numbers[0];
                
                    for (let i = 1; i < numbers.length; i++) {
                        if (numbers[i] < min) {
                            min = numbers[i];
                        } else if (numbers[i] > max) {
                            max = numbers[i];
                        }
                    }
                
                    return [min, max];
                }
                
               //Got 35 XP
               

               /*Créez une fonction qui trouve la plage maximale du troisième bord d'un triangle, où les longueurs des côtés sont toutes
                des nombres entiers. Exemples nextEdge(8, 10) ➞ 17 nextEdge(5, 7) ➞ 11 nextEdge(9, 2) ➞ 10 
                Notes (side1 + side2) - 1 = plage maximale du troisième bord. Les longueurs des côtés du triangle sont des entiers 
                positifs. N'oubliez pas de renvoyer le résultat. */

                function nextEdge(side1, side2) {
                    return (side1 + side2) - 1;
                }
                
               //Got 40

               /*Function that converts years to days */
               function CalcAge(age){
                return(age*365);
               }
               //Got 45
               /*Function hello */
               function hello(){
                return"hello edabit.com";
               }
               //Got 50


            /*Function that returns the longest Non repeating sub string */ 
               function longestNonrepeatingSubstring(s) {
                let longestSubstring = '';
                let currentSubstring = '';
            
                for (let char of s) {
                    const index = currentSubstring.indexOf(char);
            
                    if (index === -1) {
                        currentSubstring += char;
                    } else {
                       
                        currentSubstring = currentSubstring.slice(index + 1) + char;
                    }
                    if (currentSubstring.length > longestSubstring.length) {
                        longestSubstring = currentSubstring;
                    }
                }
            
                return longestSubstring;
            }
            
           // Got 210
            