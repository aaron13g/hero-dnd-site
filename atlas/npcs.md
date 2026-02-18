---
layout: page
title: NPC Directory
permalink: /atlas/npcs/
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
      <th>Known Allies</th>
      <th>Known Enemies</th>
    </tr>
  </thead>
  <tbody>
  {% assign sorted_npcs = site.npcs | sort: "first_session" %}
  {% for npc in sorted_npcs %}
    <tr>
      <td>
        <a href="{{ npc.url | relative_url }}">{{ npc.title }}</a>
      </td>
      <td>{{ npc.role }}</td>
      <td>{{ npc.race }}</td>
      <td>{{ npc.alignment }}</td>
      <td>{{ npc.status }}</td>
      <td>{{ npc.affiliation }}</td>
      <td>Session {{ npc.first_session }}</td>
      <td>
        {% if npc.known_allies %}
          {{ npc.known_allies | join: ", " }}
        {% else %}
          —
        {% endif %}
      </td>
      <td>
        {% if npc.known_enemies %}
          {{ npc.known_enemies | join: ", " }}
        {% else %}
          —
        {% endif %}
      </td>
    </tr>
  {% endfor %}
  </tbody>
</table>

