

function Page404() {


  Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
  
  Array.prototype.min = function() {
    return Math.min.apply(null, this);
  };
  
  let p = [35,2,65,7,8,9,12,121,33,99];
  
  console.log(`Max value is: ${p.max()}` +
    `\nMin value is: ${p.min()}`);

return (
<div>
      <h2>404 Not found</h2>
      <p>ลองไปที่ URL: /bookings/เลขที่ห้องที่ต้องการค้นหา</p>
      <p>ตัวอย่างเช่น /bookings/A101 ,   /bookings/A102 ,   /bookings/Auditorium</p>
      </div>
  );
}

export default Page404;