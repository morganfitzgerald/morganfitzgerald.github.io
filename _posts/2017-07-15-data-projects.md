---
title: "UC San Diego Data Science projects"
redirect_from: "/uc-san-diego-data-science-projects/"
classes: wide
categories:
  - Data Science
tags:
  - July 2017
---

*July 15, 2017 by Bradley Voytek*

<html>
In my <a href="{{ 'data science/teach-data/' | relative_url }}">last post</a> I outlined how and why I taught my Data Science in Practice (Cognitive Science 108) class here at UC San Diego.

The sole purpose of <em>this</em> post is to show off the incredible talent of my students and to showcase the work they put into their Final Projects.

The purpose of the project was to find real-world problems and datasets that can be analyzed with the techniques learned in class. Here are the instructions I gave the students:
<blockquote>It is imperative that by doing so you believe extra information will be gained – that you believe you can discover something new! Your question could be just for fun ( e.g. , “What are commonly misheard song lyrics?”), scientific (<em>e.g.</em>, “How do different cultures perceive different colors?”), or, ideally, aimed at civic or social good  (<em>e.g.</em>, “What parts of San Diego are most in need of dedicated bike lanes?”)</blockquote>
<strong>Edit:</strong> The rationale behind why I chose to have the students put together a Final Project like this was so that they could build a Data Science portfolio to show off their skills. Data Science is multifaceted, and requires programming, statistics, data visualization, communication, information aggregation, and so on. When I was recruiting for Data Science positions back in my industry days, students with a portfolio of projects absolutely jumped out at us.

In addition, for this first offering group had the option of submitting their projects early in order to participate in a special judging panel lead by former (and first) US Chief Data Scientist and friend, DJ Patil (<a href="https://twitter.com/dpatil">twitter</a>, <a href="https://en.wikipedia.org/wiki/DJ_Patil">wikipedia</a>). DJ is a UC San Diego alumnus (Math, 1996) and happened to be in town the weekend before finals week to receive an Honored Alumni Award from the Chancellor. (You can also watch an interview I did with DJ that weekend below.)

While he was in town, he agreed to watch eight of the best groups each give a 5-minute presentation on their final projects.

To be considered for this challenge, the following rules needed to be followed:
<ul>
 	<li>Communicate your results effectively to both experts and laypersons.</li>
 	<li>Use data scientific approaches to address questions specifically concerning civic utility and social good.</li>
</ul>
Based on these simple criteria, the panel selected the top three projects. In addition to DJ, the panel included Brandon Freeman (UC San Diego Alumni Board of Directors and Leidos Engineering Solutions Architect), Arnaud Vedy (Data Analytics, City of San Diego), and Liz Izhikevich (UC San Diego Computer Science undergrad, President and Co-founder of the <a href="https://medium.com/ds3ucsd">UC San Diego Data Science Student Society</a>, and Voyteklab star!)

<figure>
  <img class="wp-image-492 size-large" src="{{'/assets/images/posts/cogs108-panelists-1024x683.jpg' | relative_url }}" alt="" width="1024" height="683" />
  <figcaption>The panel judgeth.</figcaption>
</figure>

You'll note in many of the below notebooks the students make sometimes rudimentary statistical, logical, and/or visualization errors. That's okay! Those are learning experiences... and they learned a <em>lot</em> in the short 10 weeks we have in each quarter.

Without further ado, here are the eight finalists:

<strong>First Place</strong>
<a href="https://github.com/COGS108/FinalProjects-Sp17/blob/master/087-FinalProject.ipynb"><strong>"The Road to DJ Patil is Filled with a Multitude of Potholes"</strong>
</a><em>Lee Anne Mercado, Maggie Chan, Tim Lee, Vinh Doan, Young Jin Yun</em>

The panel unanimously agreed that this project—which took a data-driven approached to understand how San Diego should allocate their pothole workers and resources—was strongest in adhering to the spirit of the competition: they took a problem relevant to civic good and, through diligent and careful data analysis, came to some actionable conclusions.

<figure>
  <img class="wp-image-492 size-large" src="{{'/assets/images/posts/cogs108-winners-1024x683.jpg' | relative_url }}" alt="" width="1024" height="683" />
  <figcaption>The winning group!</figcaption>
</figure>

<strong>Second Place
<a href="https://github.com/COGS108/FinalProjects-Sp17/blob/master/026-FinalProject.ipynb">GPA Distributions
</a></strong><em>Diego Saldonid, Roger Ruan, Shu-Wei (Lucas) Hsu, James Mata</em>

This group's project was well-loved by us all. The primary reason it didn't win first place was because it wasn't <em>quite</em> as closely related to the civic/social good focus of the competition. Nevertheless it is <em>super</em> interesting. In brief, the students scraped class reports from UC San Diego's Course And Professor Evaluations (CAPE) website to look at how average grades differ across different professors teaching the same classes at different quarters. They then look at how grades might differ between an average student who has a "harder grader" path versus an average student who takes the same classes with with an "easier grader". Amazingly they find it can be almost and entire <em>grade point</em> different: 2.49 <em>v</em> 3.42 overall GPA!

<strong>Third Place
<a href="https://github.com/COGS108/FinalProjects-Sp17/blob/master/084-FinalProject.ipynb">Transportation Infrastructure
</a></strong><em>Hudson Cooper, Vlad Bakhurinskiy, Muhammad Islam, Marco Rivera, Wenshuo Li</em>

This group begins by asking: "Can we quantify the quality of life with just a point on the map?" This group really took my advice to heart and pulled in data from several different resources to "try to measure the ‘liveability’ of a neighborhood by looking at different aspects of the availability of methods of transportation rather than just more metrics such as an individual's level of education or income." This was a <em>beautiful</em> project with serious civic infrastructure implications. While they focus on San Diego, their methods are easily replicable across different cities. Do yourself a favor and look at their entire analysis notebook.

<img class="aligncenter wp-image-494" src="{{'/assets/images/posts/cogs108_pg084_f1.jpg' | relative_url }}" alt="" width="994" height="752" />
<blockquote>The upper left quadrant contains all census tracts that are below median income and above median public transportation use. Because we have identified that lower income neighborhoods use more public transportation in general, it makes sense to us that this quadrant would represent the neighborhoods that are most reliant on public transportation infrastructure. Of course improved infrastructure would likely increase public transportation use, bringing some census tracts from below the median public transit usage line into this quadrant, but use the information contained in this plot as a preliminary measure of reliance. This population is actually the best served by public transportation. From our multiple linear regression, even when you hold one fixed and vary the other, low income and high public transportation use each predict high transit score. You can see this plainly from the above plot since most census tracts with 'good' transit score (in blue) lie in this region. However, there are still lots of census tracts in this most reliant population with low transit scores. The census tracts that are in this quadrant and have transit scores of less than 50 (we will refer to these census tracts as 'underserved') account for 20.6% of San Diego's population. 41.2% of this underserved population spends over 30% of their income on rent, a critical indicator of poverty.</blockquote>
I wish I had the time here to expound the virtues of each of the below projects in detail, sadly I do not. But please do not take my lack of detailed comments as an unspoken commentary on the amazingness of their work. Please do take the time to look at each of these, as they are truly remarkable!
<br>
<br>
<strong>Finalists</strong>
<br>
<a href="https://github.com/COGS108/FinalProjects-Sp17/blob/master/009-FinalProject.ipynb"><strong>"Crime 'n' Booze"</strong>
<br>
</a><em>Jenny Hamer, Aparna Rangamani, Jairo Chavez</em>
<br>
<a href="https://github.com/COGS108/FinalProjects-Sp17/blob/master/014-FinalProject.ipynb"><strong>Chicago Traffic Violations</strong>
<br>
</a><em>Arun Sugumar, Zichao Wu, Xiaoxin Xu, Qixin Ding, Lijiu Liang</em>
<br>
<a href="https://github.com/COGS108/FinalProjects-Sp17/blob/master/033-FinalProject.ipynb"><strong>San Diego Infrastructure</strong></a>
<br>
<em>Anaelle Kim, Grant Sheagley, Dylan Christiano, Shawn Le</em>
<br>
<a href="https://github.com/COGS108/FinalProjects-Sp17/blob/master/052-FinalProject.ipynb"><strong>Flu Demographics</strong>
<br>
</a><em>Vincent Tierra, Adrian Herrmann, Lynley Yamaguchi</em>
<br>
<a href="https://github.com/COGS108/FinalProjects-Sp17/blob/master/057-FinalProject.ipynb"><strong>San Diego Gentrification</strong>
<br>
</a><em>Megan Chang, Abena Bonsu, Raymond Arevalo, Lauren Liao</em>

&nbsp;
<br>
<br>
<strong>Noteworthy Other Projects</strong>
<br>
<a href="https://github.com/COGS108/FinalProjects-Sp17/blob/master/023-FinalProject.ipynb"><strong>Recurrent Neural Networks for Protein Secondary Structure Prediction</strong>
<br>
</a><em>David Wang, Michelle Franc Ragsac, Jimmy Quach, Dhaivath Raghupathy, Shih-Cheng Huang</em>
<br>
<a href="https://github.com/COGS108/FinalProjects-Sp17/blob/master/037-FinalProject.ipynb"><strong>Exercise vs. Food Environment: Obesity Classification</strong>
<br>
</a><em>Bryant Lin, Swarnakshi Kapil, Hendrik Hannes Holste</em>
<br>
<a href="https://github.com/COGS108/FinalProjects-Sp17/blob/master/045-FinalProject.ipynb"><strong>A Valuation of Public Parks</strong>
</a><em>Chad Atalla, Alicia Chen, Nadah Feteih, Alan Chen, Joshua Van Gogh, Anjali Verma</em>
<br>
<a href="https://github.com/COGS108/FinalProjects-Sp17/blob/master/068-FinalProject.ipynb"><strong>Crime and Public Recreation Areas</strong>
<br>
</a><em>Tyler Ly, Reginald Wu, Karen Ma, Ho Tsun Matthew Ho, Erika Morozumi</em>
<br>
<a href="https://github.com/COGS108/FinalProjects-Sp17/blob/master/069-FinalProject.ipynb"><strong>Causes of Car Accidents</strong>
<br>
</a><em>Andy Thai, Johnson Pang, Ronald Baldonado, Haoyuan Wang</em>
<br>
<a href="https://github.com/COGS108/FinalProjects-Sp17/blob/master/081-FinalProject.ipynb"><strong>Are Universities Worth the Opportunity Cost?</strong>
<br>
</a><em>Sharmaine Manalo, Madeline Hsia, Nathanyel Calero, Tianyu Zhang</em>
<br>
<a href="https://github.com/COGS108/FinalProjects-Sp17/blob/master/092-FinalProject.ipynb"><strong>Using Python to Analyze Billboard Top 100 Pop Songs</strong>
<br>
</a><em>Christopher Lo, Ryan Yang, Ken Truong, Kevin Tan, Vivian Mach</em>
<br>
<a href="https://github.com/COGS108/FinalProjects-Sp17/blob/master/034-FinalProject.ipynb"><strong>Media Violence</strong>
<br>
</a><em>Hazel Baker-harvey, Ting Lin, Pratyusha Meka</em>
<br>
<a href="https://github.com/COGS108/FinalProjects-Sp17/blob/master/029-FinalProject.ipynb"><strong>Optimization of Police Car Placement in San Diego</strong>
<br>
</a><em>Emma Roth, Eric Mauritzen, Keven Nguyen, Taralyn Mcnabb</em>
<br>
<a href="https://github.com/COGS108/FinalProjects-Sp17/blob/master/018-FinalProject.ipynb"><strong>Exploring Desalination Plant Numbers</strong>
<br>
</a><em>Christina Cook, Dominic Suares, Youxi Li, Linzhi Xie, Erik Mei</em>
<br>
<a href="https://github.com/COGS108/FinalProjects-Sp17/blob/master/006-FinalProject.ipynb"><strong>Chicago Crime</strong>
<br>
</a><em>Kevin Li, Prithvi Narasimhan, Rajiv Pasricha, Andy Zhang, Matthew Ho</em>
<br>
<br>
Patil says smart words whilst seated next to me:
<br>
<iframe width="560" height="315" src="https://www.youtube.com/embed/pJ0xxucQfts" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</html>
