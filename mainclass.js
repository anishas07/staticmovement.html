class student{ 
constructor (name1,year)
{
    this.name1 = name1;
    this.year = year;
}


age()
{
    let date = new Date(); 
    return date.getFullYear() - this.year;
}
}

student1 = new student('Anisha', 2009);
document.getElementById('p1').innerHTML = "My Name is :" +  student1.name1 + " and my age is " + student1.age();

student2= new student('Maya', 2011);
document.getElementById('p2').innerHTML = "My name is :"+ student2.name1 + " and my age is " +student2.age();