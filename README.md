# Q-1:  What is the difference between var, let, and const?
* Answer: 
        var: * var is function scoped.
             * var can be hoisted.
             * var can be redeclared in the same scope.
             * var can be reassigned.
        
        let: * let is blocked scoped.
             * let cannot be hoisted.
             * let cannot be redeclared in the same scope.
             * let can be reassigned.

        const: * const is blocked scoped.
               * const cannot be hoisted.
               * const cannot be redeclared in the same scope.
               * const cannot be reassigned. 

# Q-2: What is the difference between map(), forEach(), and filter()?
* Answer: map(), forEach() and filter() are three methods of array.
         
         map(): * map() creates a new array of same length from an array.
                * map() accepts a callback function, which converts each element of the array.

        forEach(): *  forEach() perform an operation on each elements of an array.
                   * forEach() accepts a callback function, which contains the operation to be    performed on each element of the array.
                   

        filter(): * filter accepts a callback function, which filter the elements of an array
                    according to the given condition in the callback function and return a new array with the filtered elements of the array.    
                  *
                  *     

# Q-3: What are arrow functions in ES6?
* Answer: 
               * The arrow functions in ES6 is a convention to declare a function.
               * An arrow function is declared with an arrow notation instead of 'function' keyword.
               * The arrow function has to be assigned in a variable and the variable will be the function name.
               * when an arrow function is passed as an callback function, it is no need to assigned to a variable.

# Q-4: How does destructuring assignment work in ES6?
* Answer: There are two types of destructuring: array and object.

          Array destructuring: * An element of array has to be accessed with its index.
                               * Destructuring array provides the facility to assign an element to a variable and the element can be accessed with the variable.

          Object destructuring: * A property of an object is accessed using 'dot(.)' notation
                                  or 'dictionary([])'.
                                * Destructuring object with specific property or properties provide facility to use the property as a variable.        
# Q-5: Explain template literals in ES6. How are they different from string concatenation?
* Answer: 
           * The template literals in ES6 provide the facility to use JavaScript expression within a string.
           * In template literals the string is written inside backticks (``).
           * The JS expressions have to be written inside '${exp}'.

