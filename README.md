
# Rubikal Algorithm 
## Problem 1
Using your favorite language, please model a Coach, a Student, and the relationship between them. Given a list of students and a list of coaches, please create an algorithm to distribute the students evenly between the coaches.
For example, given 3 coaches and 20 students, the distribution should be as follows:
Coach 1: 7
Coach 2: 7
Coach 3: 6
 
## Problem 2
Some coaches may already have students. Please change your distribution algorithm so that the distribution correctly distributes the students even if the coaches already have students on their list.
For example, given 3 coaches:
Coach 1: 7 students
Coach 2: 7 students
Coach 3: 6 students
And given a new list of 10 students, the final distribution would be:
Coach 1: 10 students
Coach 2: 10 students
Coach 3: 10 students


## So?
I coded an algorithm with Typescript And the unit tests with Mocha & Chai 

## Use it
* First of all clone this repo by :
>  git clone https://github.com/bishoymelek/Rubikal-Assigning-Algorithm.git

* Enter the folder of the project with:
> cd Rubikal-Assigning-Algorithm

* Install the npm modules:
> npm i

* to run tests 
> mocha

* If you edited the two .ts files (algorithm and tests file) , run the following and It will keep watching the edits and compile them:
>  tsc @ts-files.txt -w