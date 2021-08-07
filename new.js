var student={
    name:'Ahmed Ansari',
    age:21,
    contact:7255944495,
    address:
    {
        city:'Dhanbad',
        state:'Jharkhand',
        pin:828206,
    },

    hobbies:['Gaming','Reading','Cricket','Sketching'],

}

console.log(student.age);
console.log(student.address.city)
console.log(student.hobbies[3])

//Loop:
for(i=0;i<=student.hobbies.length-1;i++)
{
    console.log(student.hobbies[i]);
}
