---
date: 2024-06-15
tags:
  - SQL
  - MySQL
  - Blog
  - article
type: article
---

When we dealing with data we need to put some effort for manage. We can probably save our data in a document **_(JSON, XML, YML)_** but they are some limitation buy the way if we using database we can easily and quickly get our data. In this article we going to deeper dive in to **SQL** **_(Structured Query Language)_**. Here is we going to talk about,

1. What is a database
2. Why we use SQL
3. DBMS installation
4. Basic concepts
5. Basic queries
6. Pros: and Cons:

```js
const person = {
  name: "John",
};
```

### WHAT IS A DATABASE

Database is a put our data in some specific location. There is a another thing you need to know, that is ==DBMS(Database Management System)==!. we can use NoSQL or SQL. It's depend on what we choose DBMS.

### WHY WE USE SQL

when we using SQL we can store data relationally that is mean some kind of data depends on another data, they relationally connect each other.

### DBMS INSTALL

In this article we going to install popular DBMS. That is MYSQL. you can install MYSQL on your device but the way of install depends on your OS.

**WINDOWS**:
You can install WAMP or XAMP
**LINUX:**
snip
**MACINTOSH**:
snip

### BASIC CONCEPTS

After successfully install MYSQL on your device you can use it ion `localhost/phpmyadmin` or you can use `MYSQL_CLI`. I recommend use _phpmyadmin_ because it's easy to use then you need to login phpmyadmin with your credential default username is: `root` and password is `""(nothing)`

::: info
Before YOU USE SQL YOU NEED TO UNDERSTAND SOME BASIC CONCEPT.
:::

In SQL we have databases we save hole data in to one database for example we work on some project we use separate database for our project. Inside the database we store collection of data in a table .

::: info
For summarize we have database in DBMS.
Inside the database we have tables.
Inside the table we have collection of data.
:::

`image snippet`

You can see we store USERS data in USERS table and users favorite color data in COLOR table and special thing is user table id relation with color user_id. Don' be confuse. Imagine like this.

    `we want to get our users favorite color we can decide like this,
     Alex like green and bue
     Kevin like red

`
see, it's easy.so, let's learn how to do it step by step.

First we need to create a fresh new database for save our data.

```sql
CREATE DATABASE database_name
```

you can replace `database_name` with what you want name. so we create a new data base but there is a so many databases we need to select a data base for store our data.

```sql
	USE my_db
```

if you want to know what data base out there

```sql
SHOW DATA BASES
```

so we have mt data base let's create a table

```sql
CREATE TABLE table_name
field_name data_type,
field_name data_type;
```

we need to at filed name for identify each columns on the table and specify what type of data. we can store like numbers,strings,double,boolean.so i create previously mention user table.

```sql
CREATE TABLE user(
id int(10) AUTO_INCREMENT,
name varchar(20),
age varchar(3));
```

`AUTO_INCREMENT`: When we insert a new record table automatically add a new index number
`INT(10): It's mean we can add ten digit number for example we can add phone number(083-4928-117)

Now we created a table so, we can do **CRUD** operation.

::: info
CRUD stand for Create, Read, Update, Delete
Which is the foundational operations in systems.
:::

First we insert some data i mean records.

```sql
INSERT INTO table_name (field_name_1, field_name_2) VALUES(data_1, data_2);
```

or

```sql
INSERT INTO table_name VALUES(data_1, data_2);
```

Let's insert i previously mention data into into user table.

```sql
INSERT INTO user VALUES (0,'John',23);
```

`O.K. Then how the heck we know did our data has been inserted or not, well we can use`SELECT` operation.

```sql
SELECT field_name_1field_name_2
FROM table_name
```

I need to look at all data in our table. so, i can type field name but we can use `*` instead of that.

```sql
SELECT *
FROM user;
```

`image_snip`

So, let's do Update operation i meant let's update some data in our table.
I want to update John name as Alex.

We case this query,

```sql
UPDATE table_name
SET field_name = new_value
```

so, we update our data,

```sql
UPDATE user
SET name = 'Alex';
```

Wait, wait... If we do like this our all of fields are change there name as Alex but we want only change index number 1. right?
So how we can do this, well we can use `WHERE` clause it's like if-statement.

```sql
UPDATE user
SET name = 'Alex'
WHERE id = 01;
```

In this third line we write condition if index number01 meet change this name as ALEX for example.

So, we talk about 3 main operation we only have one operation to do that is DELETE. Let's do it.

```sql
DELETE
FROM table_name
WHERE field_name = value;
```

So, i want to delete index number03 value we can do like this,

```sql
DELETE
FROM user
WHERE id=03;
```

Now i want to delete every records lees than age 18(we want to keep only 18+ users for example.🤔)

```sql
DELETE
FROM user
WHERE age < 18;
```

Well now we learn basic operation like CRUD operation but there are some advanced topics i'll cover it in next article.

### PROS: AN CONS:

**PROS:**
There are lot of benefits using SQL. we can store relation data and we can quickly retrieve our data.

**CONS**:
When we dealing with large data we can not retrieve data fast as possible.

I hope you learn something on this article if you have any questions feel free to ask it on comment box i would like to help .Don't forget to share this article with your friends.
