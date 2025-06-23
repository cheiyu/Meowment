const today = new Date();
let currentMonth = new Date();
const maxDate = new Date();
maxDate.setMonth(maxDate.getMonth() + 1);

const formatDate = (date) => date.toISOString().split("T")[0];

let selectedDate = "";
let selectedTime = "";

const timeSlotsPerDay = {
  "2025-07-01": ["11:00"],
  "2025-07-02": ["11:00", "13:00"],
  "2025-07-03": ["11:00", "13:00", "15:00"],
};

function renderCalendar(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const header = document.createElement("div");
  header.className = "calendar-header";
  const prev = document.createElement("span");
  prev.textContent = "<";
  prev.style.cursor = "pointer";
  prev.onclick = () => {
    currentMonth.setMonth(currentMonth.getMonth() - 1);
    renderCalendar(containerId);
  };

  const next = document.createElement("span");
  next.textContent = ">";
  next.style.cursor = "pointer";
  next.onclick = () => {
    currentMonth.setMonth(currentMonth.getMonth() + 1);
    renderCalendar(containerId);
  };

  const title = document.createElement("span");
  title.textContent = `${year}年 ${month + 1}月`;
  header.append(prev, title, next);

  const weekdays = document.createElement("div");
  weekdays.className = "calendar-weekdays";
  weekdays.textContent = "日 一 二 三 四 五 六";

  const grid = document.createElement("div");
  grid.className = "calendar-grid";
  const firstDay = new Date(year, month, 1);
  const startDay = firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < startDay; i++) {
    grid.appendChild(document.createElement("div"));
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const d = new Date(year, month, i);
    const cell = document.createElement("div");
    cell.textContent = i;
    cell.className = "calendar-day";
    if (d < today || d > maxDate || isFull(d)) {
      cell.classList.add("disabled");
    } else {
      cell.addEventListener("click", () => {
        selectedDate = formatDate(d);
        document
          .querySelectorAll(".calendar-day")
          .forEach((c) => c.classList.remove("selected"));
        cell.classList.add("selected");
        generateTimeSlots("times");
      });
    }
    grid.appendChild(cell);
  }

  container.appendChild(header);
  container.appendChild(weekdays);
  container.appendChild(grid);
}

function isFull(date) {
  const fullDays = ["2025-07-10", "2025-07-08"];
  return fullDays.includes(formatDate(date));
}

function generateTimeSlots(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  const allTimes = ["11:00", "13:00", "15:00", "17:00"];
  const available = timeSlotsPerDay[selectedDate] || allTimes;
  available.forEach((t) => {
    const div = document.createElement("div");
    div.textContent = t;
    div.className = "time-slot";
    if (isTimeFull(t)) {
      div.classList.add("disabled");
    } else {
      div.addEventListener("click", () => {
        selectedTime = t;
        document
          .querySelectorAll(".time-slot")
          .forEach((slot) => slot.classList.remove("selected"));
        div.classList.add("selected");
      });
    }
    container.appendChild(div);
  });
}

function isTimeFull(time) {
  return false;
}

document.addEventListener("DOMContentLoaded", () => {
  renderCalendar("calendar");
  generateTimeSlots("times");
});
