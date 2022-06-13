import React from "react";

function App() {
  const bookingData = [
    {
      id: 1,
      roomId: "A101",
      startTime: "2019-09-28 13:00:00",
      endTime: "2019-09-28 14:00:00",
      title: "Lunch with Petr",
    },
    {
      id: 2,
      roomId: "A101",
      startTime: "2019-09-28 14:00:00",
      endTime: "2019-09-28 15:00:00",
      title: "Sales Weekly Meeting",
    },
    {
      id: 3,
      roomId: "A101",
      startTime: "2019-09-28 16:00:00",
      endTime: "2019-09-28 18:00:00",
      title: "Anastasia Website Warroom",
    },
    {
      id: 4,
      roomId: "A101",
      startTime: "2019-09-29 13:00:00",
      endTime: "2019-09-29 14:00:00",
      title: "One-on-One Session",
    },
    {
      id: 5,
      roomId: "A101",
      startTime: "2019-09-29 16:00:00",
      endTime: "2019-09-29 18:00:00",
      title: "UGC Sprint Planning",
    },
    {
      id: 6,
      roomId: "A102",
      startTime: "2019-09-30 09:00:00",
      endTime: "2019-10-04 18:00:00",
      title: "5-Day Design Sprint Workshop",
    },
    {
      id: 7,
      roomId: "Auditorium",
      startTime: "2019-09-19 09:00:00",
      endTime: "2019-09-23 19:00:00",
      title: "Thai Tech Innovation 2019",
    },
    {
      id: 8,
      roomId: "A101",
      startTime: "2019-09-28 10:00:00",
      endTime: "2019-09-28 13:00:00",
      title: "Raimonland project",
    },
    {
      id: 9,
      roomId: "A102",
      startTime: "2019-09-30 18:00:00",
      endTime: "2019-09-30 20:00:00",
      title: "Management Meetinng",
    },
    {
      id: 10,
      roomId: "A101",
      startTime: "2019-10-04 14:00:00",
      endTime: "2019-10-06 11:00:00",
      title: "3-day workshop Corgi costume",
    },
  ];

  const checkAvailability = (roomId, startTime, endTime) => {
    var d1 = Date.parse(`${startTime}`);
    var d2 = Date.parse(`${endTime}`);

    let e1 = Date.parse(bookingData[roomId - 1].startTime);
    let e2 = Date.parse(bookingData[roomId - 1].endTime);

    if (
      (d1 >= e1 && d1 <= e2) ||
      (d2 >= e1 && d2 <= e2) ||
      (d1 < e1 && d2 > e2)
    ) {
      alert("No, This room is unavailable.");
    } else {
      alert("Yes, This room is available.");
    }
  };

  const getBookingsForWeek = (day) => {
    if (day === "today") {
      const result = bookingData.filter((day) =>
        day.startTime.includes("2019-09-28")
      );
      console.log("this room is booked today", result);
      return result;
    } else if (day === "next week") {
      const result = bookingData.filter((day) =>
        day.startTime.includes("2019-09-29")
      );
      result.push(
        bookingData.filter((day) => day.startTime.includes("2019-09-30"))
      );
      console.log("this room is booked next week", result);
      return result;
    } else {
      //next month
      const result = bookingData.filter((day) =>
        day.startTime.includes("2019-10-04")
      );
      console.log("this room is booked next month", result);
      return result;
    }
  };

  //ฟังก์ชั่นเช็คว่าห้องว่างไหม ในช่วงวันและเวลาที่ระบุ
  //ใส่เบอร์ห้อง , วันเวลาที่เริ่ม , วันเวลาที่สิ้นสุด ลงในฟังก์ชั่นได้เลย
  checkAvailability(10, "2019-10-07 11:00:00", "2019-10-07 11:00:00");


  //ฟังก์ชั่นเช็คว่ามีการจองห้องในวันนี้ อาทิตน์หน้า และเดือนหน้า 
  //ใส่ today,next week , next month ลงในฟังก์ชั่นได้เลย
  getBookingsForWeek("next month");
}

export default App;
