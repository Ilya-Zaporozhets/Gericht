// Function to insert the current date into the placeholder
const insertCurrentDate = () => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Months in JavaScript start from 0
  const year = currentDate.getFullYear();

  // Formatting the date as "dd/mm/yyyy"
  const formattedDate = `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;

  // Setting the formatted date as the placeholder value
  document.querySelector(".datepicker").placeholder = formattedDate;
};

// Function to initialize the Datepicker
const initializeDatepicker = () => {
  const reservationsFormElement = document.getElementById("reservations-form");
  if (!reservationsFormElement) {
    return; // Exit the function if the element is not found
  }

  // Initializing the Datepicker
  const today = new Date(); // Getting the current date
  $("#calendar").datepicker({
    dateFormat: 'dd/mm/yy',
    closeText: "Close",
    prevText: "<Prev",
    nextText: "Next>",
    currentText: "Today",
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    weekHeader: "Sm",
    firstDay: 1,
    beforeShow: function(input, inst) {
      inst.dpDiv.css({
         left: "50%",
        transform: "translateX(-50%) translateX(-${datepickerWidth / 2}px)"
      });
    },
    autoSize: true,
    minDate: today // Restrict selection of previous dates
  });

  // Call the function to insert the current date
  insertCurrentDate();
};

// Function to insert the current time into the placeholder
const insertCurrentTime = () => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();

  // Formatting the time as "HH:mm"
  const formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;

  // Setting the formatted time as the placeholder value
  document.querySelector(".timepicker").placeholder = formattedTime;
};

// Function to initialize the Timepicker
const initializeTimepicker = () => {
  const reservationsFormElement = document.getElementById("reservations-form");
  if (!reservationsFormElement) {
    return; // Exit the function if the element is not found
  }

  // Initializing the Timepicker
  const now = new Date(); // Getting the current time
  $("#time").timepicker({
    timeFormat: 'HH:mm', // Time format in 24-hour format
    interval: 30,
    defaultTime: '12:00',
    closeOnSelect: true,
    beforeShow: function(input, inst) {
      const inputRect = input.getBoundingClientRect();
      const inputWidth = inputRect.width;
      const inputHeight = inputRect.height;

      inst.dpDiv.css({
        width: inputWidth + "px",
        height: inputHeight + "px",
        top: "auto",
        bottom: "100%",
        left: "50%",
        transform: "translateX(-50%)"
      });
    },
    minTime: now // Restrict selection of previous time
  });

  // Call the function to insert the current time
  insertCurrentTime();
};

// Call functions to initialize the Datepicker and Timepicker
initializeDatepicker();
initializeTimepicker();
