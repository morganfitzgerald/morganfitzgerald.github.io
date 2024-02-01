---
title: "Teaching Neural Data Science"
classes: wide
categories:
  - Data Science
tags:
  - April 2021
---

*April 6, 2021 by Bradley Voytek*

A few weeks ago marked the end of my first run of our new Neural Data Science course here at UC San Diego. This course was an experiment to see how far our undergraduate students could push at the boundaries of neuroscience, armed with a ton of publicly available data and new ways of thinking about how we can approach research.

In short: they absolutely exceeded my expectations&mdash;especially during the pandemic&mdash;and I'm pretty sure _at least_ one peer-reviewed paper will come out of the research they did.

While I'm wildly excited to talk about those projects, I'm getting ahead of myself. I'll post about the students' projects over the next week, but first I want to begin with what I think **Neural Data Science** _is_?

For years now I've been arguing that Data Science is more than just (Computer Science) + (Statistics). I truly believe Data Science is something different. I've been slowly formalizing my thoughts on the matter, starting with two articles: [_The Virtuous Cycle of a Data Ecosystem_ (_PLOS Computational Biology_, 2016)](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005037) and [_Social Media, Open Science, and Data Science Are Inextricably Linked_ (_Neuron_, 2017)](https://www.sciencedirect.com/science/article/pii/S0896627317310681).

I summarize **Neural Data Science** with this:

<img class="aligncenter size-large" src="{{'/assets/images/posts/NDS_H1.jpg' | relative_url }}" alt="Neural Data Science"/>

We know a _lot_ about the brain. For any given arbitrary brain region, for example, there are thousands of studies describing its architecture: the thickness of the cortex, what its inputs and outputs are, myelination, cellular density, etc. We know about the cell types there and their morphology; as well as how strongly the 20,000 or so different genes are expressed in that region; what the receptor densities are; what neuro-transmitters / -modulators are present; and so on. We also have information about the electrophysiology of the cells in that region, as well as the macroscale field potential properties including aperiodic activity, oscillation frequency and waveform shape, and so on. Finally, we also have decades of human and animal studies hinting at what cognitive functions are associated with that region, how different diseases and disorders affect that region, and how all of these things change with development and aging.

All of this information, however, is spread across tons of different datasets, papers, etc. Really amazing early data science projects, like [Tal Yarkoni's](https://talyarkoni.org/) [NeuroSynth](https://neurosynth.org/), pioneered the mining these datasets to bring them together.

One of the goals of my group is to try and create methods and tools to allow people to **more easily bring all of this information together**. What if, instead of limiting ourselves to analyzing our one limited, biased set of data, we can also bolster our research with the _huge_ amounts of other data that already exist?

This ethos can be seen in our recent paper, led by former PhD student [Richard Gao](https://www.rdgao.com/), [_Neuronal timescales are functionally dynamic and shaped by cortical microarchitecture_ (_eLife_, 2020)](https://elifesciences.org/articles/61277) where we combined theory and simulation with several open datasets, including:

1. Human MRI data
2. Several large dataset of human intracranial electrophysiology
3. Human gene expression
4. Non-human primate single-unit spiking

to show that we can infer population neuronal timescales from field potential / intracranial EEG data, and link the cortical topography of those timescales to brain structure and gene expression.

So when [Ashley Juavinett](https://ashleyjuavinett.com/) and I  started to brainstorm this course, we wanted to know if we could teach this kind of stuff to _undergraduates_. Now, certainly we're not the _only_ ones thinking about neural data science ([Pascal Wallisch](https://pensees.pascallisch.net/) wrote a [great book](https://www.amazon.com/Neural-Data-Science-MATLAB%C2%AE-PythonTM-ebook/dp/B06XCW39WX) about his take!) Ours is simply a different perspective.

What if we could teach the next generation of neuroscientists to think from a "data first" perspective: what data would you need to answer your scientific questions of interest, without limitations on having to collect every piece of data yourself?

Here's how I frame things in the course syllabus:

>Neuroscience is a rapidly changing field that is increasingly moving towards ever larger and more diverse datasets that are analyzed using increasingly sophisticated computational and statistical methods. There is a strong need for neuroscientists who can think deeply about problems that incorporate information from a wide array of domains including psychology and behavior, cognitive science, genomics, pharmacology and chemistry, biophysics, statistics, and AI/ML. With its focus on combining many large, multidimensional, heterogeneous datasets to answer questions and solve problems, data science provides a framework for achieving this goal.

>Determining what data one needs, and how to effectively combine datasets, is a creative process. For example, a neural data scientist might be tasked with combining:
>1) _demographic information_ and 2) _multiple cognitive and behavioral measures_, from people from whom we might collect;
>3) _biometric data_, 4) _motion capture data_ to understand motor control, and 5) _eye-tracking_ to study attention, along with;
>6) _structural connectomic_ and 7) _functional brain imaging_ data collected using methods with different spatial and temporal resolution (such as fMRI and EEG), and then place those results into context relative to;
>8) _average human brain gene expression patterns_ and 9) _the existing knowledge embedded within the peer-reviewed neuroscience literature_ (>3,000,000 papers).

>These types of data are very different: continuous and ordinal, time-series, video and images, directed graphs, spatial, high-dimensional categorical / nominal, and unstructured natural language. What is the appropriate way to aggregate and synthesize these data? What are the benefits and caveats for, say, aggregating spatially versus temporally? Being able to conceptualize how to carry out this integration is necessary before leveraging any technical skills will even be useful.

<img class="aligncenter size-large" src="{{'/assets/images/posts/NDS_H2.jpg' | relative_url }}" alt="Neural Data Science"/>

This focus in Data Science on creativity and integrating **large, multidimensional, heterogeneous datasets** is something [Tom Donoghue](https://tomdonoghue.github.io/), [Shannon Ellis](http://www.shanellis.com/), and I really coalesced around in the [_Data Science in Practice_](https://github.com/COGS108) course we created here at UC San Diego (a course that I've talked about [on here before](https://voyteklab.com/data%20science/teach-data/)). We learned a lot from putting that course together, and wrote about that in our article, [_Teaching Creative and Practical Data Science at Scale_ (_Journal of Statistics and Data Science Education_, 2021))](https://www.tandfonline.com/doi/full/10.1080/10691898.2020.1860725).

After the success of that course&mdash;which has 300-500 students every quarter now&mdash;it seemed like adapting that to neuroscience, specifically, made a lot of sense.

Before the quarter began, my **Course Objectives** were for the students to learn how to:
- think from a “data first” perspective: what data would you need to answer your scientific questions of interest?
- develop hypotheses specific to big data environments in neuroscience.
- work with many different neuroscience data types that might include data on brain structure and connectivity, single-unit spiking, field potential, gene expression, and even text-mining of the peer-reviewed neuroscientific literature.
- read and analyze data stored in standard formats (e.g., Neurodata Without Borders and Brain Imaging Data Structure).
- integrate multiple heterogeneous datasets in scientifically meaningful ways.
- choose statistical model(s) informed by the underlying data.
- design a big data experiment and excavate data from multiple open data sources.
- consider alternative hypotheses and assess for spurious correlations and results.

Certainly I didn't meet all of these objectives. Adapting the course from my original vision to the pandemic-induced, online environment was imperfect, with one student calling the zoom-based project interactions "difficult" and "schizophrenic". I was worried about how it all would "work", but then there were comments like this:

>I cannot speak highly enough about my experiences in this course and how well-prepared I feel for my continuing education at UCSD. This course's material had significantly more personal connection and real-world application than other courses I have completed, and I am sure other students feel the same.

Seeing feedback like this, combined with the quality of the projects themselves, tells me that there's something really cool and exciting here with **Neural Data Science**, and I can't wait to teach it again and share more with you all.

In the meantime, you can look at the course materials on GitHub, [here](https://github.com/NeuralDataScience/Overview), and adapt them as you see fit. If you want to try and teach a version of this course, please let me know! I'd be happy to chat.
