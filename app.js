// object là gì
// Object (đối tược)) là 1 khái niệm trừu tương dùng để miêu tẩ
//háy biểu diễn một vật háy một đối tượng cụ thể

// ví dụ: con mèo màu lông : trắng,tiêng kêu: meo meo, chân: 4, mắt: đen...

//2 Cúa pháp:
//từ kháo khai báo biến_<tên của đối tượng> = {key1: value1,key2: va;ue2,...}
//ví dụ
// let student ={
//     name: "sơn",
//     age: 20,
//     arr: [1,2,3],
// }; console.log(student);

//CRUD trong objext
  //C: creat

  //cách 2: thêm kiểu ES6 - dynamic
//   let myEmail ="email" // thêm dữ liệu động
//   let valueEmail = "nsonjp@gmail.com" // thêm dữ liệu động

//   let student ={
//         name: "sơn",
//         age: 20,
//         [myEmail]:valueEmail,
//     };

    //cách 1
    //<tên đối tượng> <key mới> = <giá trị>
   //  student.phone = "345678";

   //   console.log(student);

   //   //R - read one
   //   console.log(student.age);

     //read All
     //1.dùng for dẻ in ra tất cả value trong object
     // cần phải lấy được danh sách các keys có trong object(student)
   //   let keys = Object.keys(student);
   //   for(let i =0;i<keys.length;i++){
   //      let key = keys[i];
   //      let value = student[key];
   //      console.log(value);
   //   }
     //2.sử dụng vòng lặp for in
   //   for(const key in student){
   //      console.log(student);
   //      console.log(key);
   //      //console.log(student[key]);
   //   }

   //U upadte
   // student.age = " hoài sơn";
   // console.log(student);

   //D delete
   // delete student.age;
   // console.log(student);


   //bài tập 2 tạo đối tượng person bao gồm: tên, tuổi,địa chỉ,sđt => in tất cả thông tin
   //input: object person : name,age,address,phone
   //output: "thông tin người dùng là:
   //tên:...- age:....- address:...- sđt:..."

   // let person = {
   //    name: "son",
   //    age: 26,
   //    address: "tokyo",
   //    phone: 12345678,
   // }; 
   // console.log("thông tin người dung là:
  //  tên: ${person.name} 
  //  - tuổi: ${person.age}
  //  - địa chỉ: ${person.address}
  //  - phọne: ${person.phone} ");

   //bài tap 3 tạo đối tượng product bao gồm: tên,gí tiền (12000), danh mục(category)
   //input: Object product: name, price,category
   //output "thông tin sản phẩm là:
   //Tên sp:...-giá sp:12000VND-Danh mục:..."
  //  let product = {
  //     name: "coffee",
  //     price: 12000,
  //     category: "takeoff",
  //     }; 
  //  console.table(
  //    `thông tin người dùng là:
  //    -tên sp: ${product.name}
  //    -Giá sp: ${product.price} VND
  //    -Danh mục: ${product.category}
  //    `);

   //bài tập 4
  //  let emplouye ={
  //   name: "sơn",
  //   salary: 12000,
  //   department: "salaryman",
  //  };
  //  emplouye.salary *=2;
  //  console.log(
  //    `thông tin nhân viên là:
  //    -tên sp: ${emplouye.name}
  //    -Giá sp: ${emplouye.salary} VND
  //    -Danh mục: ${emplouye.department}
  //    `);

  //bài tập 5
  // let car = {
  //   brand: "audi",
  //   color: "red",
  //   year: 2023,
  // };
  // car.carnumber = "H123";
  // console.log(
  //    `thông tin xe hơi là:
  //    -tên sp: ${car.brand}
  //    -Giá sp: ${car.color} VND
  //    -Danh mục: ${car.year}
  //    -Biển số: ${car.carnumber}
  //    `);

  //bài tập trên class
  let userList = [
    {
      id: 1,
      name: "Rikkei",
      age: 30,
    },
    {
      id: 2,
      name: "Academy",
      age: 20,
    },
  ];
  let inputNameAge = prompt("nhập vào chữ cái");
  if(inputNameAge=="C"){
    let user2 = {};
    let creatName =prompt("nhập tên");
    let creatAge = +prompt("nhập tuôi");
    user2.id=3;
    user2.name=creatName;
    user2.age=creatAge;
    userList.push(user2);
    console.table(userList);
  }else if(inputNameAge=="R"){
    for(const key in userList){
        //  console.log(userList);
        //  console.log(key);
         console.log(userList[key]);
      }
    }
      
       