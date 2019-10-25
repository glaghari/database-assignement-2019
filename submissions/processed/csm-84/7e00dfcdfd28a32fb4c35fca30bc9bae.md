# [Back to main](https://github.com/glaghari/database-assignement-2019)
<!-- -->
>     
>     create table PropertyForRent (
>         propertyNo char(4) not null,
>         street varchar(30) not null,
>         city varchar(20) not null,
>         postcode varchar(10) not null,
>         type_ varchar(10) not null,
>         rooms int not null,
>         rent int not null,
>         ownerNo varchar(4) not null,
>         
>         primary key (propertyNo)
>         
>     );
> 
> ✓

<!-- -->
>     insert into PropertyForRent (propertyNo, street, city, postcode, type_, rooms, rent, ownerNo)
>     
>     SELECT 'PA14', '16 Holhead Rd', 'Aberdeen', 'AB7 5SU', 'House', 6, 650, 'CO46'  FROM dual UNION ALL
>     SELECT 'PL94', '6 Argyll St', 'London', 'NW2', 'Flat', 4, 400, 'CO87'           FROM dual UNION ALL
>     SELECT 'PG4', '6 Lawrence St', 'Glasgow', 'G11 9QX', 'Flat', 3, 350, 'CO40'     FROM dual UNION ALL
>     SELECT 'PG36', '2 Manor Rd', 'Glasgow', 'G32 4QX', 'Flat', 3, 375, 'CO93'       FROM dual UNION ALL
>     SELECT 'PG21', '18 Dale Rd', 'Glasgow', 'G312', 'House', 5, 600, 'CO87'         FROM dual UNION ALL 
>     SELECT 'PG16', '5 Novar Dr', 'Glasgow', 'G12 9AX', 'Flat', 4, 450, 'CO93'       FROM dual
>     ;
> 
6 rows affected

<!-- -->
>     create table PrivateOwner (
>         ownerNo varchar(4),
>         fName varchar(10) not null,
>         lName varchar(10) not null,
>         address varchar(30) not null,
>         telNo varchar(15) not null,
>         
>         primary key (ownerNo)
>     
>     );
> 
> ✓

<!-- -->
>     insert into PrivateOwner (ownerNo, fName, lName, address, telNo)
>     
>     SELECT 'CO46', 'Joe', 'Keogh', '2 Fergus Dr, Aberdeen AB2 7SX', '01224-861212'    FROM dual UNION ALL
>     SELECT 'CO87', 'Carol', 'Farrel', '6 Achray St, Glasgow G32 9DX', '0141-357-7419' FROM dual UNION ALL
>     SELECT 'CO40', 'Tine', 'Murphy', '63 Well St, Glasgow G42', '0141-943-1728'       FROM dual UNION ALL
>     SELECT 'CO93', 'Tony', 'Shaw', '12 Park Pl, Glasgow G4 0QR', '0141-225-7025'      FROM dual 
>     ;
> 
4 rows affected

<!-- -->
>     create table Client_ (
>       clientNo varchar(4),
>         fName varchar(10) not null,
>         lName varchar(10) not null,
>         address varchar(30) not null,
>         telNo varchar(15) not null,
>         maxRent int not null,
>         
>         primary key (clientNo)
>     );
> 
> ✓

<!-- -->
>     
>     SELECT 'CR76', 'John', 'Kay', '56 High St, London SW1 4EH', '0207-774-5632', 'Flat', 425        FROM dual UNION ALL
>     SELECT 'CR56', 'Aline', 'Stewart', '64 Fern Dr, Glasgow G42 0BL', '0141-848-1825', 'Flat', 350  FROM dual UNION ALL
>     SELECT 'CR74', 'Mike', 'Ritchie', '18 Tain St. PAIG 1YQ', '01475-392178', 'House', 750          FROM dual UNION ALL
>     SELECT 'CR62', 'Mary', 'Tregear', '5 Tarbot Rd, Aberdreen AB9 3ST', '01224-196720', 'Flat', 600 FROM dual
>     ;
> 
4 rows affected

<!-- -->
>     alter table PropertyForRent
>     ADD foreign key (ownerNo) references PrivateOwner (ownerNo);
> 
> ✓

<!-- -->
>     create table Lease (
>       leaseNo int not null,
>         propertyNo char(4) not null,
>         clientNo varchar(4) not null,
>         rent int not null,
>         paymentMethod varchar(10) not null,
>         deposit int not null,
>         paid char(1) not null,
>         rentStart date not null,
>         rentFinish date not null,
>         duration int not null,
>         
>         primary key (leaseNo),
>         foreign key (propertyNo) references PropertyForRent (propertyNo),
>         foreign key (clientNo) references Client_ (clientNo)    
>     );
> 
> ✓

<!-- -->
>     insert into Lease (leaseNo, propertyNo, clientNo, rent, paymentMethod, deposit, paid, rentStart, rentFinish, duration)
>     SELECT 10024, 'PA14', 'CR62', '650', 'Visa', 1300, 'Y', '1-Jun-2013', '31-May-2014', 12    FROM dual UNION ALL
>     SELECT 10075, 'PL94', 'CR76', '400', 'Cash', 800, 'N', '1-Aug-2013', '1-Jan-2014', 6          FROM dual UNION ALL
>     SELECT 10012, 'PG21', 'CR74', '600', 'Cheque', 1200, 'Y', '1-Jul-2013', '30-Jun-2014', 12      FROM dual
>     ;
> 
3 rows affected

<!-- -->
>     select * from PropertyForRent;
> 
> | PROPERTYNO | STREET        | CITY     | POSTCODE | TYPE_ | ROOMS | RENT | OWNERNO |
> | :--------- | :------------ | :------- | :------- | :---- | ----: | ---: | :------ |
> | PA14       | 16 Holhead Rd | Aberdeen | AB7 5SU  | House |     6 |  650 | CO46    |
> | PL94       | 6 Argyll St   | London   | NW2      | Flat  |     4 |  400 | CO87    |
> | PG4        | 6 Lawrence St | Glasgow  | G11 9QX  | Flat  |     3 |  350 | CO40    |
> | PG36       | 2 Manor Rd    | Glasgow  | G32 4QX  | Flat  |     3 |  375 | CO93    |
> | PG21       | 18 Dale Rd    | Glasgow  | G312     | House |     5 |  600 | CO87    |
> | PG16       | 5 Novar Dr    | Glasgow  | G12 9AX  | Flat  |     4 |  450 | CO93    |

<!-- -->
>     select * from PrivateOwner;
> 
> | OWNERNO | FNAME | LNAME  | ADDRESS                       | TELNO         |
> | :------ | :---- | :----- | :---------------------------- | :------------ |
> | CO46    | Joe   | Keogh  | 2 Fergus Dr, Aberdeen AB2 7SX | 01224-861212  |
> | CO87    | Carol | Farrel | 6 Achray St, Glasgow G32 9DX  | 0141-357-7419 |
> | CO40    | Tine  | Murphy | 63 Well St, Glasgow G42       | 0141-943-1728 |
> | CO93    | Tony  | Shaw   | 12 Park Pl, Glasgow G4 0QR    | 0141-225-7025 |

<!-- -->
>     select * from Client_;
> 
> | CLIENTNO | FNAME | LNAME   | ADDRESS                        | TELNO         | PREFTYPE | MAXRENT |
> | :------- | :---- | :------ | :----------------------------- | :------------ | :------- | ------: |
> | CR76     | John  | Kay     | 56 High St, London SW1 4EH     | 0207-774-5632 | Flat     |     425 |
> | CR56     | Aline | Stewart | 64 Fern Dr, Glasgow G42 0BL    | 0141-848-1825 | Flat     |     350 |
> | CR74     | Mike  | Ritchie | 18 Tain St. PAIG 1YQ           | 01475-392178  | House    |     750 |
> | CR62     | Mary  | Tregear | 5 Tarbot Rd, Aberdreen AB9 3ST | 01224-196720  | Flat     |     600 |

<!-- -->
>     select * from Lease;
> 
> | LEASENO | PROPERTYNO | CLIENTNO | RENT | PAYMENTMETHOD | DEPOSIT | PAID | RENTSTART | RENTFINISH | DURATION |
> | ------: | :--------- | :------- | ---: | :------------ | ------: | :--- | :-------- | :--------- | -------: |
> |   10024 | PA14       | CR62     |  650 | Visa          |    1300 | Y    | 01-JUN-13 | 31-MAY-14  |       12 |
> |   10075 | PL94       | CR76     |  400 | Cash          |     800 | N    | 01-AUG-13 | 01-JAN-14  |        6 |
> |   10012 | PG21       | CR74     |  600 | Cheque        |    1200 | Y    | 01-JUL-13 | 30-JUN-14  |       12 |

<!-- -->
>     create table Branch (
>       branchNo varchar(4) not null,
>         street varchar(20) not null,
>         city varchar(10) not null,
>         postCode varChar(10) not null,
>         
>         primary key (branchNo),
>         foreign key (branchNo) references Branch (branchNo)
>     
>     );
> 
> ✓

<!-- -->
>     create table staff (
>         staffNo varChar(4) not null,
>         fName varChar(10) not null,
>         lName varChar(10) not null,
>         position varChar(10) not null,
>         sex char, --check(sex between 'M' and 'F') default 'M',
>         DOB date not null,
>         salary int not null,
>         branchNo varchar(4) not null,
>         
>         primary key (staffNo)
>         
>     );
> 
> ✓

<!-- -->
>     insert into Branch (branchNo, street, city, postCode) values ('B005', '22 Deer Rd', 'London', 'SW1 4EH');
> 
1 rows affected

<!-- -->
>     insert into Branch (branchNo, street, city, postCode) values ('B007', '16 Argyll St', 'Aberdeen', 'AB2 3SU');
> 
1 rows affected

<!-- -->
>     insert into Branch (branchNo, street, city, postCode) values ('B003', '163 Main St', 'Glasgow', 'G11 9QX');
> 
1 rows affected

<!-- -->
>     insert into Branch (branchNo, street, city, postCode) values ('B004', '32 Manse Rd', 'Bristol', 'BS99 1NZ');
> 
1 rows affected

<!-- -->
>     insert into Branch (branchNo, street, city, postCode) values ('B002', '56 Clover Dr', 'London', 'NW10 6EU');
> 
1 rows affected

<!-- -->
>     insert all
>     into Staff (staffNo, fName, lName, position, sex, DOB, salary, branchNo) values ('SL21','John','White','Manager','M','1-Oct-1945', 30000 ,'B005')
>     into Staff (staffNo, fName, lName, position, sex, DOB, salary, branchNo) values ('SG37', 'Ann', 'Beech', 'Assistant', 'F', '10-Nov-1960', 12000,'B003')
>     into Staff (staffNo, fName, lName, position, sex, DOB, salary, branchNo) values ('SG14', 'David', 'Ford', 'Supervisoe', 'M', '24-Mar-1958', 18000,'B003')
>     into Staff (staffNo, fName, lName, position, sex, DOB, salary, branchNo) values ('SA9', 'Mary', 'Howe', 'Assistant', 'F', '19-Feb-1970', 9000,'B007')
>     into Staff (staffNo, fName, lName, position, sex, DOB, salary, branchNo) values ('SG5', 'Susan', 'Brand', 'Manager', 'F', '3-Jun-1940', 24000,'B003')
>     into Staff (staffNo, fName, lName, position, sex, DOB, salary, branchNo) values ('SL41', 'Julie', 'Lee', 'Assistant', 'F', '13-Jun-1965', 9000,'B005')
>     SELECT * FROM dual; 

> 
6 rows affected

<!-- -->
>     select * from Branch;
> 
> | BRANCHNO | STREET       | CITY     | POSTCODE |
> | :------- | :----------- | :------- | :------- |
> | B005     | 22 Deer Rd   | London   | SW1 4EH  |
> | B007     | 16 Argyll St | Aberdeen | AB2 3SU  |
> | B003     | 163 Main St  | Glasgow  | G11 9QX  |
> | B004     | 32 Manse Rd  | Bristol  | BS99 1NZ |
> | B002     | 56 Clover Dr | London   | NW10 6EU |

<!-- -->
>     select * from Staff;
> 
> | STAFFNO | FNAME | LNAME | POSITION   | SEX | DOB       | SALARY | BRANCHNO |
> | :------ | :---- | :---- | :--------- | :-- | :-------- | -----: | :------- |
> | SL21    | John  | White | Manager    | M   | 01-OCT-45 |  30000 | B005     |
> | SG37    | Ann   | Beech | Assistant  | F   | 10-NOV-60 |  12000 | B003     |
> | SG14    | David | Ford  | Supervisoe | M   | 24-MAR-58 |  18000 | B003     |
> | SA9     | Mary  | Howe  | Assistant  | F   | 19-FEB-70 |   9000 | B007     |
> | SG5     | Susan | Brand | Manager    | F   | 03-JUN-40 |  24000 | B003     |
> | SL41    | Julie | Lee   | Assistant  | F   | 13-JUN-65 |   9000 | B005     |

*db<>fiddle [here](https://dbfiddle.uk/?rdbms=oracle_11.2&fiddle=7e00dfcdfd28a32fb4c35fca30bc9bae)*

