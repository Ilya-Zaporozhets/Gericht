const initializeDatepicker = () => {
  // Функция для вставки текущей даты в placeholder
  const insertCurrentDate = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Месяцы в JavaScript начинаются с 0
    const year = currentDate.getFullYear();

    // Форматирование даты в виде "dd/mm/yyyy"
    const formattedDate = `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;

    // Установка отформатированной даты в значение placeholder
    document.querySelector(".datepicker").placeholder = formattedDate;
  };

  // Инициализация Datepicker
  const today = new Date(); // Получение текущей даты
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
    minDate: today // Ограничение выбора предыдущих дат
  });

  // Вызов функции для вставки текущей даты
  insertCurrentDate();
};

// Вызов функции для инициализации Datepicker
initializeDatepicker();

// ====================================================================================================

// ========================================================== TIMEPICKER ====================================================================

const initializeTimepicker = () => {
  // Функция для вставки текущего времени в placeholder
  const insertCurrentTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();

    // Форматирование времени в виде "HH:mm"
    const formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;

    // Установка отформатированного времени в значение placeholder
    document.querySelector(".timepicker").placeholder = formattedTime;
  };

  // Инициализация Timepicker
  const now = new Date(); // Получение текущего времени
  $("#time").timepicker({
    timeFormat: 'HH:mm', // Формат времени в 24-часовом формате
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
    minTime: now // Ограничение выбора предыдущего времени
  });

  // Вызов функции для вставки текущего времени
  insertCurrentTime();
};

// Вызов функции для инициализации Timepicker
initializeTimepicker();
