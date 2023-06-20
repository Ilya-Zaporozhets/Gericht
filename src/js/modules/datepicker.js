const regex = /^(0[1-9]|1[012]|[1-12])(|\/|\.)(0[1-9]|[12][0-9]|3[01]|[1-9])(|\/|\.)(((19|20)\d\d)|(\d\d)$)/gm;

function ExtractDate(date) {
  if (typeof date === "object") return date;
  const a = regex.exec(date);
  if (!a) return;

  let mm = +a[1], dd = +a[3], yy = +a[5];
  mm = mm < 10 ? "0" + mm : mm; 
  dd = dd < 10 ? "0" + dd : dd;
  yy = yy.toString().length === 4 ? yy : 30 < yy && yy < 100 ? 1900 + yy : 2000 + yy;

  return {
    mm,
    dd,
    yy,
    date: new Date(+yy, (+mm - 1), (+dd))
  };
}

const app = new Vue({
  el: '#app',
  data() {
    return {
      value: setCurrentDate()
    }
  }
});

function setCurrentDate() {
  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const year = currentDate.getFullYear().toString();

  return `${month}/${day}/${year}`;
}

$(".datepicker").datepicker({
  format: {
    toDisplay(date, format, language) {
      console.log('>', date);
      if (typeof date === "object") {
        let mm = date.getMonth() + 1, dd =  date.getDate(), yy = date.getFullYear();
        mm = mm < 10 ? "0" + mm : mm; 
        dd = dd < 10 ? "0" + dd : dd;
        return [mm, dd, yy].join("/");
      }
      console.log('>>', date, mm, dd, yy);
      return date;
    },
    toValue(date, format, language) {
      console.log('+', date);
      const d = ExtractDate(date);
      if (!d) return;
      console.log("toValue:", d);
      return d.date;
    }
  }
});
