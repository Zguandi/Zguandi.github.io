---
layout: default
title: Research
permalink: /research/
---

<h2>Research Projects</h2>

<div class="research-cards">
  {% for item in site.research %}
    {% include research-card.html item=item %}
  {% endfor %}
</div>

{% if site.research.size == 0 %}
<p style="color: #666; text-align: center; padding: 2rem;">
  Research projects coming soon.
</p>
{% endif %}
