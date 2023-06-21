const initializeDatepicker = () => {
  // Функция для подстройки размеров Datepicker
  const adjustDatepickerSize = () => {
    const input = document.getElementById("calendar");
    const inputRect = input.getBoundingClientRect();
    const inputWidth = inputRect.width;
    const inputHeight = inputRect.height;

    $(".datepicker").datepicker("option", "beforeShow", function (input, inst) {
      inst.dpDiv.css({ width: inputWidth, height: inputHeight });
    });
  };

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
        top: "auto",
        bottom: "100%",
        left: "50%",
        transform: "translateX(-50%)"
      });
    },
    autoSize: true,
  });

  // Вызов функции для подстройки размеров Datepicker
  adjustDatepickerSize();

  // Вызов функции для вставки текущей даты
  insertCurrentDate();

  // Вызов функции при загрузке страницы и при изменении размеров окна
  $(document).ready(adjustDatepickerSize);
  $(window).resize(adjustDatepickerSize);
};

// Вызов функции для инициализации Datepicker
initializeDatepicker();
