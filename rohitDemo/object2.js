// //const tinderUser= new Object()//this is singleton object
// const tinderUser={}// this is non-singleton object

// tinderUser.id="123abc"
// tinderUser.name="rohit"
// tinderUser.isLoggedIn=false

// //console.log(tinderUser);

// const regularUser={
//     email:"rohitKumar@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"rohit",
//             lastname:"Koushal"
//         }
//     }
// }
// //console.log(regularUser.fullname);
// //console.log(regularUser.fullname.userfullname.firstname);

// const ob1={1:"a",2:"b"}
// const ob2={3:"a",4:"b"}
// const ob3=Object.assign({},ob1,ob2)
// //console.log(ob3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));//return data type is Array
// console.log(Object.values(tinderUser));

//de-structuring
const course = {
    coursename:"js in hindi",
    price:"999",
    courseinstructor:"rohit"
}
const {courseinstructor:instructor}=course//object name change syntax
console.log(instructor);



//json...API give the value in the form of Json form

// {
//     "name"="hitesh",
//     "coursename"="rohit india",

// }

//Json API use
[
    {
        {
            "results": [
                {
                    "gender": "female",
                    "name": {
                        "title": "Ms",
                        "first": "Emma",
                        "last": "Poulsen"
                    },
                    "location": {
                        "street": {
                            "number": 6858,
                            "name": "Højmarken"
                        },
                        "city": "Aalborg S.Ø.",
                        "state": "Midtjylland",
                        "country": "Denmark",
                        "postcode": 59484,
                        "coordinates": {
                            "latitude": "-45.6444",
                            "longitude": "139.1808"
                        },
                        "timezone": {
                            "offset": "+2:00",
                            "description": "Kaliningrad, South Africa"
                        }
                    },
                    "email": "emma.poulsen@example.com",
                    "login": {
                        "uuid": "4dd8a507-880a-4068-a6cc-d4c687ef32f2",
                        "username": "silversnake334",
                        "password": "ripley",
                        "salt": "GcQcxHyx",
                        "md5": "74f46fe85511992c6d1d5560b7598f3c",
                        "sha1": "c0c0914cff0da6f113b38b52b382912af5fbd820",
                        "sha256": "ee4752acfd51e6bc22d93e41c2ed3bd7a3b65eca81a2446385ba23866275ef70"
                    },
                    "dob": {
                        "date": "1989-05-01T17:12:00.590Z",
                        "age": 35
                    },
                    "registered": {
                        "date": "2010-10-07T19:41:55.935Z",
                        "age": 14
                    },
                    "phone": "49911914",
                    "cell": "70495706",
                    "id": {
                        "name": "CPR",
                        "value": "010589-7379"
                    },
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/women/51.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/women/51.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/51.jpg"
                    },
                    "nat": "DK"
                }
            ],
            "info": {
                "seed": "92340df7866f5c3b",
                "results": 1,
                "page": 1,
                "version": "1.4"
            }
        }
          },
    {

    }
]



