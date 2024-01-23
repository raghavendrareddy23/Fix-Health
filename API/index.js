// server.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "*" }));

const doctorsData = [
  {
    id: 1,
    name: "Dr. Aarav Patel",
    expertise: "Cardiology",
    city: "Mumbai",
    sex: "male",
    image:
      "https://th.bing.com/th/id/OIP.dyQhbMLF-_enGkozPBWI5QHaJ5?w=718&h=960&rs=1&pid=ImgDetMain",
    languages: ["English", "Hindi", "Gujarati"],
  },
  {
    id: 2,
    name: "Dr. Zara Khan",
    expertise: "Orthopedics",
    city: "Delhi",
    sex: "female",
    image: "https://www.visualsstock.com/images/Low/2/AK28056.jpg",
    languages: ["English", "Hindi", "Urdu"],
  },
  {
    id: 3,
    name: "Dr. Advait Sharma",
    expertise: "Dermatology",
    city: "Bangalore",
    sex: "male",
    image:
      "https://th.bing.com/th/id/OIP.dyQhbMLF-_enGkozPBWI5QHaJ5?w=718&h=960&rs=1&pid=ImgDetMain",
    languages: ["English", "Telugu", "Kannada"],
  },
  {
    id: 4,
    name: "Dr. Nia Gupta",
    expertise: "Pediatrics",
    city: "Kolkata",
    sex: "female",
    image:
      "https://i.pinimg.com/736x/7e/91/b7/7e91b721691322422919eec7dc039618.jpg",
    languages: ["Bengali"],
  },
  {
    id: 5,
    name: "Dr. Arjun Singh",
    expertise: "Ophthalmology",
    city: "Chennai",
    sex: "male",
    image:
      "https://th.bing.com/th/id/OIP.dyQhbMLF-_enGkozPBWI5QHaJ5?w=718&h=960&rs=1&pid=ImgDetMain",
    languages: ["Kanada", "Telugu", "Tamil"],
  },
  {
    id: 6,
    name: "Dr. Ava Verma",
    expertise: "Gynecology",
    city: "Hyderabad",
    sex: "female",
    image:
      "https://i.pinimg.com/originals/a5/b2/6b/a5b26b335cc94272b7c1878ec5b13dbd.jpg",
    languages: ["English", "Hindi", "Telugu"],
  },
  {
    id: 7,
    name: "Dr. Vihaan Joshi",
    expertise: "ENT",
    city: "Ahmedabad",
    sex: "male",
    image:
      "https://th.bing.com/th/id/OIP.W7Okoln6L1Z8hGAk70MMWgHaHc?rs=1&pid=ImgDetMain",
    languages: ["Gujarati"],
  },
  {
    id: 8,
    name: "Dr. Siya Mehra",
    expertise: "Dentistry",
    city: "Pune",
    sex: "female",
    image:
      "https://media.licdn.com/dms/image/C5603AQHnznlo5IRIdg/profile-displayphoto-shrink_800_800/0/1517022800794?e=2147483647&v=beta&t=tQ5jE770497OfpFKXOORvuC0EmhxHFZIMIFkG-33bWI",
    languages: ["English", "Marathi"],
  },
  {
    id: 9,
    name: "Dr. Aryan Khanna",
    expertise: "Psychiatry",
    city: "Jaipur",
    sex: "male",
    image:
      "https://th.bing.com/th/id/OIP.W7Okoln6L1Z8hGAk70MMWgHaHc?rs=1&pid=ImgDetMain",
    languages: ["Hindi", "Rajasthani"],
  },
  {
    id: 10,
    name: "Dr. Ananya Singh",
    expertise: "Endocrinology",
    city: "Lucknow",
    sex: "female",
    image:
      "https://www.m3india.in/assets/jima/survey-mr/survey_doctor-83fd614f829863b054e6d170aa0a25fa21d14c362829135d64935ba93177fef2.png",
    languages: ["Hindi", "Urdu"],
  },
  {
    id: 11,
    name: "Dr. Arnav Agarwal",
    expertise: "Urology",
    city: "Nagpur",
    sex: "male",
    image:
      "https://th.bing.com/th/id/OIP.W7Okoln6L1Z8hGAk70MMWgHaHc?rs=1&pid=ImgDetMain",
    languages: ["Hindi", "Marathi"],
  },
  {
    id: 12,
    name: "Dr. Riya Mehta",
    expertise: "Dermatology",
    city: "Patna",
    sex: "female",
    image:
      "https://images1.doctoriduniya.com/main-image/books_online_appointment.png",
    languages: ["Telugu", "Hindi", "Bihari"],
  },
  {
    id: 13,
    name: "Dr. Yuvraj Malhotra",
    expertise: "Cardiac Surgery",
    city: "Surat",
    sex: "male",
    image:
      "https://th.bing.com/th/id/OIP.W7Okoln6L1Z8hGAk70MMWgHaHc?rs=1&pid=ImgDetMain",
    languages: ["English", "Hindi", "Gujarati"],
  },
  {
    id: 14,
    name: "Dr. Saanvi Reddy",
    expertise: "Neurology",
    city: "Indore",
    sex: "female",
    image:
      "https://www.kimshealth.org/media/filer_public_thumbnails/filer_public/4a/ef/4aefb47c-7a51-4ce8-821f-ef48a5aa4a8d/dr-amrita-b-rao.png__253x285_q85_crop_subsampling-2.jpg",
    languages: ["English", "Hindi", "Marathi"],
  },
  {
    id: 15,
    name: "Dr. Arush Saxena",
    expertise: "Gastroenterology",
    city: "Bhopal",
    sex: "male",
    image:
      "https://th.bing.com/th/id/OIP.W7Okoln6L1Z8hGAk70MMWgHaHc?rs=1&pid=ImgDetMain",
    languages: ["English", "Hindi", "Malayalam"],
  },
  {
    id: 16,
    name: "Dr. Aanya Sharma",
    expertise: "Oncology",
    city: "Chandigarh",
    sex: "female",
    image:
      "https://doctoryouneed.org/wp-content/uploads/2020/04/1552035653profile-scaled.jpg",
    languages: ["English", "Odisi", "Punjabi"],
  },
  {
    id: 17,
    name: "Dr. Aadi Joshi",
    expertise: "Dentistry",
    city: "Nashik",
    sex: "male",
    image:
      "https://th.bing.com/th/id/OIP._Rr38T9rdkGLrML0HHLsvgHaHZ?rs=1&pid=ImgDetMain",
    languages: ["English", "Hindi", "Bengali"],
  },
  {
    id: 18,
    name: "Dr. Anita",
    expertise: "Psychiatry",
    city: "Mumbai",
    sex: "female",
    image:
      "https://th.bing.com/th/id/OIP.gDN7gcAEQWMktoZDLxt2LAAAAA?w=431&h=555&rs=1&pid=ImgDetMain",
    languages: ["Gujarathi", "Hindi", "Marathi"],
  },
  {
    id: 19,
    name: "Dr. Aarush Singh",
    expertise: "Orthopedics",
    city: "Amritsar",
    sex: "male",
    image:
      "https://th.bing.com/th/id/OIP._Rr38T9rdkGLrML0HHLsvgHaHZ?rs=1&pid=ImgDetMain",
    languages: ["English", "Kanada", "Punjabi"],
  },
  {
    id: 20,
    name: "Dr. Kyra Sharma",
    expertise: "Dermatology",
    city: "Agra",
    sex: "female",
    image:
      "https://prathimahospitals.com/wp-content/uploads/2023/04/Doctor-Web-Profile-Photo-_-Dr.-Mrudula-768x843.png",
    languages: ["English", "Hindi", "Tamil"],
  },
  {
    id: 21,
    name: "Dr. Advaita Reddy",
    expertise: "Cardiology",
    city: "Varanasi",
    sex: "male",
    image:
      "https://th.bing.com/th/id/OIP._Rr38T9rdkGLrML0HHLsvgHaHZ?rs=1&pid=ImgDetMain",
    languages: ["English", "Hindi", "Telugu"],
  },
  {
    id: 22,
    name: "Dr. Kabir Kapoor",
    expertise: "Ophthalmology",
    city: "Srinagar",
    sex: "male",
    image:
      "https://th.bing.com/th/id/OIP._Rr38T9rdkGLrML0HHLsvgHaHZ?rs=1&pid=ImgDetMain",
    languages: ["English", "Urdu"],
  },
  {
    id: 23,
    name: "Dr. Ava Agarwal",
    expertise: "Gynecology",
    city: "Jodhpur",
    sex: "female",
    image:
      "https://i1.rgstatic.net/ii/profile.image/1084538004480002-1635585418886_Q512/Sumathi-Natarajan-2.jpg",
    languages: ["Rajasthani"],
  },
  {
    id: 24,
    name: "Dr. Aryan Choudhary",
    expertise: "ENT",
    city: "Raipur",
    sex: "male",
    image:
      "https://th.bing.com/th/id/OIP._Rr38T9rdkGLrML0HHLsvgHaHZ?rs=1&pid=ImgDetMain",
    languages: ["English", "Chhattisgarhi"],
  },
  {
    id: 25,
    name: "Dr. Saira Nair",
    expertise: "Dermatology",
    city: "Gwalior",
    sex: "female",
    image:
      "https://doctoryouneed.org/wp-content/uploads/2020/08/Dr-Gowri-600x600.jpg",
    languages: ["Hindi", "Marathi"],
  },
  {
    id: 26,
    name: "Dr. Aarav Mehra",
    expertise: "Pediatrics",
    city: "Kota",
    sex: "male",
    image:
      "https://i1.rgstatic.net/ii/profile.image/943334600228864-1601919903127_Q512/Peerzada-Ahmad-2.jpg",
    languages: ["English", "Odisi", "Rajasthani"],
  },
  {
    id: 27,
    name: "Dr. Aanya Verma",
    expertise: "Oncology",
    city: "Guwahati",
    sex: "female",
    image:
      "https://visionhospitalskakinada.com/wp-content/uploads/2019/03/Dr.Mamatha.jpg",
    languages: ["English", "Hindi", "Assamese"],
  },
  {
    id: 28,
    name: "Dr. Arjun Yadav",
    expertise: "Urology",
    city: "Kochi",
    sex: "male",
    image:
      "https://i1.rgstatic.net/ii/profile.image/943334600228864-1601919903127_Q512/Peerzada-Ahmad-2.jpg",
    languages: ["English", "Hindi", "Malayalam"],
  },
  {
    id: 29,
    name: "Dr. Saanvi",
    expertise: "Cardiology",
    city: "Thiruvananthapuram",
    sex: "female",
    image: "https://www.kauveryhospital.com/doctorimage/recent/Dr.-Geetha.jpg",
    languages: ["English", "Hindi", "Malayalam"],
  },
  {
    id: 30,
    name: "Dr. Kabir Iyer",
    expertise: "Gastroenterology",
    city: "Coimbatore",
    sex: "male",
    image:
      "https://i1.rgstatic.net/ii/profile.image/943334600228864-1601919903127_Q512/Peerzada-Ahmad-2.jpg",
    languages: ["English", "Hindi", "Tamil"],
  },
  {
    id: 31,
    name: "Dr. Anika Nair",
    expertise: "Orthopedics",
    city: "Madurai",
    sex: "female",
    image:
      "https://vijayahospital.org/wp-content/uploads/2022/08/Dr.P.Sreelakshmi.jpg",
    languages: ["English", "Hindi", "Tamil"],
  },
  {
    id: 32,
    name: "Dr. Sweta Menon",
    expertise: "Dentistry",
    city: "Tiruchirappalli",
    sex: "female",
    image: "https://media.curofy.com/0d574712836a7136d525c078984d15c3_1.jpg",
    languages: ["English", "Hindi", "Tamil"],
  },
  {
    id: 33,
    name: "Dr. Arnav Iyer",
    expertise: "Neurology",
    city: "Salem",
    sex: "male",
    image:
      "https://i1.rgstatic.net/ii/profile.image/943334600228864-1601919903127_Q512/Peerzada-Ahmad-2.jpg",
    languages: ["English", "Hindi", "Tamil"],
  },
  {
    id: 34,
    name: "Dr. Ananya",
    expertise: "Psychiatry",
    city: "Vijayawada",
    sex: "female",
    image:
      "https://th.bing.com/th/id/OIP.31mY-g4xXi2DItSGVO2H-wHaIO?w=1280&h=1422&rs=1&pid=ImgDetMain",
    languages: ["English", "Hindi", "Telugu"],
  },
  {
    id: 35,
    name: "Dr. Aarush Menon",
    expertise: "Ophthalmology",
    city: "Visakhapatnam",
    sex: "male",
    image:
      "https://www.logintohealth.com/assets/uploads/doctors/82c41136d93b89b7d86976bcf3d4350a.jpg",
    languages: ["English", "Hindi", "Telugu"],
  },
  {
    id: 36,
    name: "Dr. Mamatha Reddy",
    expertise: "Gynecology",
    city: "Guntur",
    sex: "female",
    image:
      "https://th.bing.com/th/id/OIP.31mY-g4xXi2DItSGVO2H-wHaIO?w=1280&h=1422&rs=1&pid=ImgDetMain",
    languages: ["English", "Hindi", "Telugu"],
  },
  {
    id: 37,
    name: "Dr. Akshaya",
    expertise: "ENT",
    city: "Nellore",
    sex: "female",
    image:
      "https://vijayahospital.org/wp-content/uploads/2022/08/Dr.P.Sreelakshmi.jpg",
    languages: ["English", "Hindi", "Telugu"],
  },
  {
    id: 38,
    name: "Dr. Amrutha",
    expertise: "Cardiology",
    city: "Kurnool",
    sex: "female",
    image:
      "https://th.bing.com/th/id/OIP.31mY-g4xXi2DItSGVO2H-wHaIO?w=1280&h=1422&rs=1&pid=ImgDetMain",
    languages: ["English", "Hindi", "Telugu"],
  },
  {
    id: 39,
    name: "Dr. Aarush Menon",
    expertise: "Orthopedics",
    city: "Rajahmundry",
    sex: "male",
    image:
      "https://www.logintohealth.com/assets/uploads/doctors/82c41136d93b89b7d86976bcf3d4350a.jpg",
    languages: ["English", "Hindi", "Telugu"],
  },
  {
    id: 40,
    name: "Dr. Arjun Choudhary",
    expertise: "Dermatology",
    city: "Tirupati",
    sex: "male",
    image:
      "https://www.logintohealth.com/assets/uploads/doctors/82c41136d93b89b7d86976bcf3d4350a.jpg",
    languages: ["English", "Hindi", "Telugu"],
  },
  {
    id: 41,
    name: "Dr. Sreya Reddy",
    expertise: "Neurology",
    city: "Kakinada",
    sex: "female",
    image:
      "https://th.bing.com/th/id/OIP.31mY-g4xXi2DItSGVO2H-wHaIO?w=1280&h=1422&rs=1&pid=ImgDetMain",
    languages: ["English", "Hindi", "Telugu"],
  },
  {
    id: 42,
    name: "Dr. Saanvi Yadav",
    expertise: "Gastroenterology",
    city: "Anantapur",
    sex: "female",
    image:
      "https://vijayahospital.org/wp-content/uploads/2022/08/Dr.P.Sreelakshmi.jpg",
    languages: ["English", "Hindi", "Telugu"],
  },
  {
    id: 43,
    name: "Dr. Kabir Iyer",
    expertise: "Oncology",
    city: "Kollam",
    sex: "male",
    image:
      "https://www.logintohealth.com/assets/uploads/doctors/82c41136d93b89b7d86976bcf3d4350a.jpg",
    languages: ["English", "Hindi", "Malayalam"],
  },
  {
    id: 44,
    name: "Dr. Advait Menon",
    expertise: "Pediatrics",
    city: "Alappuzha",
    sex: "male",
    image:
      "https://th.bing.com/th/id/OIP.I_m9mgmLFpnjqST-Fuq4NgHaHw?rs=1&pid=ImgDetMain",
    languages: ["English", "Hindi", "Malayalam"],
  },
  {
    id: 45,
    name: "Dr. Aanya Nair",
    expertise: "Dentistry",
    city: "Thiruvalla",
    sex: "female",
    image:
      "https://th.bing.com/th/id/OIP.XW0jTmaQZoWz81GWVhWIXQHaGV?w=2553&h=2184&rs=1&pid=ImgDetMain",
    languages: ["English", "Hindi", "Malayalam"],
  },
  {
    id: 46,
    name: "Dr. Arush Iyer",
    expertise: "Urology",
    city: "Kottayam",
    sex: "male",
    image:
      "https://th.bing.com/th/id/OIP.I_m9mgmLFpnjqST-Fuq4NgHaHw?rs=1&pid=ImgDetMain",
    languages: ["English", "Hindi", "Malayalam"],
  },
  {
    id: 47,
    name: "Dr. Kalyani",
    expertise: "Psychiatry",
    city: "Jammalamadugu",
    sex: "female",
    image:
      "https://th.bing.com/th/id/OIP.31mY-g4xXi2DItSGVO2H-wHaIO?w=1280&h=1422&rs=1&pid=ImgDetMain",
    languages: ["English", "Hindi", "Telugu"],
  },
  {
    id: 48,
    name: "Dr. Arjun Menon",
    expertise: "Cardiology",
    city: "Idukki",
    sex: "male",
    image:
      "https://th.bing.com/th/id/OIP.I_m9mgmLFpnjqST-Fuq4NgHaHw?rs=1&pid=ImgDetMain",
    languages: ["English", "Hindi", "Malayalam"],
  },
  {
    id: 49,
    name: "Dr. Aarav Iyer",
    expertise: "Dermatology",
    city: "Ernakulam",
    sex: "male",
    image:
      "https://th.bing.com/th/id/OIP.3dCokc0UT6mPSKwgm8bBlQAAAA?w=400&h=500&rs=1&pid=ImgDetMain",
    languages: ["English", "Hindi", "Malayalam"],
  },
  {
    id: 50,
    name: "Dr. Sivani Yadav",
    expertise: "Orthopedics",
    city: "Malappuram",
    sex: "female",
    image:
      "https://th.bing.com/th/id/OIP.31mY-g4xXi2DItSGVO2H-wHaIO?w=1280&h=1422&rs=1&pid=ImgDetMain",
    languages: ["Tamil"],
  },
  {
    id: 51,
    name: "Dr. Saritha Reddy",
    expertise: "Cardiology",
    city: "Mumbai",
    sex: "female",
    image:
      "https://th.bing.com/th/id/OIP.31mY-g4xXi2DItSGVO2H-wHaIO?w=1280&h=1422&rs=1&pid=ImgDetMain",
    languages: ["Telugu"],
  },
  {
    id: 52,
    name: "Dr. Siya Kapoor",
    expertise: "Orthopedics",
    city: "Delhi",
    sex: "female",
    image:
      "https://th.bing.com/th/id/OIP.bEoUwXGUsQmCk59PtTfYJwAAAA?rs=1&pid=ImgDetMain",
    languages: ["Bengali"],
  },
  {
    id: 53,
    name: "Dr. Aarav Agarwal",
    expertise: "Dermatology",
    city: "Bangalore",
    sex: "male",
    image:
      "https://th.bing.com/th/id/OIP.3dCokc0UT6mPSKwgm8bBlQAAAA?w=400&h=500&rs=1&pid=ImgDetMain",
    languages: ["Marathi"],
  },
  {
    id: 54,
    name: "Dr. Meghana Choudhary",
    expertise: "Pediatrics",
    city: "Kolkata",
    sex: "female",
    image:
      "https://th.bing.com/th/id/OIP.bEoUwXGUsQmCk59PtTfYJwAAAA?rs=1&pid=ImgDetMain",
    languages: ["Malayalam"],
  },
  {
    id: 55,
    name: "Dr. Aarush Menon",
    expertise: "Ophthalmology",
    city: "Chennai",
    sex: "male",
    image:
      "https://th.bing.com/th/id/OIP.3dCokc0UT6mPSKwgm8bBlQAAAA?w=400&h=500&rs=1&pid=ImgDetMain",
    languages: ["Kannada"],
  },
  {
    id: 56,
    name: "Dr. Advaita Choudary",
    expertise: "Gynecology",
    city: "Hyderabad",
    sex: "female",
    image:
      "https://th.bing.com/th/id/OIP.XW0jTmaQZoWz81GWVhWIXQHaGV?w=2553&h=2184&rs=1&pid=ImgDetMain",
    languages: ["Gujarati"],
  },
  {
    id: 57,
    name: "Dr. Seema Joshi",
    expertise: "ENT",
    city: "Ahmedabad",
    sex: "female",
    image:
      "https://th.bing.com/th/id/OIP.bEoUwXGUsQmCk59PtTfYJwAAAA?rs=1&pid=ImgDetMain",
    languages: ["Punjabi"],
  },
  {
    id: 58,
    name: "Dr. Arjun Agarwal",
    expertise: "Dentistry",
    city: "Pune",
    sex: "male",
    image:
      "https://th.bing.com/th/id/OIP.3dCokc0UT6mPSKwgm8bBlQAAAA?w=400&h=500&rs=1&pid=ImgDetMain",
    languages: ["Odia"],
  },
  {
    id: 59,
    name: "Dr. Deepa Sharma",
    expertise: "Psychiatry",
    city: "Jaipur",
    sex: "female",
    image:
      "https://th.bing.com/th/id/OIP.bEoUwXGUsQmCk59PtTfYJwAAAA?rs=1&pid=ImgDetMain",
    languages: ["Assamese"],
  },
  {
    id: 60,
    name: "Dr. Kabir Yadav",
    expertise: "Endocrinology",
    city: "Lucknow",
    sex: "male",
    image:
      "https://th.bing.com/th/id/OIP.bjFjw2kd4db8nTUZIBOCdQHaHa?rs=1&pid=ImgDetMain",
    languages: ["Kashmiri"],
  },
  {
    id: 61,
    name: "Dr. Saanvi Choudhary",
    expertise: "Urology",
    city: "Nagpur",
    sex: "female",
    image:
      "https://th.bing.com/th/id/OIP.XW0jTmaQZoWz81GWVhWIXQHaGV?w=2553&h=2184&rs=1&pid=ImgDetMain",
    languages: ["Bhojpuri"],
  },
  {
    id: 62,
    name: "Dr. Zara Verma",
    expertise: "Dermatology",
    city: "Patna",
    sex: "female",
    image:
      "https://doctors.fortishealthcare.com/uploads/assets/doctors/2019/4/1554878796profile.png",
    languages: ["Konkani"],
  },
  {
    id: 63,
    name: "Dr. Aarush Agarwal",
    expertise: "Cardiac Surgery",
    city: "Surat",
    sex: "male",
    image:
      "https://th.bing.com/th/id/OIP.bjFjw2kd4db8nTUZIBOCdQHaHa?rs=1&pid=ImgDetMain",
    languages: ["Maithili"],
  },
  {
    id: 64,
    name: "Dr. Siya Iyer",
    expertise: "Neurology",
    city: "Indore",
    sex: "female",
    image:
      "https://doctors.fortishealthcare.com/uploads/assets/doctors/2019/4/1554878796profile.png",
    languages: ["Nepali"],
  },
  {
    id: 65,
    name: "Dr. Priyanka Kapoor",
    expertise: "Gastroenterology",
    city: "Bhopal",
    sex: "female",
    image:
      "https://th.bing.com/th/id/OIP.bEoUwXGUsQmCk59PtTfYJwAAAA?rs=1&pid=ImgDetMain",
    languages: ["Sindhi"],
  },
  {
    id: 66,
    name: "Dr. Advaita Nair",
    expertise: "Oncology",
    city: "Chandigarh",
    sex: "female",
    image:
      "https://th.bing.com/th/id/OIP.bEoUwXGUsQmCk59PtTfYJwAAAA?rs=1&pid=ImgDetMain",
    languages: ["Dogri"],
  },
  {
    id: 67,
    name: "Dr. Anita Menon",
    expertise: "Dentistry",
    city: "Nashik",
    sex: "female",
    image:
      "https://doctors.fortishealthcare.com/uploads/assets/doctors/2019/4/1554878796profile.png",
    languages: ["Manipuri"],
  },
  {
    id: 68,
    name: "Dr. Aarav Yadav",
    expertise: "Psychiatry",
    city: "Ludhiana",
    sex: "male",
    image:
      "https://th.bing.com/th/id/OIP.bjFjw2kd4db8nTUZIBOCdQHaHa?rs=1&pid=ImgDetMain",
    languages: ["Garo"],
  },
  {
    id: 69,
    name: "Dr. Saanvi Joshi",
    expertise: "Orthopedics",
    city: "Amritsar",
    sex: "female",
    image:
      "https://th.bing.com/th/id/OIP.wy_JN2XZN3JAFP6ce4M1LAAAAA?w=300&h=300&rs=1&pid=ImgDetMain",
    languages: ["Khasi"],
  },
  {
    id: 70,
    name: "Dr. Renuka Verma",
    expertise: "Dermatology",
    city: "Agra",
    sex: "female",
    image:
      "https://th.bing.com/th/id/OIP.4mdeKfVugUZB3Gic9ldVowAAAA?w=300&h=300&rs=1&pid=ImgDetMain",
    languages: ["Tulu"],
  },
  {
    id: 71,
    name: "Dr. Advaita Reddy",
    expertise: "Cardiology",
    city: "Varanasi",
    sex: "female",
    image:
      "https://th.bing.com/th/id/OIP.wy_JN2XZN3JAFP6ce4M1LAAAAA?w=300&h=300&rs=1&pid=ImgDetMain",
    languages: ["Himachali"],
  },
  {
    id: 72,
    name: "Dr. Kabir Kapoor",
    expertise: "Ophthalmology",
    city: "Srinagar",
    sex: "male",
    image:
      "https://th.bing.com/th/id/OIP.XSl9CkYUe2gy_S-ILEqCCwHaHa?w=697&h=697&rs=1&pid=ImgDetMain",
    languages: ["Kokborok"],
  },
  {
    id: 73,
    name: "Dr. Ava Agarwal",
    expertise: "Gynecology",
    city: "Jodhpur",
    sex: "female",
    image:
      "https://th.bing.com/th/id/OIP.4mdeKfVugUZB3Gic9ldVowAAAA?w=300&h=300&rs=1&pid=ImgDetMain",
    languages: ["Kumaoni"],
  },
  {
    id: 74,
    name: "Dr. Aryan Choudhary",
    expertise: "ENT",
    city: "Raipur",
    sex: "male",
    image:
      "https://th.bing.com/th/id/OIP.XSl9CkYUe2gy_S-ILEqCCwHaHa?w=697&h=697&rs=1&pid=ImgDetMain",
    languages: ["Marathi", "Gujarati"],
  },
  {
    id: 75,
    name: "Dr. Siya Nair",
    expertise: "Dermatology",
    city: "Gwalior",
    sex: "female",
    image:
      "https://th.bing.com/th/id/OIP.wy_JN2XZN3JAFP6ce4M1LAAAAA?w=300&h=300&rs=1&pid=ImgDetMain",
    languages: ["Malayalam", "Tamil"],
  },
  {
    id: 76,
    name: "Dr. Aarav Mehra",
    expertise: "Pediatrics",
    city: "Kota",
    sex: "male",
    image:
      "https://th.bing.com/th/id/OIP.XSl9CkYUe2gy_S-ILEqCCwHaHa?w=697&h=697&rs=1&pid=ImgDetMain",
    languages: ["Hindi", "Punjabi"],
  },
  {
    id: 77,
    name: "Dr. Aanya Verma",
    expertise: "Oncology",
    city: "Guwahati",
    sex: "female",
    image:
      "https://th.bing.com/th/id/OIP.uLPkBB6D1zrYQD4EjdyTawAAAA?w=400&h=450&rs=1&pid=ImgDetMain",
    languages: ["Assamese", "Bengali"],
  },
  {
    id: 78,
    name: "Dr. Arjun Yadav",
    expertise: "Urology",
    city: "Kochi",
    sex: "male",
    image:
      "https://th.bing.com/th/id/OIP.XSl9CkYUe2gy_S-ILEqCCwHaHa?w=697&h=697&rs=1&pid=ImgDetMain",
    languages: ["Malayalam", "Tamil"],
  },
  {
    id: 79,
    name: "Dr. Likitha Menon",
    expertise: "Cardiology",
    city: "Thiruvananthapuram",
    sex: "female",
    image:
      "https://th.bing.com/th/id/OIP.uLPkBB6D1zrYQD4EjdyTawAAAA?w=400&h=450&rs=1&pid=ImgDetMain",
    languages: ["Malayalam", "Tamil"],
  },
  {
    id: 80,
    name: "Dr. Kabir Iyer",
    expertise: "Gastroenterology",
    city: "Coimbatore",
    sex: "male",
    image:
      "https://th.bing.com/th/id/OIP.XqKz_kkahmKVz3wyHvQ13wHaLH?w=800&h=1200&rs=1&pid=ImgDetMain",
    languages: ["Tamil", "Telugu"],
  },
  {
    id: 81,
    name: "Dr. Anika Nair",
    expertise: "Orthopedics",
    city: "Madurai",
    sex: "female",
    image:
      "https://th.bing.com/th/id/OIP.4mdeKfVugUZB3Gic9ldVowAAAA?w=300&h=300&rs=1&pid=ImgDetMain",
    languages: ["Malayalam", "Tamil"],
  },
  {
    id: 82,
    name: "Dr. Zara Jain",
    expertise: "Dentistry",
    city: "Tiruchirappalli",
    sex: "female",
    image:
      "https://th.bing.com/th/id/OIP.uLPkBB6D1zrYQD4EjdyTawAAAA?w=400&h=450&rs=1&pid=ImgDetMain",
    languages: ["Tamil", "Telugu"],
  },
  {
    id: 83,
    name: "Dr. Arnav Iyer",
    expertise: "Neurology",
    city: "Salem",
    sex: "male",
    image:
      "https://th.bing.com/th/id/OIP.XqKz_kkahmKVz3wyHvQ13wHaLH?w=800&h=1200&rs=1&pid=ImgDetMain",
    languages: ["Tamil", "Telugu"],
  },
  {
    id: 84,
    name: "Dr. Anaya",
    expertise: "Psychiatry",
    city: "Vijayawada",
    sex: "female",
    image:
      "https://imagesx.practo.com/providers/dr-ananya-polam-reddy-gynecologist-bangalore-7b2853af-6610-4774-aa30-4370bd75ad96.jpg?i_type=t_100x100-4x",
    languages: ["Telugu", "Kannada"],
  },
  {
    id: 85,
    name: "Dr. Aarush Menon",
    expertise: "Ophthalmology",
    city: "Visakhapatnam",
    sex: "male",
    image:
      "https://th.bing.com/th/id/OIP.81ov48LWrWJTDAb0dv00kAHaID?w=500&h=544&rs=1&pid=ImgDetMain",
    languages: ["Malayalam", "Tamil"],
  },
  {
    id: 86,
    name: "Dr. Lavanya Reddy",
    expertise: "Gynecology",
    city: "Guntur",
    sex: "female",
    image:
      "https://imagesx.practo.com/providers/dr-ananya-polam-reddy-gynecologist-bangalore-7b2853af-6610-4774-aa30-4370bd75ad96.jpg?i_type=t_100x100-4x",
    languages: ["Telugu", "Kannada"],
  },
  {
    id: 87,
    name: "Dr. Advaita",
    expertise: "ENT",
    city: "Nellore",
    sex: "female",
    image:
      "https://th.bing.com/th/id/OIP.voMb3egdH4J0zRtH1GikqgAAAA?w=454&h=519&rs=1&pid=ImgDetMain",
    languages: ["Telugu", "Kannada"],
  },
  {
    id: 88,
    name: "Dr. Anaya Reddy",
    expertise: "Cardiology",
    city: "Kurnool",
    sex: "female",
    image:
      "https://imagesx.practo.com/providers/dr-lavanya-gynecologist-hyderabad-af6d79ee-5f06-4b83-a21c-d207b7f15a65.jpg?i_type=t_100x100-4x",
    languages: ["Telugu", "Kannada"],
  },
  {
    id: 89,
    name: "Dr. Aarush Menon",
    expertise: "Orthopedics",
    city: "Rajahmundry",
    sex: "male",
    image:
      "https://th.bing.com/th/id/OIP.81ov48LWrWJTDAb0dv00kAHaID?w=500&h=544&rs=1&pid=ImgDetMain",
    languages: ["Malayalam", "Tamil"],
  },
  {
    id: 90,
    name: "Dr. Arjun Choudhary",
    expertise: "Dermatology",
    city: "Tirupati",
    sex: "male",
    image:
      "https://imagesx.practo.com/providers/dr-k-thiruppathi-general-physician-chennai-dc5b8456-77ee-44b9-9ed7-1608f5cd31ee.jpg?i_type=t_100x100-4x",
    languages: ["Telugu", "Kannada"],
  },
  {
    id: 91,
    name: "Dr. Aanya Iyer",
    expertise: "Neurology",
    city: "Kakinada",
    sex: "female",
    image:
      "https://th.bing.com/th/id/OIP.voMb3egdH4J0zRtH1GikqgAAAA?w=454&h=519&rs=1&pid=ImgDetMain",
    languages: ["Telugu", "Kannada"],
  },
  {
    id: 92,
    name: "Dr. Priya Yadav",
    expertise: "Gastroenterology",
    city: "Anantapur",
    sex: "female",
    image:
      "https://imagesx.practo.com/providers/dr-lavanya-gynecologist-hyderabad-af6d79ee-5f06-4b83-a21c-d207b7f15a65.jpg?i_type=t_100x100-4x",
    languages: ["Telugu", "Kannada"],
  },
  {
    id: 93,
    name: "Dr. Kabir Iyer",
    expertise: "Oncology",
    city: "Kollam",
    male: "male",
    image:
      "https://th.bing.com/th/id/OIP.llQsNNREcQu4MlKbeQh8kQHaHa?rs=1&pid=ImgDetMain",
    languages: ["Tamil", "Telugu"],
  },
  {
    id: 94,
    name: "Dr. Advait Menon",
    expertise: "Pediatrics",
    city: "Alappuzha",
    sex: "male",
    image:
      "https://imagesx.practo.com/providers/dr-natraj-p-ent-otorhinolaryngologist-chennai-544b1c93-f98a-412b-bc67-270afc91f138.jpg?i_type=t_100x100-4x",
    languages: ["Malayalam", "Tamil"],
  },
  {
    id: 95,
    name: "Dr. Aanya Nair",
    expertise: "Dentistry",
    city: "Thiruvalla",
    sex: "female",
    image:
      "https://th.bing.com/th/id/OIP.voMb3egdH4J0zRtH1GikqgAAAA?w=454&h=519&rs=1&pid=ImgDetMain",
    languages: ["Malayalam", "Tamil"],
  },
  {
    id: 96,
    name: "Dr. Arush Iyer",
    expertise: "Urology",
    city: "Kottayam",
    sex: "male",
    image:
      "https://th.bing.com/th/id/OIP.-21gAOJ4vePxlytPpx-lcQAAAA?rs=1&pid=ImgDetMain",
    languages: ["Malayalam", "Tamil"],
  },
  {
    id: 97,
    name: "Dr. Sireesha Reddy",
    expertise: "Psychiatry",
    city: "Pathanamthitta",
    sex: "female",
    image:
      "https://imagesx.practo.com/providers/dr-sireesha-reddy-gynecologist-bangalore-2545116b-1dcf-4054-8699-08b3d0930bee.jpg?i_type=t_100x100-4x",
    languages: ["Malayalam", "Tamil"],
  },
  {
    id: 98,
    name: "Dr. Arjun Menon",
    expertise: "Cardiology",
    city: "Idukki",
    sex: "male",
    image:
      "https://www.meitra.com/public/upload_file/650935fa349f91695102458.jpeg",
    languages: ["Kannada", "Tamil"],
  },
  {
    id: 99,
    name: "Dr. Aarav Iyer",
    expertise: "Dermatology",
    city: "Ernakulam",
    sex: "male",
    image:
      "https://cdn.askapollo.com/live/images/doctors/general-surgery/dr-katha-abhishek-general-surgery-in-hyderabad.png",
    languages: ["Kannada", "Tamil"],
  },
  {
    id: 100,
    name: "Dr. Saanvi Yadav",
    expertise: "Orthopedics",
    city: "Malappuram",
    sex: "female",
    image:
      "https://imagesx.practo.com/providers/dr-sireesha-reddy-gynecologist-bangalore-2545116b-1dcf-4054-8699-08b3d0930bee.jpg?i_type=t_100x100-4x",
    languages: ["Malayalam", "Hindi"],
  },
];

const patientFeedback = {
  patient_feedback: [
    {
      id: 1,
      name: "Amrutha",
      sex: "female",
      comment:
        "The fixed health online consultation was a game-changer for me. It was convenient, and I got prompt and reliable medical advice without leaving my home.",
      image_url:
        "https://th.bing.com/th/id/OIP.duSIrEaLgpHAQ5rEEhzghQHaHa?w=800&h=800&rs=1&pid=ImgDetMain",
    },
    {
      id: 2,
      name: "Varun Kumar",
      sex: "male",
      comment:
        "I was skeptical at first, but the fixed health online consultation exceeded my expectations. The doctors were knowledgeable, and I felt comfortable discussing my health concerns.",
      image_url:
        "https://media.licdn.com/dms/image/C5603AQEX-CXRk9QBEQ/profile-displayphoto-shrink_800_800/0/1641001774279?e=2147483647&v=beta&t=9gm8I0re2vcOQ8Bpas_fMC_uvMHCBXMtnsfxXhGLZGk",
    },
    {
      id: 3,
      name: "Mamta Desai",
      sex: "female",
      comment:
        "I appreciate the ease of scheduling appointments and the thoroughness of the online consultations. It saved me time and hassle, and I received quality care.",
      image_url:
        "https://2.bp.blogspot.com/-GBoVzmFzKC0/XN7web8uSCI/AAAAAAAAPcA/Y9z1ZY6v-FkSvSEDQRl-UGO0xm9uSch0ACLcBGAs/s1600/Screenshot_2019-04-16-08-23-28-231_com.instagram.android.png",
    },
    {
      id: 4,
      name: "Anjali Kumari",
      sex: "female",
      comment:
        "The fixed health online consultation made healthcare accessible, especially during busy times. The doctors were attentive, and the platform was user-friendly.",
      image_url:
        "https://th.bing.com/th/id/OIP.1spktz7j96NA2mzwMayaWQHaJO?w=924&h=1152&rs=1&pid=ImgDetMain",
    },
    {
      id: 5,
      name: "Priya",
      sex: "female",
      comment:
        "As someone with a chronic condition, the online consultations provided me with the necessary support and guidance. It's a great option for ongoing healthcare management.",
      image_url:
        "https://www.southindiafashion.com/wp-content/uploads/2021/06/Nakshathra-Nagesh-in-the-apparel-stores-saree-4-241x300.jpg",
    },
    {
      id: 6,
      name: "Sankar Swami",
      sex: "male",
      comment:
        "I was pleasantly surprised by the personalized care I received during the online consultation. The doctors took the time to understand my situation and provided tailored advice.",
      image_url:
        "https://th.bing.com/th/id/R.6a470cbfa4c2efd8858e6aa1af13a70a?rik=EvnmEO8EdtlbJQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-O99KuABpU_I%2fTykQvDUaqhI%2fAAAAAAAAhvE%2ftdfFA5m2IjU%2fw1200-h630-p-k-no-nu%2fAravind-Swamy.jpg&ehk=yCBMms5X9KF9hiN68Hi5edcA1hZ1Of5LJ5NUMk4v6Gw%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 7,
      name: "Ananya",
      sex: "female",
      comment:
        "The fixed health online consultation was a lifeline during the pandemic. It allowed me to address health concerns without unnecessary exposure to crowded waiting rooms.",
      image_url:
        "https://2.bp.blogspot.com/-QbOITf9xq6I/Vn-WLohA97I/AAAAAAAAMJQ/fE3eFFI9ftU/s1600/Most%2BBeautiful%2BIndian%2Bgirls%2Bselfie%2Bphotos%252Bdeshi%2Bcute%2Bgirls%2B%25281%2529.jpg",
    },
    {
      id: 8,
      name: "Harish Joshi",
      sex: "male",
      comment:
        "I appreciated the convenience of follow-up consultations through the online platform. It made managing my health conditions much more efficient.",
      image_url:
        "https://media.licdn.com/dms/image/C5603AQF7y1LosWtW0g/profile-displayphoto-shrink_800_800/0/1517053072870?e=2147483647&v=beta&t=dA2HZjeWL3r2djGvTji1zZvxnaS2EpNuzQwC5eyUHhc",
    },
    {
      id: 9,
      name: "Renuka Desai",
      sex: "female",
      comment:
        "The online consultations were a time-saver for me. No more commuting or waiting – just quality healthcare from the comfort of my home.",
      image_url:
        "https://th.bing.com/th/id/R.0ed14d854359798ba56741448b6de064?rik=6AcPnlU4JFmJMA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-6Ru_KzVsOM8%2fTfOEIKzoo2I%2fAAAAAAAAAM8%2fNFwF4qr2r1E%2fw1200-h630-p-k-no-nu%2f250943_217147264971382_100000283303323_852798_2536016_n.jpg&ehk=lNL8OazqMuk8b4r1n0TP0NIMru%2bDTgIclcsZZPzvJIE%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 10,
      name: "Arun Kumar",
      sex: "male",
      comment:
        "I initially hesitated, but the fixed health online consultation turned out to be a fantastic experience. The doctors were professional, and the process was seamless.",
      image_url:
        "https://farm4.staticflickr.com/3753/20261370468_dc70b6bf98_b.jpg",
    },
  ],
};

app.get("/api/doctors", (req, res) => {
  try {
    const { city, language } = req.query;

    if (city || language) {
      const filteredDoctors = doctorsData.filter((doctor) => {
        const matchesCity = !city || doctor.city.toLowerCase() === city.toLowerCase();
        const matchesLanguage =
          !language ||
          doctor.languages.map((lang) => lang.toLowerCase()).includes(language.toLowerCase());

        return matchesCity || matchesLanguage;
      });

      res.json(filteredDoctors);
    } else {
      // If no city or language provided, return all doctors
      res.json(doctorsData);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error." });
  }
});




app.get("/api/patients", (req, res) => {
  res.json(patientFeedback);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
