const items = document.querySelectorAll('.item'),
  controls = document.querySelectorAll('.control'),
  headerItems = document.querySelectorAll('.item-header'),
  descriptionItems = document.querySelectorAll('.item-description'),
  itemTitle = document.querySelectorAll('.item-title'),
  activeDelay = .80,
  interval = 10000;


var DataList = [
  "Learned creating Android applications in Java. Use Android development platform best-practices, Android Studio, Android Jetpack, and Kotlin to build your own apps for the world’s most-used mobile platform.",
  "Learned the programming fundamentals required for data science. Used Python to create data visualization using Numpy and Pandas. Created complex queries using T-SQL. Used Command Line, and Git to publish work at Github.",
  "Learned healthcare and latest information technology to support the healthcare industries.",
  "Learned foundation of Information Technology which includes various of programming languages and designing websites. Learned about computer hardware, servers and networking."
]
var innerdec = document.getElementsByClassName("item-description");
for(let a = 0; a < innerdec.length; a++) {
  for(let b = 0; b < DataList[a].split(" ").length; b++){
    let div = document.createElement('div');
    div.classList.add('vertical-part');
    var para = document.createElement("b");                
    para.innerHTML = DataList[a].split(" ")[b] + '&nbsp;';
    div.appendChild(para);
    innerdec[a].appendChild(div); 
  }
}

let current = 0;

const slider = {
  init: () => {
    controls.forEach(control => control.addEventListener('click', (e) => { slider.clickedControl(e) }));
    controls[current].classList.add('active');
    items[current].classList.add('active');

  },
  nextSlide: () => { // Increment current slide and add active class
    slider.reset();
    
    if (current === items.length - 1) current = -1; // Check if current slide is last in array
    current++;
    controls[current].classList.add('active');
    items[current].classList.add('active');
    slider.transitionDelay(headerItems);
    slider.transitionDelay(descriptionItems);
    slider.transitionDelay(itemTitle);
  },
  clickedControl: (e) => { // Add active class to clicked control and corresponding slide
    slider.reset();
    clearInterval(intervalF);

    const control = e.target,
      dataIndex = Number(control.dataset.index);

    control.classList.add('active');
    items.forEach((item, index) => {
      if (index === dataIndex) { // Add active class to corresponding slide
        item.classList.add('active');
      }
    })
    current = dataIndex; // Update current slide
    slider.transitionDelay(headerItems);
    slider.transitionDelay(descriptionItems);
    slider.transitionDelay(itemTitle);
    intervalF = setInterval(slider.nextSlide, interval); // Fire that bad boi back up
  },
  reset: () => { // Remove active classes
    items.forEach(item => item.classList.remove('active'));
    controls.forEach(control => control.classList.remove('active'));
  },
  transitionDelay: (items) => { // Set incrementing css transition-delay for .item-header & .item-description, .vertical-part, b elements
    let seconds;

    items.forEach(item => {
      const children = item.childNodes; // .vertical-part(s)
      let count = 1,
        delay;

      item.classList.value === 'item-header' ? seconds = .015 : seconds = .007;

      children.forEach(child => { // iterate through .vertical-part(s) and style b element
        if (child.classList) {
          item.parentNode.classList.contains('active') ? delay = count * seconds + activeDelay : delay = count * seconds;
          child.firstElementChild.style.transitionDelay = `${delay}s`; // b element
          count++;
        }
      })
    })
  },
}

let intervalF = setInterval(slider.nextSlide, interval);
slider.init();
