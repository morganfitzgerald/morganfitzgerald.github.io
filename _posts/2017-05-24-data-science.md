---
title: "Data Science at UC San Diego"
redirect_from: "/data-science-at-uc-san-diego/"
classes: wide
categories:
  - Data Science
tags:
  - July 2017
---

*May 24, 2017 by Bradley Voytek*

<html>
What is Data Science?
<br><br>
I've been somewhat obsessed with this question for years now. In this post I outline my views, as well as the semi-consensus view being adopted here at UC San Diego.
<br><br>
As someone who's held the job title of Data Scientist, who teaches Data Science classes, and who is a Founding Faculty member of the Data Science Major and the new Data Science Institute, I take very seriously the idea that Data Science can and should be an independent, novel field of scientific inquiry. And that it will be a massively <em>important</em> one at that. My musings on this recently came to a head with the release of a <a href="{{'/assets/pdfs/posts/UCSD-DataScience_in_the_SocialSciences2017.pdf' | relative_url }}">White Paper I helped write for the UC San Diego Division of Social Sciences</a> (detailed below).
<br><br>
Most critically, I am <em>strongly</em> of the opinion that Data Science <em>does not just equal</em> Machine Learning. This is an opinion I expound on below, but is nicely summarized by friend Josh Wills, Data Engineer at Slack:
<br><br>
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Rule #1 of Hiring Data Scientists: Anyone who wants to do machine learning isn&#39;t qualified to do machine learning.</p>&mdash; Josh Wills (@josh_wills) <a href="https://twitter.com/josh_wills/status/832827274437197824?ref_src=twsrc%5Etfw">February 18, 2017</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<br>
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Rule #2 of Hiring Data Scientists: You can get a data scientist to do anything if they believe that what they are doing is machine learning.</p>&mdash; Josh Wills (@josh_wills) <a href="https://twitter.com/josh_wills/status/832835672104804354?ref_src=twsrc%5Etfw">February 18, 2017</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<br>
There's a confluence of a <em>lot</em> of Data Science things happening at UCSD right now that make this document timely:
<ul>
 	<li>UC San Diego <a href="http://www.sandiegouniontribune.com/news/science/sd-me-ucsd-fundraising-20170320-story.html">recently received $75M</a> from early Facebook employee and UCSD alumnus Taner Halicioglu to start a new Data Science Institute here.</li>
 	<li>Fall 2017 will be the first year that <a href="http://www.ucsd.edu/catalog/curric/DS.html">the new Data Science majo</a>r will be offered here at UCSD—a joint major between my home department of Cognitive Science with the departments of Computer Science and Math.</li>
 	<li>On June 8 I'm hosting a two hour fireside chat with <a href="https://en.wikipedia.org/wiki/DJ_Patil">DJ Patil</a>, former Chief Data Officer of the United States under Obama, former LinkedIn Data Scientist, co-coiner of the phrase "Data Scientist", and UCSD alumnus.</li>
</ul>
When I first arrived at UCSD in 2014, there was not a lot happening here in Data Science. So I decided to teach a class —(COGS 9) Introduction to Data Science; I had about 24 students. It was the first-ever class I taught as a professor and the students of that class went on to found the <a href="https://www.facebook.com/groups/653974278012361/">UCSD Data Science Student Society (DS3)</a>.
<br><br>
I've since taught that class three more times, and most recently it had 280 students. This quarter I'm teaching an entirely new upper-division version of that class—(COGS 108) Data Science in Practice—to about 420 students. (The syllabus for Introduction to Data Science is <a href="{{'/assets/pdfs/posts/COGS108_syllabus.pdf' | relative_url }}">here</a>; Data Science in Practice is <a href="{{'/assets/pdfs/posts/COGS108_syllabus.pdf' | relative_url }}">here</a> along with the public podcasts <a href="https://podcast.ucsd.edu/podcasts/default.aspx?PodcastId=4122">here</a> as well as some <a href="https://github.com/COGS108/">tutorials on GitHub</a>.)
<br><br>
The demand for the theory and skills of Data Science is skyrocketing, which I joke about in my lectures:
<br><br>
<img class="aligncenter size-large wp-image-474" src="{{'/assets/images/posts/UCSD_DataScience_Explosion-1024x479.jpg' | relative_url }}" alt="UCSD DataScience Explosion" width="1024" height="479" />
<br><br>
But joking aside, there are <a href="https://blogs.wsj.com/cio/2015/12/31/current-data-scientist-craze-cant-last-and-thats-a-good-thing/">serious concerns that Data Science is a fad</a>. This is Very Bad News when one is trying to establish a new major, Institute, and potentially even field!
<br><br>
Personally I'm of the opinion that Data Science is simply plummeting toward the <a href="https://en.wikipedia.org/wiki/Hype_cycle">hype cycle</a> Trough of Disillusionment:
<br><br>
<img class="aligncenter size-full wp-image-475" src="{{'/assets/images/posts/Gartner_Hype_Cycle.jpg' | relative_url }}" alt="Gartner Hype Cycle" width="750" height="499" />
<br><br>
I consider this to be a <em>good thing</em>, as it's a time for moving past the hype and doing the boring academic work of carving a niche and laying the foundations for a new field. (See also, <a href="http://courses.csail.mit.edu/18.337/2015/docs/50YearsDataScience.pdf"><em>50 years of Data Science</em></a> by David Donoho.)
<br><br>
When I first began conceiving of Data Science as an independent field of scientific inquiry, I saw that New York University’s Initiative in Data Science website has a “What is Data Science?” page, <a href="http://datascience.nyu.edu/what-is-data-science/">on which it is stated</a> that:
<blockquote>There is much debate among scholars and practitioners about what data science is, and what it isn’t. Does it deal only with big data? What constitutes big data? Is data science really that new? How is it different from statistics and analytics?</blockquote>
<br>
I believe that this ambiguity about the scope, aims, and distinctive characteristics of a Data Science discipline has (correctly!) given rise to skepticism.
<br><br>
But honestly, this skepticism strikes me as reminiscent of criticisms of Computer Science as a distinct discipline back in the 1950s, with <a href="https://en.wikipedia.org/wiki/Computer_science">some decrying it</a> as “impossible that computers themselves could actually be a scientific field of study”.
<br><br>
I believe that the skepticism of Data Science is similarly misplaced, albeit understandable given the lack of clarity as to what Data Science is, what it can be, and what scientific and social problems are unique to the modern proliferation of massive amounts of contextual and personal data.
<br><br>
To address the general lack of clarity, we wrote a <a href="{{'/assets/pdfs/posts/UCSD-DataScience_in_the_SocialSciences2017.pdf' | relative_url }}">White Paper</a> laying out what we believe are the core establishing questions that define Data Science, and lay the groundwork for what it can and should be. I recommend you read the whole thing (I'm proud of it!) but will highlight pieces here.
<br><br>
<strong>Foundational Questions in Data Science</strong>
<ul>
 	<li><em>Why are some problems more amenable to purely data-driven approaches using generic learning algorithms than to domain-specific structure, or vice versa?</em></li>
 	<li><em>What factors determine data quality with respect to a particular question?</em></li>
 	<li><em>Can we ascertain </em>a priori<em> whether a particular question can be answered via a particular data source?</em></li>
 	<li><em>Can we estimate the data requirements for adequate algorithmic performance in a given domain?</em></li>
 	<li><em>When can training on synthetic data substitute for training on real-world data?</em></li>
 	<li><em>How do we combine unstructured, data-driven machine learning algorithms with human domain expert knowledge?</em></li>
 	<li><em>More generally, how can we design systems that integrate human intelligence with algorithmic data-science predictions, leveraging humans’ rich understanding of the world to improve predictions, and to help human decision-makers with algorithmic forecasts?</em></li>
</ul>
Those first questions regarding how much data and of what quality are needed to address which kinds of problems strike me as very similar to <a href="https://en.wikipedia.org/wiki/Big_O_notation">Big O</a> algorithm analysis in computer science, with a lot of interesting problems embedded in it.
<br><br>
For a somewhat trite example, why does Google Translate work <em>as well as it does</em> without any hard-coded information about grammar, semantics, linguistics, etc.? (See <a href="http://ieeexplore.ieee.org/document/4804817/"><em>The Unreasonable Effectiveness of Data</em></a> by Halevy, Norvig, and Pereira).
<br><br>
There is a <em>lot</em> of room here for uniquely Data Scientific questions that do not neatly fit into Computer Science, Statistics, or the Social Sciences.
<br><br>
Regarding the latter, there are also many Data Scientific questions highly relevant to the Social Sciences.
<br><br>
<strong>Social Sciences and Data Science</strong>
<ul>
 	<li><em>How does society balance the demand for data and individuals’ rights to privacy?</em></li>
 	<li><em>Is it possible to develop provably anonymous data-gathering strategies?</em></li>
 	<li><em>How can data-intensive organizations avoid perpetuating and reinforcing the inequalities inherent in data as algorithms and automation gain prominence in ever-more important aspects of modern life</em> (e.g., <a href="http://www.bbc.com/news/technology-21322183">1</a>, <a href="https://www.washingtonpost.com/news/the-intersect/wp/2015/07/06/googles-algorithm-shows-prestigious-job-ads-to-men-but-not-to-women-heres-why-that-should-worry-you/?utm_term=.effe796aaf75">2</a>, <a href="https://www.bloomberg.com/features/2016-richard-berk-future-crime/">3</a>)?</li>
 	<li><em>How do we identify and anticipate challenges that some applications of data science might pose to the functioning of our democratic political, economic, and cultural institutions?</em></li>
 	<li><em>How do we develop forms of data-literacy that foster collaboration across disciplines and generate awareness of the social, political and historical embeddedness of data and data infrastructures?</em></li>
 	<li><em>As an educational institution, how do we promote data-literacy at all levels, from undergraduate education, broadly conceived, to even the data collection activities of the university itself?</em></li>
</ul>
<strong>Data Science at UC San Diego</strong>
<br><br>
In our White Paper we outline four paths within the new Data Science Major and Institute:
<blockquote><strong>Data Engineering:</strong> The development of data architectures, algorithms, systems, etc. for capturing, storing and processing an exponentially increasing torrent of data. In industry, holders of jobs with this title are often tasked with establishing the data infrastructure necessary to make analytics and machine learning feasible.</blockquote>
<blockquote><strong>Machine Learning and its Foundations:</strong> The mathematical and algorithmic tools for learning from data and their theoretical foundations, including questions such as which problems are more or less amenable to general purpose data-driven approaches, what are the sample, memory, time complexities of specific problems, inter alia.</blockquote>
<blockquote><strong>Social Science Oriented Analytics:</strong> Although some AI/ML applications can be entirely machine-centered (a control system for a quadrocopter), most of Data Science aims to generate usable insights for humans about human behavior. Here the focus is on understanding how data science tools can be adapted to answer social science questions, how social science processes generate data and what this means for their analysis, how the results of large-scale machine learning can be made useful/understandable to people, how to seamlessly integrate human intelligence with machine learning in expert systems and for crowd-sourcing applications, and how expert knowledge interacts with machine learning approaches.</blockquote>
<blockquote><strong>Data and Society:</strong> Beyond being a tool, Data Science itself should be an object of social science investigation. There is a need to bring cutting-edge research and applications in data science in conversation with democratic legal frameworks as well as forms of social analysis that examine how values get designed into technical systems. How can we develop provably anonymous data gathering and reporting strategies, balance the need for privacy with the demand for data, incorporate fairness and accountability into algorithms, and counter statistical/algorithmic discrimination to prevent data-driven approaches from perpetuating and reinforcing inequities? More broadly, we need to understand the social ethics required for a society where data science applications are pervasive.</blockquote>
Finally, we close with what we believe are critical paths to success:
<br><br>
<strong>UC San Diego Division of Social Sciences Recommendations</strong>
<br><br>
<em><strong>Advancing Data Science as a distinct field of scientific inquiry and engineering, unifying faculty across many departments and divisions.</strong></em>
<br><br>
<strong>Improving data science education at the undergraduate, graduate, and faculty levels.</strong>
<ul>
 	<li>Internships and portfolio building projects during education, including capstone projects. In particular, extramural projects wherein students work with outside companies, agencies, or labs.</li>
 	<li>An interdisciplinary graduate program in Computational Social Science, at both the masters’ and doctoral levels</li>
 	<li>Additionally, UC San Diego Data Science should place a special emphasis on Data Ethics.</li>
</ul>
<strong>Pursuing civic and social good through outreach and community involvement.</strong>
<ul>
 	<li>A civic good oriented summer program similar to the <a href="https://dssg.uchicago.edu/">University of Chicago’s Data Science for Social Good Summer Fellowship program</a>.</li>
 	<li>University and community partnerships creating easy-to-use software tools for search, visualization, and analysis of big data for the lay members of the community.</li>
</ul>
This is an incredibly ambitious, but sincerely exciting effort. UC San Diego is poised to become a true founding leader in Data Science, <a href="http://www.cogsci.ucsd.edu/about-us/ucsd-cog-sci/">just as it was with Cognitive Science in the 1980s</a>.
<br><br>
But this is not a lone effort, and I would very much love to hear feedback from academics, professionals, and anyone else on the future of Data Science both here at UCSD and more broadly.
</html>
