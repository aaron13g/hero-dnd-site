---
layout: page
title: Player Characters
permalink: /atlas/pcs/
---

<table class="npc-table" id="pc-table">
  <thead>
    <tr>
      <th onclick="sortTable(0)">Name ↕</th>
      <th onclick="sortTable(1)">Player ↕</th>
      <th onclick="sortTable(2)">Class ↕</th>
      <th onclick="sortTable(3)">Race ↕</th>
      <th onclick="sortTable(4)">Level ↕</th>
      <th onclick="sortTable(5)">Alignment ↕</th>
      <th onclick="sortTable(6)">First Appearance ↕</th>
    </tr>
  </thead>
  <tbody>
  {% for pc in site.pcs %}
    <tr>
      <td><a href="{{ pc.url | relative_url }}">{{ pc.title }}</a></td>
      <td>{{ pc.player }}</td>
      <td>{{ pc.class }}</td>
      <td>{{ pc.race }}</td>
      <td>{{ pc.level }}</td>
      <td>{{ pc.alignment }}</td>
      <td data-session="{{ pc.first_session }}">
        {% if pc.first_session == "TBD" or pc.first_session == nil %}
          TBD
        {% else %}
          Session {{ pc.first_session }}
        {% endif %}
      </td>
    </tr>
  {% endfor %}
  </tbody>
</table>

<script>
let sortDirection = {};

function sortTable(col) {
  const table = document.getElementById("pc-table");
  const tbody = table.querySelector("tbody");
  const rows = Array.from(tbody.querySelectorAll("tr"));

  sortDirection[col] = !sortDirection[col];
  const ascending = sortDirection[col];

  rows.sort((a, b) => {
    let aText = a.cells[col].getAttribute("data-session") || a.cells[col].innerText.trim();
    let bText = b.cells[col].getAttribute("data-session") || b.cells[col].innerText.trim();

    const aNum = parseFloat(aText);
    const bNum = parseFloat(bText);
    const bothNumeric = !isNaN(aNum) && !isNaN(bNum);

    if (bothNumeric) {
      return ascending ? aNum - bNum : bNum - aNum;
    } else {
      if (aText === "TBD" || aText === "") return 1;
      if (bText === "TBD" || bText === "") return -1;
      return ascending ? aText.localeCompare(bText) : bText.localeCompare(aText);
    }
  });

  rows.forEach(row => tbody.appendChild(row));
}
</script>
