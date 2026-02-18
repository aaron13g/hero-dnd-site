---
layout: page
title: NPC Directory
permalink: /atlas/npcs/
---

<table class="npc-table" id="npc-table">
  <thead>
    <tr>
      <th onclick="sortTable(0)">Name ↕</th>
      <th onclick="sortTable(1)">Role ↕</th>
      <th onclick="sortTable(2)">Race ↕</th>
      <th onclick="sortTable(3)">Alignment ↕</th>
      <th onclick="sortTable(4)">Status ↕</th>
      <th onclick="sortTable(5)">Affiliation ↕</th>
      <th onclick="sortTable(6)">First Appearance ↕</th>
    </tr>
  </thead>
  <tbody>
  {% for npc in site.npcs %}
    <tr>
      <td><a href="{{ npc.url | relative_url }}">{{ npc.title }}</a></td>
      <td>{{ npc.role }}</td>
      <td>{{ npc.race }}</td>
      <td>{{ npc.alignment }}</td>
      <td>{{ npc.status }}</td>
      <td>{{ npc.affiliation }}</td>
      <td data-session="{{ npc.first_session }}">
        {% if npc.first_session == "TBD" or npc.first_session == nil %}
          TBD
        {% else %}
          Session {{ npc.first_session }}
        {% endif %}
      </td>
    </tr>
  {% endfor %}
  </tbody>
</table>

<script>
let sortDirection = {};

function sortTable(col) {
  const table = document.getElementById("npc-table");
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
