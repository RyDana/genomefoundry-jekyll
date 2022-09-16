---
published: false #this should only be true for pages ready to be published
title: #required 
subtitle: #required, assign "" if want to leave empty
description: #optional. if is empty, will be filled by the first words of the content
#the remaining front matter has defaults set in the  _config.yml
#leave empty to use default, assign "" to make empty, or write desired value to change default
application_link: 
classification: 
salary: 
hours: 
duration: 
startDate: 
supervisor: 
location: 
unit: 

---
<!-- titles should be h5 -->
##### title

Parahraph...


##### list

<!-- to format lists approprietely, use the flush_list_from_md.html include thusly -->
{% capture list %}
- item 1
- item 2
- item 3
{% endcapture %}
{% include typography/flush_list_from_md.html content = list %}





