---
title: "Code & Data"
permalink: /code
toc: true
---

<html>
<h1>Code &amp; Data</h1>
Our lab codebase is almost entirely in <em>Python</em>. Below we break out our software into three domains: <strong>Scientific</strong>,<strong> Paper-specific</strong>, and <strong>Teaching &amp; Educational</strong>.
<br>
<br>
While we host our code primarily on the lab's <a href="https://github.com/voytekresearch" rel="noopener noreferrer">Github repo</a>, several of our projects have expended to full-fledged packages hosted on their own independent project repos (listed below). This is done in the spirit of open source development and not having any one research group "own" a project.
<br>
<br>
We make heavy use of the kindness of those who are willing to share their datasets with the world. Lab PhD alumnus <a href="https://github.com/TomDonoghue">Tom Donoghue</a> has curated a fantastic list of open neural electrophysiology datasets <a href="https://github.com/openlists/ElectrophysiologyData">here</a>.
<br>
<br>
For a friendly introduction to Git, check out our post <a href="{{'git/git-primer/' | relative_url }}">here</a>.
<br>
<br>
We strongly believe in open science, open data, and collaboration over competition. Voytek has published a few Reviews/Perspectives on these topics:
<ul>
 	<li>Voytek B, <em>PLOS Computational Biology</em>, <a href="http://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005037">The Virtuous Cycle of a Data Ecosystem</a></li>
 	<li>Voytek B, <em>Neuron</em>, <a href="http://www.cell.com/neuron/fulltext/S0896-6273(17)31068-1">Social Media, Open Science, and Data Science Are Inextricably Linked</a></li>
</ul>
<h2>Scientific Software</h2>
We've written quite a few open-source Python pacakges for neural data analysis. We've created detailed, step-by-step tutorials for working with those three packages for a day-long invited workshop that we ran at the 2022 Society for Psychophysiological Research conference.

You can work through those materials <a href="https://github.com/voytekresearch/spr2022">here</a>.

<ul>
 	<li>NeuroDSP: neural <strong>d</strong>igital <strong>s</strong>ignal <strong>p</strong>rocessing
<ul>
 	<li><a href="https://joss.theoj.org/papers/5bb4c745b842289dd5b1b8832ddb443d">Citation</a>: Cole S, Donoghue T, Gao R, Voytek B. NeuroDSP: A package for neural digital signal processing. <em>J Open Source Softw</em>, 2019.</li>
 	<li><a href="https://github.com/neurodsp-tools/neurodsp">repo</a></li>
 	<li><a href="https://neurodsp-tools.github.io/neurodsp/">Sphinx documentation</a></li>
</ul>
</li>
 	<li>fooof: <strong>f</strong>itting <strong>o</strong>scillations and <strong>o</strong>ne-<strong>o</strong>ver-<strong>f</strong> (parameterization of neural power spectra)
<ul>
 	<li><a href="https://www.nature.com/articles/s41593-020-00744-x">Citation</a>: Donoghue T*, Haller M*, Peterson E*, Varma P, Sebastian P, Gao R, Noto R, Knight RT, Shestyuk A¶, Voytek B¶. Parameterizing neural power spectra into periodic and aperiodic components. <em>Nature Neuroscience</em>, 2020.</li>
 	<li><a href="https://github.com/fooof-tools/fooof">repo</a></li>
 	<li><a href="https://github.com/fooof-tools/fooof_mat">matlab wrapper</a></li>
 	<li><a href="https://fooof-tools.github.io/fooof/">Sphinx documentation</a></li>
</ul>
</li>
 	<li>bycycle: cycle-<em>by-cycle </em>analysis of neural oscillations
<ul>
 	<li><a href="https://www.physiology.org/doi/abs/10.1152/jn.00273.2019">Citation</a>: Cole &amp; Voytek. Cycle-by-cycle analysis of neural oscillations. <em>J Neurophysiol</em>, 2019.</li>
 	<li><a href="https://github.com/bycycle-tools/bycycle">repo</a></li>
 	<li><a href="https://bycycle-tools.github.io/bycycle/">Sphinx documentation</a></li>
</ul>
</li>
</ul>
<h2>Paper-specific Code</h2>
We also include code and data (where possible and permitted) for our manuscripts. The list of papers for which these are available are below:
<ul>
 	<li>Gao R, van den Brink R, Pfeffer T, Voytek B. Neuronal timescales are functionally dynamic and shaped by cortical microarchitecture (<a href="https://elifesciences.org/articles/61277">paper</a>). <em>eLife</em>, 2020<em>.</em>
<ul style="list-style-type: circle;">
 	<li><a href="https://github.com/rdgao/field-echos"  rel="noopener noreferrer">Code and data</a></li>
</ul>
</li>
</ul>
<ul>
 	<li>Gao R, Peterson EJ, Voytek B. Inferring synaptic excitation/inhibition balance from field potentials (<a href="{{'/assets/pdfs/posts/Gao-NeuroImage2017.pdf' | relative_url }}">PDF</a>). <em>NeuroImage</em>, 2017<em>.</em>
<ul style="list-style-type: circle;">
 	<li><a href="https://github.com/voytekresearch/EISlope"  rel="noopener noreferrer">Code and data</a></li>
</ul>
</li>
</ul>
<ul>
 	<li>Cole SR, van der Meij R, Peterson EJ, de Hemptinne C, Starr PA, Voytek B. Nonsinusoidal beta oscillations reflect cortical pathophysiology in Parkinson's disease (<a href="{{'/assets/pfs/posts/Cole-JNeurosci_inpress.pdf' | relative_url }}">PDF</a>). <em>J Neuros</em><em>ci</em>, 2017<em>.</em></li>
 	<li>
<ul style="list-style-type: circle;">
 	<li><a href="https://github.com/voytekresearch/Cole_2017"  rel="noopener noreferrer">Code and data</a></li>
</ul>
</li>
</ul>
<h2>Teaching &amp; Educational Software</h2>
Lab members also teach a number of data science, programming, and neural analytics classes.
<ul>
 	<li>COGS 9 - Introduction to Data Science: Developed by Voytek
<ul>
 	<li>Citation: forthcoming</li>
 	<li><a href="https://github.com/IntroDataSci">repo</a></li>
</ul>
</li>
</ul>
<ul>
 	<li>COGS 18 - Introduction to Python: Developed by lab PhD student, Tom Donoghue
<ul>
 	<li>Citation: forthcoming</li>
 	<li><a href="https://github.com/COGS18">repo</a></li>
 	<li><a href="https://cogs18.github.io/intro/">Sphinx documentation</a></li>
</ul>
</li>
</ul>
<ul>
 	<li>COGS 108 - Data Science in Practice: Developed by Voytek and lab PhD student, Tom Donoghue
<ul>
 	<li><a href="https://www.tandfonline.com/doi/full/10.1080/10691898.2020.1860725">Citation</a>: Donoghue, Voytek, Ellis. Teaching Creative and Practical Data Science at Scale. J Stats Education, 2020.</li>
 	<li><a href="https://github.com/COGS108">repo</a></li>
 	<li><a href="https://datascienceinpractice.github.io/docs/index.html">Sphinx documentation</a></li>
</ul>
</li>
</ul>
<ul>
 	<li>COGS 138 - Neural Data Science: Developed by Voytek and <a href="https://ashleyjuavinett.com/">Ashley Juavinett</a>
<ul>
 	<li>Citation: forthcoming</li>
  <li><a href="http://github.com/NeuralDataScience/">repo</a></li>
 	<li><a href="https://neuraldatascience.github.io/">Sphinx documentation</a></li>
</ul>
</li>
</ul>

<a><img class="alignright wp-image-166 size-large" src="{{'/assets/images/posts/voytek_whiteboard-1024x737.jpg' | relative_url }}" alt="voytek_whiteboard" width="1024" height="737" /></a>
</html>
