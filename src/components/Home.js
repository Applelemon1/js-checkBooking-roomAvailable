import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import bookingData from "../bookingData";

function Home() {
  Array.prototype.max = function () {
    return Math.max.apply(null, this);
  };

  Array.prototype.min = function () {
    return Math.min.apply(null, this);
  };

  const { roomId } = useParams();
  if(roomId.length < 4 ){
    alert('ห้องนี้ไม่มีในระบบ โปรดลองอีกครั้ง');
    window.location.href = '../404';
  }

  const filteredRooms = bookingData.filter((room) => {    
    return room.roomId.includes(roomId);
  });

  
  console.log(filteredRooms.length);
  let arr_rooms_startTime = [];
  for (let i = 0; i < filteredRooms.length; i++) {
    const timeInt = Date.parse(filteredRooms[i].startTime);
    arr_rooms_startTime.push(timeInt);
  }
  const firstDay = arr_rooms_startTime.min();
  


  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const d = new Date(firstDay);
  let day = weekday[d.getDay()];
  const day2 = day.slice(0, 3);
  let date = d.getDate();
  let namemonth = month[d.getMonth()];

  const dtomorrow = new Date(d);
  dtomorrow.setDate(d.getDate() + 1);

  let daytomorrow = weekday[dtomorrow.getDay()];
  const day2tomorrow = daytomorrow.slice(0, 3);

  let datetomorrow = dtomorrow.getDate();

  if (datetomorrow == 1) {

    var namemonthtomorrow = month[d.getMonth() + 1];
  } else {

    var namemonthtomorrow = month[d.getMonth()];
  }
  

  if (filteredRooms.length == 1) {
    var time1 = filteredRooms[0].startTime.slice(10, 16);
    var endtime1 = filteredRooms[0].endTime.slice(10, 16);
    var title1 = filteredRooms[0].title;
    var time2 = "";
    var time3 = "";

    var endtime2 = "";
    var endtime3 = "";

    var title2 = "";
    var title3 = "";

    var time4 = "";
    var time5 = "";
    var endtime4 = "";
    var endtime5 = "";
    var title4 = "";
    var title5 = "";
  }
  if (filteredRooms.length > 1) {
    var time1 = filteredRooms[0].startTime.slice(10, 16);
    var endtime1 = filteredRooms[0].endTime.slice(10, 16);
    var title1 = filteredRooms[0].title;
    var time2 = filteredRooms[1].startTime.slice(10, 16);
    var time3 = bookingData[2].startTime.slice(10, 16);

    var endtime2 = filteredRooms[1].endTime.slice(10, 16);
    var endtime3 = bookingData[2].endTime.slice(10, 16);

    var title2 = filteredRooms[1].title;
    var title3 = bookingData[2].title;

    var time4 = bookingData[3].startTime.slice(10, 16);
    var time5 = bookingData[4].startTime.slice(10, 16);
    var endtime4 = bookingData[3].endTime.slice(10, 16);
    var endtime5 = bookingData[4].endTime.slice(10, 16);
    var title4 = bookingData[3].title;
    var title5 = bookingData[4].title;
  }

  return (
    <div className="app">
      <div className="left-header">
        <h1>{roomId}</h1>
      </div>
      <div className="right-header">
        <a href="#">THIS WEEK</a>
        <a href="#">NEXT WEEK</a>
        <a href="#">WHOLE MONTH</a>
      </div>

      <div className="left-container">
        <div className="upcoming">Upcoming</div>
        <div className="day">{day}</div>
        <div className="date">
          {date} {namemonth}
        </div>

        <div className="time1">
          {time1} - {endtime1}
        </div>
        <div className="day1">{title1}</div>

        {filteredRooms.length > 1 && (
          <div>
            <div className="time2">
              {time2} - {endtime2}
            </div>
            <div className="day2">{title2}</div>
          </div>
        )}

        {filteredRooms.length > 2 && (
          <div>
            <div className="time3">
              {time3} - {endtime3}
            </div>
            <div className="day3">{title3}</div>
          </div>
        )}

        <div className="rec2"></div>
      </div>

      <div className="right-container">
        <div className="today">
          Today ({day2}, {date} {namemonth})
        </div>
        <div className="time4">
          {time1} - {endtime1}
        </div>
        <div className="day4">{title1}</div>
        {filteredRooms.length > 1 && (
          <div>
            <div className="time5">
              {time2} - {endtime2}
            </div>
            <div className="day5">{title2}</div>
          </div>
        )}
        {filteredRooms.length > 2 && (
          <div>
            <div className="time6">
              {time3} - {endtime3}
            </div>
            <div className="day6">{title3}</div>
          </div>
        )}
        <div className="tomorrow">
          Tomorrow ({day2tomorrow}, {datetomorrow} {namemonthtomorrow})
        </div>
        {filteredRooms.length > 2 && (
          <div>
            <div className="time7">
              {time4} - {endtime4}
            </div>
            <div className="day7">{title4}</div>
          </div>
        )}
        {filteredRooms.length > 2 && (
          <div>
            <div className="time8">
              {time5} - {endtime5}
            </div>
            <div className="day8">{title5}</div>
          </div>
        )}
        <div className="dot1"></div>
        {filteredRooms.length > 1 && (
          <div>
            <div className="dot2"></div>
          </div>
        )}
        {filteredRooms.length > 2 && (
          <div>
            <div className="dot3"></div>
          </div>
        )}
        {filteredRooms.length > 2 && (
          <div>
            <div className="dot4"></div>
          </div>
        )}{" "}
        {filteredRooms.length > 2 && (
          <div>
            <div className="dot5"></div>
          </div>
        )}
        
      </div>
    </div>
  );
}

export default Home;
