let year = 2020;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
  console.log("ondor jil");
else if (year % 100 != 0) console.log("ondor jil biish");
else year % 400 == 0;
console.log("ondor jil");
