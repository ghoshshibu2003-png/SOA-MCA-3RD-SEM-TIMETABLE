const sectionSelect = document.getElementById("section");
const todayBody = document.getElementById("todayBody");
const todayText = document.getElementById("today");
const roomText = document.getElementById("room");
const weeklyBtn = document.getElementById("weeklyBtn");
const weeklyBox = document.getElementById("weeklyBox");
const weeklyTable = document.getElementById("weeklyTable");
const subjectTeacherList = document.getElementById("subjectTeacherList");
const downloadBtn = document.getElementById("downloadBtn");

const today = new Date().toLocaleString("en-US", { weekday: "long" });
todayText.innerText = "📆 Day: " + today;

const SUBJECTS = [
  "CA3315 – MACHINE LEARNING USING PYTHON",
  "CA3441 – CYBER SECURITY",
  "CA3442 – DECIPHERING DATA ARCHITECTURES",
  "CA3013 – SEMINAR",
  "CA3440 – FINAL YEAR RESEARCH PROJECT"
];

const SECTION_DATA = {

  A1: {
    room: "456",
    timeSlots: ["8–9 AM","9–10 AM","10–11 AM","11–12 NOON","12–1 PM","1–2 PM","2–3 PM","3–4 PM","4–5 PM","5–6 PM"],
    grid: {
      Monday:    ["X","X","X","X","X","X","MLUP","CS","PROJECT","PROJECT"],
      Tuesday:   ["X","X","X","X","X","X","CS","DDA","PROJECT","PROJECT"],
      Wednesday: ["X","X","X","X","X","X","MLUP","DDA","SEMINAR","SEMINAR"],
      Thursday:  ["PROJECT","PROJECT","MLUP","DDA","CS","X","X","X","X","X"],
      Friday:    ["PROJECT","PROJECT","CS","MLUP","DDA","X","X","X","X","X"],
      Saturday:  ["X","PROJECT","PROJECT","SEMINAR","SEMINAR","X","X","X","X","X"],
      Sunday:    Array(10).fill("Holiday")
    },
    teachers: [
      "MADHUSMITA SAHU",
      "DEBABRATA SINGH",
      "SARITA MOHAPATRA",
      "PRASANT KUMAR SAHOO",
      "SASWATI MOHAPATRA"
    ]
  },

  A2: {
    room: "456",
    timeSlots: ["8–9 AM","9–10 AM","10–11 AM","11–12 NOON","12–1 PM","1–2 PM","2–3 PM","3–4 PM","4–5 PM","5–6 PM"],
    grid: {
      Monday:    ["PROJECT","PROJECT","MLUP","CS","DDA","X","X","X","X","X"],
      Tuesday:   ["X","PROJECT","PROJECT","SEMINAR","SEMINAR","X","X","X","X","X"],
      Wednesday: ["PROJECT","PROJECT","CS","DDA","MLUP","X","X","X","X","X"],
      Thursday:  ["X","X","X","X","X","X","MLUP","DDA","PROJECT","PROJECT"],
      Friday:    ["X","X","X","X","X","X","DDA","CS","SEMINAR","SEMINAR"],
      Saturday:  ["X","X","X","X","X","X","CS","MLUP","PROJECT","PROJECT"],
      Sunday:    Array(10).fill("Holiday")
    },
    teachers: [
      "MADHUSMITA SAHU",
      "DEBABRATA SINGH",
      "SARITA MOHAPATRA",
      "MANAS KUMAR NANDA",
      "DEBABRATA ROY"
    ]
  },

  B1: {
    room: "457",
    timeSlots: ["8–9 AM","9–10 AM","10–11 AM","11–12 NOON","12–1 PM","1–2 PM","2–3 PM","3–4 PM","4–5 PM","5–6 PM"],
    grid: {
      Monday:    ["PROJECT","PROJECT","MLUP","CS","DDA","X","X","X","X","X"],
      Tuesday:   ["PROJECT","PROJECT","DDA","CS","MLUP","X","X","X","X","X"],
      Wednesday: ["PROJECT","PROJECT","MLUP","CS","DDA","X","X","X","X","X"],
      Thursday:  ["X","X","X","X","X","X","SEMINAR","SEMINAR","PROJECT","PROJECT"],
      Friday:    ["X","X","X","X","X","X","MLUP","CS","DDA","X"],
      Saturday:  ["X","X","X","X","X","X","SEMINAR","SEMINAR","PROJECT","PROJECT"],
      Sunday:    Array(10).fill("Holiday")
    },
    teachers: [
      "MOHINIKANTA SAHOO",
      "SWATI SUCHARITA ROY",
      "SNEHARANI MUNI",
      "NEELAM AGRAWAL",
      "MADHUSMITA SAHU"
    ]
  },

  B2: {
    room: "457",
    timeSlots: ["8–9 AM","9–10 AM","10–11 AM","11–12 NOON","12–1 PM","1–2 PM","2–3 PM","3–4 PM","4–5 PM","5–6 PM"],
    grid: {
      Monday:    ["X","X","X","X","X","X","SEMINAR","SEMINAR","PROJECT","PROJECT"],
      Tuesday:   ["X","X","X","X","X","X","DDA","CS","MLUP","X"],
      Wednesday: ["X","X","X","X","X","X","SEMINAR","SEMINAR","PROJECT","PROJECT"],
      Thursday:  ["PROJECT","PROJECT","MLUP","DDA","CS","X","X","X","X","X"],
      Friday:    ["PROJECT","PROJECT","CS","DDA","MLUP","X","X","X","X","X"],
      Saturday:  ["PROJECT","PROJECT","DDA","MLUP","CS","X","X","X","X","X"],
      Sunday:    Array(10).fill("Holiday")
    },
    teachers: [
      "MOHINIKANTA SAHOO",
      "SWATI SUCHARITA ROY",
      "SNEHARANI MUNI",
      "BINITA KUMARI",
      "ALOK KUMAR PATI"
    ]
  },

  C1: {
    room: "409",
    timeSlots: ["8–9 AM","9–10 AM","10–11 AM","11–12 NOON","12–1 PM","1–2 PM","2–3 PM","3–4 PM","4–5 PM","5–6 PM"],
    grid: {
      Monday:    ["PROJECT","PROJECT","DDA","CS","MLUP","X","X","X","X","X"],
      Tuesday:   ["PROJECT","PROJECT","MLUP","CS","DDA","X","X","X","X","X"],
      Wednesday: ["PROJECT","PROJECT","DDA","CS","MLUP","X","X","X","X","X"],
      Thursday:  ["X","X","X","X","X","X","MLUP","CS","DDA","X"],
      Friday:    ["X","X","X","X","X","X","SEMINAR","SEMINAR","PROJECT","PROJECT"],
      Saturday:  ["X","X","X","X","X","X","SEMINAR","SEMINAR","PROJECT","PROJECT"],
      Sunday:    Array(10).fill("Holiday")
    },
    teachers: [
      "MOHINIKANTA SAHOO",
      "JOGESWAR TRIPATHY",
      "SNEHARANI MUNI",
      "SAMPA CHAU PATTNAIK",
      "SWATI SUCHARITA ROY"
    ]
  }
};

sectionSelect.addEventListener("change", () => {
  const sec = sectionSelect.value;
  if (!sec) return;

  const data = SECTION_DATA[sec];
  todayBody.innerHTML = "";
  weeklyBox.style.display = "none";
  weeklyBtn.style.display = "inline-block";
  roomText.innerText = "🏫 Room: " + data.room;

  if (today === "Sunday") {
    todayBody.innerHTML = "<tr><td>Sunday Holiday</td></tr>";
    return;
  }

  let timeRow = "<tr>";
  let subRow = "<tr>";
  let hasClass = false;

  data.timeSlots.forEach((t, i) => {
    const sub = data.grid[today][i];
    if (sub !== "X" && sub !== "Holiday") {
      hasClass = true;
      timeRow += `<td>${t}</td>`;
      subRow += `<td>${sub}</td>`;
    }
  });

  todayBody.innerHTML = hasClass
    ? timeRow + "</tr>" + subRow + "</tr>"
    : "<tr><td>No classes today</td></tr>";
});

weeklyBtn.addEventListener("click", () => {
  const sec = sectionSelect.value;
  const data = SECTION_DATA[sec];

  weeklyBox.style.display = "block";
  weeklyTable.innerHTML = "";
  subjectTeacherList.innerHTML = "";

  let header = "<tr><th>Day</th>";
  data.timeSlots.forEach(t => header += `<th>${t}</th>`);
  weeklyTable.innerHTML += header + "</tr>";

  Object.keys(data.grid).forEach(day => {
    let row = `<tr><th>${day}</th>`;
    data.grid[day].forEach(c => row += `<td>${c}</td>`);
    weeklyTable.innerHTML += row + "</tr>";
  });

  SUBJECTS.forEach((sub, i) => {
    const li = document.createElement("li");
    li.textContent = `${sub} – ${data.teachers[i]}`;
    subjectTeacherList.appendChild(li);
  });
});

downloadBtn.addEventListener("click", () => {
  const sec = sectionSelect.value;
  if (!sec || !weeklyTable.innerHTML.trim()) {
    alert("Please view weekly timetable before downloading.");
    return;
  }

  const table = weeklyTable.outerHTML;
  const subjectList = subjectTeacherList.outerHTML;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${sec} Weekly Timetable</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 16px; }
    h2, h3 { text-align: center; }
    table { width: 100%; border-collapse: collapse; font-size: 13px; }
    th, td { border: 1px solid #000; padding: 6px; text-align: center; }
    th { background: #4f46e5; color: #fff; }
    ul { margin-top: 12px; padding-left: 18px; font-size: 13px; }
  </style>
</head>
<body>
  <h2>${sec} Weekly Timetable</h2>
  ${table}
  <h3>Subject Code – Subject – Teacher</h3>
  ${subjectList}
</body>
</html>
`;

  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `${sec}_Weekly_Timetable.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  URL.revokeObjectURL(url);
});
