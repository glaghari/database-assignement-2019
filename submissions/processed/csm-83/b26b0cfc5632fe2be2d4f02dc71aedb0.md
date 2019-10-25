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
>     insert into Branch values('B005', 'Shikarpur', 'Lakhidar Road');
>     insert into Branch values('B004', 'Mithi', 'Ghadi Bhit');
>     insert into Branch values('B006', 'Karachi', 'University Road');
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
>       values('E002', 'Arshad', 'Memon', 'arshad.memon@yahoo.com', 'Manager', 'M', date '1980-02-10', date '2010-11-02', 100000, 'B002');
>     insert into Employee
>       values('E003', 'Basit', 'Memon', 'basit.memon@gmail.com', 'Supervisor', 'M', date '1985-02-21', date '2015-01-02', 45000, 'B003');
>     insert into Employee
>       values('E004', 'Ahmed Ali', 'Kalhoro', 'AhmedAli.kalhoro@gmail.com', 'Worker', 'M', date '1991-05-08', date '2017-08-03', 120000, 'B004' );
>     insert into Employee
>       values('E005', 'Sultan Ahmed', 'Kalhoro', 'Sultan.ahmed@gmail.com', 'Manager', 'M', date '1991-02-02', date '2018-07-15', 80000, 'B005');
>     insert into Employee
>       values('E006', 'Muhammad Arif', 'Kalhoro', 'Arif.kalhoro@gmail.com', 'Supervisor', 'M', date '1992-11-25', date '2017-11-29', 150000, 'B006');
>     insert into Employee
>       values('E007', 'Muhammad', 'Qureshi', 'Muhammad.qureshi@gmail.com', 'Supervisor', 'M', date '1995-08-14', date '2017-10-17', 92000, 'B001');
>     insert into Employee
>       values('E008', 'Mansab', 'Abro', 'Mansab.abro@gmail.com', 'Manager', 'M', date '1998-06-20', date '2016-01-02', 70000 , 'B002');
>     insert into Employee
>       values('E009', 'Zeeshan', 'Khaskhali', 'Zeeshan.khaskhali@gmail.com','Supervisor', 'M', date '1992-12-23', date '2013-04-19', 80000, 'B003');
>     insert into Employee
>       values('E010', 'Jahanzaib', 'Abro', 'Jahanzaib.abro@gmail.com', 'Worker', 'M', date '1989-04-28', date  '2012-08-12', 52000, 'B004');
>     insert into Employee
>       values('E011', 'Khalil', 'khanzada', 'Khalil.khanzada@gmail.com', 'Manager', 'M', date '1997-03-14', date '2014-09-04', 98000, 'B005');
>     insert into Employee
>       values('E012', 'Mazhar', 'Rind', 'Mazhar.rind@gmail.com', 'Supervisor', 'M', date '1997-01-01',  date '2012-07-29', 200000, 'B006');
>     end;
>     /
> 
1 rows affected

<!-- -->
>     -- Show all branches
>     select * from Branch;
> 
> | BRANCH_ID | CITY       | ADDRESS             |
> | :-------- | :--------- | :------------------ |
> | B002      | Jamshoro   | SU Society Phase 1  |
> | B001      | Hyderabad  | Saddar              |
> | B003      | Mirpurkhas | Main Hyderabad road |
> | B005      | Shikarpur  | Lakhidar Road       |
> | B004      | Mithi      | Ghadi Bhit          |
> | B006      | Karachi    | University Road     |

<!-- -->
>     -- Show all employees
>     select * from Employee;
> 
> | EMP_ID | FIRST_NAME    | LAST_NAME | EMAIL                       | POSITION   | GENDER | DOB       | HIRE_DATE | SALARY | BRANCH_ID |
> | :----- | :------------ | :-------- | :-------------------------- | :--------- | :----- | :-------- | :-------- | -----: | :-------- |
> | E001   | Arsalan       | Memon     | arsalan.memon@gmail.com     | Worker     | M      | 11-FEB-90 | 11-FEB-19 |  32000 | B001      |
> | E002   | Arshad        | Memon     | arshad.memon@yahoo.com      | Manager    | M      | 10-FEB-80 | 02-NOV-10 | 100000 | B002      |
> | E003   | Basit         | Memon     | basit.memon@gmail.com       | Supervisor | M      | 21-FEB-85 | 02-JAN-15 |  45000 | B003      |
> | E004   | Ahmed Ali     | Kalhoro   | AhmedAli.kalhoro@gmail.com  | Worker     | M      | 08-MAY-91 | 03-AUG-17 | 120000 | B004      |
> | E005   | Sultan Ahmed  | Kalhoro   | Sultan.ahmed@gmail.com      | Manager    | M      | 02-FEB-91 | 15-JUL-18 |  80000 | B005      |
> | E006   | Muhammad Arif | Kalhoro   | Arif.kalhoro@gmail.com      | Supervisor | M      | 25-NOV-92 | 29-NOV-17 | 150000 | B006      |
> | E007   | Muhammad      | Qureshi   | Muhammad.qureshi@gmail.com  | Supervisor | M      | 14-AUG-95 | 17-OCT-17 |  92000 | B001      |
> | E008   | Mansab        | Abro      | Mansab.abro@gmail.com       | Manager    | M      | 20-JUN-98 | 02-JAN-16 |  70000 | B002      |
> | E009   | Zeeshan       | Khaskhali | Zeeshan.khaskhali@gmail.com | Supervisor | M      | 23-DEC-92 | 19-APR-13 |  80000 | B003      |
> | E010   | Jahanzaib     | Abro      | Jahanzaib.abro@gmail.com    | Worker     | M      | 28-APR-89 | 12-AUG-12 |  52000 | B004      |
> | E011   | Khalil        | khanzada  | Khalil.khanzada@gmail.com   | Manager    | M      | 14-MAR-97 | 04-SEP-14 |  98000 | B005      |
> | E012   | Mazhar        | Rind      | Mazhar.rind@gmail.com       | Supervisor | M      | 01-JAN-97 | 29-JUL-12 | 200000 | B006      |

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
> | EMP_ID | FIRST_NAME | LAST_NAME | EMAIL                      | POSITION   | GENDER | DOB       | HIRE_DATE | SALARY | BRANCH_ID |
> | :----- | :--------- | :-------- | :------------------------- | :--------- | :----- | :-------- | :-------- | -----: | :-------- |
> | E001   | Arsalan    | Memon     | arsalan.memon@gmail.com    | Worker     | M      | 11-FEB-90 | 11-FEB-19 |  32000 | B001      |
> | E007   | Muhammad   | Qureshi   | Muhammad.qureshi@gmail.com | Supervisor | M      | 14-AUG-95 | 17-OCT-17 |  92000 | B001      |

*db<>fiddle [here](https://dbfiddle.uk/?rdbms=oracle_11.2&fiddle=b26b0cfc5632fe2be2d4f02dc71aedb0)*

