// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

// Example:
//"(p1**n1)(p2**n2)...(pk**nk)"

//with the p(i) in increasing order and n(i) empty if n(i) is 1.

//Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
'use strict'
function primeFactors(n){
   
   class Prime {
   		constructor(num) {
   			this.num = num;
   			this.decompositionString = '';
   		};
   		
   		isPrime() {
   			let start = 2;

   			while(start <= Math.sqrt(this.num)) {
   				console.log(Math.sqrt(this.num));
   				if (this.num % start++ < 1) {
   					return false;
   				}
   			}

   			return this.num > 1;
   		}

			gcd(a, b) {
				if (! b) {
					return a;
				}

				return gcd(b, a % b);
			}

   }

   // Instanciate the Prime Class:
   let primeDecomp = new Prime(n);

   // test:
   console.log(primeDecomp.gcd(10));
   return primeDecomp.decompositionString;
}

console.log(primeFactors(2));