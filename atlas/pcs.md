---
layout: page
title: Player Characters
permalink: /atlas/pcs/
---

# Player Characters

<ul>
{% assign pcs = site.pcs | sort: "title" %}
{% for pc in pcs %}
  <li>
    <a href="{{ pc.url | relative_url }}"><strong>{{ pc.title }}</strong></a>
    {% if pc.class %} – {{ pc.class }}{% endif %}
    {% if pc.level %} (Lv {{ pc.level }}){% endif %}
    {% if pc.player %} — played by {{ pc.player }}{% endif %}
  </li>
{% endfor %}
</ul>
