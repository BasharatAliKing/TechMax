function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const obj1 = document.getElementById("value-1");
  animateValue(obj1, 100, 750, 2300);
  const obj2 = document.getElementById("value-2");
  animateValue(obj2, 0, 25, 2000);
  const obj3 = document.getElementById("value-3");
  animateValue(obj3, 100, 200, 1500);
  const obj4 = document.getElementById("value-4");
  animateValue(obj4, 0, 4, 1200);