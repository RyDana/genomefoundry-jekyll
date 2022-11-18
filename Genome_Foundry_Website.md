# Genome Foundry Website 

## Stack
1. Jekyll for SSG
2. [Bootstrap 5.2](https://getbootstrap.com/docs/5.2/getting-started/introduction/) for appearance
    1. ([autoprefixer-rails](https://github.com/ai/autoprefixer-rails) gem for Bootstrap Sass compiling)
    2. Bootstrap’s [icon library](https://icons.getbootstrap.com/)
3. Optionally, [jekyll-assets](https://github.com/envygeeks/jekyll-assets) for asset management
## _config.yml
1. Preferably, all pages, except for index, should be put in `my_collections` folder
    1. New webpages (such as a separate about page) can be put into a `_pages` folder inside `my_collections`
    2. Each collection can be sorted as desired in `_config.yml`
    3. There is already an `_opportunities` and `_team` folder that can be used as necessary
2. Configuring the default front matter values for each collection can also be done in the `_config` file


## index.html
1. Uses the default layout 
    1. that has the navigation bar up top 
        1. it’s formating is editable in `_includes > nav.html`
        2. it’s content is editable in `_data > navigation.yml` 
        3. (it can also support submenus)
    2. and a footer on the bottom
        1. formatting editable in `_includes > footer.html`
        2. content editable in `_data > contact.yml`


2. each section is an `include` that can be found in `_includes > sections` folder
     {% include sections/about.html %}


3. All sections that can be accessed through the website’s navigation menu are placed in a default section wrapper (also an include found in `_includes > sections_wrappers`). This specific section wrapper makes use of Bootstrap’s Scrollspy tool and links the desired navigation menu item to its respective section. It also adds vertical and horizontal spacing.
        {% capture include_content %}
            {% include sections/services.html %}
        {% endcapture %}
        {% include section_wrappers/default.html content = include_content scrollspy = site.data.navigation.services.link%}
    1. first, surround the section in a `capture` tag and assign it a name (here it’s include_content)
    2. then, access the section wrapper include (`section_wrappers/default.html`) and pass it the captured section as a parameter (`content = include_content`)
    3. Finally, pass the `link` variable of desired navigation menu item that should lead to this section (`scrollspy = site.data.navigation.services.link`). Make sure that this item does indeed exist in the `_data > navigation.yml` file, and make sure that the `link` variable is formatted as an ID selector (e.g. `#someId`)


4. If you want a section or a group of sections to have a blue background, instead of the default white one, surround the section (or the section wrapper) with a `div` element having `gradient-bg` as a class


## Sections
1. Structure: Most sections are structured into rows, which are structured into columns
    <div class="row py-5 justify-content-between">
        <div class="col-lg-9">
            ...
        </div>
    </div>
    <div class="row py-5 gx-5 justify-content-between">
        <div class="col-lg-6">
          ...
        </div>
        <div class="col-lg-6">
          ...
        </div>
    </div>
2. Heading: Most sections contain specially formatted text, using an include
    {% include typography/big_section_heading.html
        flag = "Services"
        heading="Build more. Test more."
        subheading="Our end-to-end solutions unlock the next scale of engineering biology. When time, cost, scalability, and result quality are of utmost importance."
        light=false
    %}
    1. `flag` parameter (optional) indicates the section’s name (as an `h2` element)
    2. `heading` parameter (required) is big bold text signaling the main message of this section
    3. `subheading` parameter (required) is a smaller paragraph giving more detail.
    4. `light` parameter is a (optional) boolean that, when true, will make the text white (if a blue background color is used, for example). The default color is dark grey.
    5. N.B. `heading`  or `subheading` strings are sensitive to line breaks
    6. N.B2, if the `heading`  or `subheading` are not simple strings (e.g. they need to contain hyperlinks), you would need to first `capture`  it, and then pass that capture as a parameter to the `include`
    {% capture subheading_content %}
        All Genome Foundry users and laboratories belonging to the Concordia University Centre for Applied Synthetic Biology receive significant discounts on gene synthesis, provided by <a href="https://www.ranomics.com/" target="_blank">Ranomics</a>.
    {% endcapture %}
    {% include typography/big_section_heading.html
        heading="High Quality Synthetic DNA from a Canadian Supplier"
        subheading = subheading_content
    %}
3. Flag: the `flag` include can be used on its own if no bold text is desired
    {% include typography/flag.html name="Opportunities" light=false %}
    1.  `name` parameter indicates the section’s name (as an `h2` element)
4. Data: If a section contains iterable bits of info (e.g. team members, services, etc.), that info can be found in the `_data` folder in the form of a `.yml` file. 
5. Cards: pre-determined layout of information that takes the shape of a card


## Sass
1. Sass variables used by bootstrap can be overriden in the `assets > css > main.scss` file
2. Any additional custom scss (or css) should be written in the `_sass > custom.scss` file
3. Custom css classes include:
    1. `.bg-gradient-primary` for making blue gradient backgrounds
    2. `.text-gradient-primary` for making blue gradient text
    3. `.text-gradient-animated` for making blue gradient text that moves
    4. `.text-gradient-animated-light` for making light blue gradient text that moves (for dark backgrounds)
    5. `.rounded-bottom-end` for rounding the bottom right corner of a card

