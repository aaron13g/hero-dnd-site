---
layout: npc
title: NPC Directory
---

<table class="npc-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Role</th>
      <th>Race</th>
      <th>Alignment</th>
      <th>Status</th>
      <th>Affiliation</th>
      <th>First Appearance</th>
    </tr>
  </thead>
  <tbody>
  {% assign sorted_npcs = site.npcs | sort: "first_appearance" %}
  {% for npc in sorted_npcs %}
    <tr>
      <td>
        <a href="{{ npc.url | relative_url }}">
          {{ npc.title }}
        </a>
      </td>
      <td>{{ npc.role }}</td>
      <td>{{ npc.race }}</td>
      <td>{{ npc.alignment }}</td>
      <td>{{ npc.status }}</td>
      <td>{{ npc.affiliation }}</td>
      <td>{{ npc.first_appearance }}</td>
    </tr>
  {% endfor %}
  </tbody>
</table>
>
