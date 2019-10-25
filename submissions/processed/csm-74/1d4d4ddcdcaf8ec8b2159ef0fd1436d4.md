# [Back to main](https://github.com/glaghari/database-assignement-2019)
<!-- -->
>     -- Create branch table.
>     
>     -- CONSTRAINTS
>     -- There should only be one branch in a city.
>     
>     create table Branch (
>        branch_id char(4),
>        city varchar2(20) not null,
>        address varchar2(20) not null,
>        unique(city),
>        primary key (branch_id)
>     );
> 
> ✓

<!-- -->
>     -- Create an employee table.
>     
>     -- CONSTRAINTS
>     -- An employee must get a minimum salary of 20000
>     -- and an employee can not get more than 200000.
>     
>     create table Employee (
>        emp_id char(4),
>        first_name varchar2(20) not null,
>        last_name varchar2(20) not null,
>        email varchar2(30),
>        position varchar2(10) check (position in ('Worker', 'Supervisor', 'Manager')) not null,
>        gender char default 'M' check (gender in ('M', 'F')) not null,
>        dob date not null,
>        hire_date date not null,
>        salary number(6) check (salary between 30000 and 200000),
>        branch_id char(4),
>        primary key (emp_id),
>        foreign key (branch_id) references Branch (branch_id)
>     );
> 
> ✓

<!-- -->
>     -- Add some branches
>     
>     begin
>     insert into Branch values('B002', 'Jamshoro', 'SU Society Phase 1');
>     insert into Branch values('B001', 'Hyderabad', 'Saddar');
>     insert into Branch values('B003', 'Mirpurkhas', 'Main Hyderabad road');
>     insert into Branch values('B004' ,'karachi' , '4G Society');
>     insert into Branch values('B005' ,'hala' , '3G Society');
>     insert into Branch values('B006' ,'new saedabad' , 'station road ');
>     end;
>     /
> 
1 rows affected

<!-- -->
>     -- Add some employees
>     -- DATE format is 'YYYY-MM-DD'
>     begin
>     insert into Employee
>       (emp_id, first_name, last_name, email, position, dob, hire_date, salary, branch_id)
>       values('E001', 'Arsalan', 'Memon', 'arsalan.memon@gmail.com', 'Worker', date '1990-02-11', date '2019-02-11', 32000, 'B001');
>     insert into Employee
>       values('E002', 'Arshad', 'Memon', 'arshad.memon@yahoo.com', 'Manager', 'M', date '1980-02-10', date '2010-11-02', 100000, 'B001');
>     insert into Employee
>       values('E003', 'Basit', 'Memon', 'basit.memon@gmail.com', 'Supervisor', 'M', date '1985-02-21', date '2015-01-02', 45000, 'B001');
>     end;
>     /
> 
1 rows affected

<!-- -->
>     -- Show all branches
>     select * from Branch;
> 
> | BRANCH_ID | CITY         | ADDRESS             |
> | :-------- | :----------- | :------------------ |
> | B002      | Jamshoro     | SU Society Phase 1  |
> | B001      | Hyderabad    | Saddar              |
> | B003      | Mirpurkhas   | Main Hyderabad road |
> | B004      | karachi      | 4G Society          |
> | B005      | hala         | 3G Society          |
> | B006      | new saedabad | station road        |

<!-- -->
>     -- Show all employees
>     select * from Employee;
> 
> | EMP_ID | FIRST_NAME | LAST_NAME | EMAIL                   | POSITION   | GENDER | DOB       | HIRE_DATE | SALARY | BRANCH_ID |
> | :----- | :--------- | :-------- | :---------------------- | :--------- | :----- | :-------- | :-------- | -----: | :-------- |
> | E001   | Arsalan    | Memon     | arsalan.memon@gmail.com | Worker     | M      | 11-FEB-90 | 11-FEB-19 |  32000 | B001      |
> | E002   | Arshad     | Memon     | arshad.memon@yahoo.com  | Manager    | M      | 10-FEB-80 | 02-NOV-10 | 100000 | B001      |
> | E003   | Basit      | Memon     | basit.memon@gmail.com   | Supervisor | M      | 21-FEB-85 | 02-JAN-15 |  45000 | B001      |

<!-- -->
>     -- Query -> List the details of employees workig at Hyderabad branch.
>     -- First we can find the branch id of Hyderabad city from branch table.
>     -- Then use the branch id to restrict the rows in employee table.
>     select branch_id from Branch where city = 'Hyderabad';
> 
> | | BRANCH_ID | |
> | | :-------- | |
> | | B001      | |

<!-- -->
>     -- Now list the details of employees workig at Hyderabad branch.
>     select * from Employee where branch_id = 'B001';
> 
> | EMP_ID | FIRST_NAME | LAST_NAME | EMAIL                   | POSITION   | GENDER | DOB       | HIRE_DATE | SALARY | BRANCH_ID |
> | :----- | :--------- | :-------- | :---------------------- | :--------- | :----- | :-------- | :-------- | -----: | :-------- |
> | E001   | Arsalan    | Memon     | arsalan.memon@gmail.com | Worker     | M      | 11-FEB-90 | 11-FEB-19 |  32000 | B001      |
> | E002   | Arshad     | Memon     | arshad.memon@yahoo.com  | Manager    | M      | 10-FEB-80 | 02-NOV-10 | 100000 | B001      |
> | E003   | Basit      | Memon     | basit.memon@gmail.com   | Supervisor | M      | 21-FEB-85 | 02-JAN-15 |  45000 | B001      |

*db<>fiddle [here](https://dbfiddle.uk/?rdbms=oracle_11.2&fiddle=1d4d4ddcdcaf8ec8b2159ef0fd1436d4)*

