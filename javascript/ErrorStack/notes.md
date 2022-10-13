## Javascript Error Types

 - **Syatax Error**: This error will be thrown when a typo creates invalid code — code that cannot be interpreted by the compiler. When this error is thrown, scan your code to make sure you properly opened and closed all brackets, braces, and parentheses and that you didn’t include any invalid semicolons.
 - **ReferenceError**: This error will be thrown if you try to use a variable that does not exist. When this error is thrown, make sure all variables are properly declared.
 - **TypeError**: This error will be thrown if you attempt to perform an operation on a value of the wrong type. For example, if we tried to use a string method on a number, it would throw a TypeError.

## Debugging Errors
Here’s a process for efficiently working through your code’s errors one by one:

 - Run your code. Using the first error’s stack trace, identify the error’s type, description, and location.
 - Go to the file name and line number indicated by the error stack trace. Using the error type and description, identify the bug in your code.
 - Fix the bug and re-run your code.
 - Repeat steps 1-3 until your code no longer throws any errors.

While these steps may seem simple, it can be easy to get overwhelmed by errors in practice. Using these steps, you can tackle your errors one at a time and soon will have your code running error-free.

You locate Silent Bugs with **console.log**

## Debugging with console.log()

 - Go to the beginning of the malfunctioning code. Print out all starting variables, existing values, and arguments using console.log(). If the values are what you expect, move on to the next piece of logic in the code. If not, you have identified a bug and should skip to step 3.
 - After the next piece of logic in your code, add console.log() statements to ensure updated variables have the values that you now expect and that the block of code is being executed. If that logic is executing properly, continue repeating this step until you find a line not working as expected, then move to step 3.
 - Fix the identified bug and run your code again. If it now works as expected, you’ve finished debugging! If not, continue stepping through your code using step 2 until it does.