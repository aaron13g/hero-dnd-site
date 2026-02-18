---
layout: page
title: Atlas Home
subtitle: StoneBound Fate campaign reference
permalink: /atlas/
---

<div class="atlas-grid">

  <a href="{{ '/atlas/sessions' | relative_url }}" class="atlas-card">
    <div class="atlas-card-title">Sessions</div>
    <div class="atlas-card-desc">Play-by-play records of each session</div>
  </a>

  <a href="{{ '/atlas/npcs' | relative_url }}" class="atlas-card">
    <div class="atlas-card-title">NPCs</div>
    <div class="atlas-card-desc">Every named character the party has encountered</div>
  </a>

  <a href="{{ '/atlas/pcs' | relative_url }}" class="atlas-card">
    <div class="atlas-card-title">Player Characters</div>
    <div class="atlas-card-desc">The party — backgrounds, bonds, and secrets</div>
  </a>

  <a href="{{ '/atlas/locations' | relative_url }}" class="atlas-card">
    <div class="atlas-card-title">Locations</div>
    <div class="atlas-card-desc">Places explored, mapped, and remembered</div>
  </a>

  <a href="{{ '/atlas/factions' | relative_url }}" class="atlas-card">
    <div class="atlas-card-title">Factions</div>
    <div class="atlas-card-desc">Powers, allegiances, and agendas at play</div>
  </a>

  <a href="{{ '/atlas/rules' | relative_url }}" class="atlas-card">
    <div class="atlas-card-title">Rules</div>
    <div class="atlas-card-desc">House rules and campaign-specific rulings</div>
  </a>

</div>

<style>
.atlas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1px;
  margin-top: 2rem;
  border: 1px solid rgba(168, 132, 30, 0.3);
}

.atlas-card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1.25rem;
  border: 1px solid rgba(168, 132, 30, 0.3);
  text-decoration: none !important;
  color: inherit;
  transition: background 0.2s;
}

.atlas-card:hover {
  background: rgba(90, 11, 18, 0.06);
  color: inherit;
}

.atlas-card-title {
  font-size: 1rem;
  font-weight: bold;
  color: #5A0B12;
  margin-bottom: 0.35rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  font-size: 0.85rem;
}

.atlas-card-desc {
  font-size: 0.85rem;
  color: #555;
  line-height: 1.5;
}
</style>
