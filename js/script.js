let sub1 = Number(prompt("Enter marks for subject1:"))
let sub2 = Number(prompt("Enter marks for subject2:"))
let sub3 = Number(prompt("Enter marks for subject3:"))
let sub4 = Number(prompt("Enter marks for subject4:"))
let sub5 = Number(prompt("Enter marks for subject5:"))


let total = sub1 + sub2 + sub3 + sub4 + sub5

let avg = total/5

let grade

if(avg >=90){
    grade ="A+"
}

else if(avg>=80){
    grade="A"
}

else if(avg>=70){
    grade="B"
}

else if(avg>=60){
    grade="C"
}

else if(avg>=50){
    grade="D"
}

else{
    grade="F"
}

alert(
    "Total Marks: "+total+
    "\nAverage Marks: " +avg50+
    "\nGrade:" +grade
)

