---
title: "Nature Neuroscience paper: “Oscillatory dynamics coordinating human frontal networks in support of goal maintenance"
redirect_from: "/nature-neuroscience-paper-oscillatory-dynamics-coordinating-human-frontal-networks-in-support-of-goal-maintenance/"
classes: wide
categories:
  - oscillations
  - publications
tags:
  - August 2017
---
*August 3, 2015 by Bradley Voytek*

<html>
Phew! One of my post-doc papers is finally out in <em>Nature Neuroscience</em>, "Oscillatory dynamics coordinating human frontal networks in support of goal maintenance" (<a href="http://www.nature.com/neuro/journal/vaop/ncurrent/full/nn.4071.html" >link</a>). (Parenthetical: if this kind of thing interests you, feel free to drop me an email and/or drop by my lab's posters at SfN (<a href="{{'/assets/pdfs/posts/voytek_sfn_2015.pdf' | relative_url }}">PDF</a>)!)
<br><br>
I can't begin to express, within the constraints of my literary ability, how happy I am to see this paper published. It's been a <em>long</em> time in the making. Seriously this paper is older than <em>both</em> of my children. (Although, having two kids is a part of what delayed this paper; I took a lot of time off when they were each born and the concomitant lack of sleep impaired my cognition something fierce.)
<br><br>
The genesis for this paper was borne out of ideas from co-authors <a href="http://www.cog.brown.edu/research/badrelab/" >David Badre</a> and <a href="http://physio.ucsf.edu/WheelerCenter/Center/faculty/andrew-kayser.html" >Andy Kayser</a>, along with my post-doc mentor <a href="https://despolab.berkeley.edu/" >Mark D'Esposito</a>. Those three have published heavily on a <a href="http://www.nature.com/nrn/journal/v10/n9/full/nrn2667.html" >hierarchical organization of the frontal lobe</a>, which, to quote from that paper, states that:
<blockquote>Progressively rostral [anterior; toward the front] frontal lobe regions seem capable of supporting increasingly abstract neural representations and complex action rules. Such a differentiation would be essential in a hierarchical system, where ‘higher’ levels must maintain their state independent of the state of lower level processors or moment-to-moment changes in the environment.</blockquote>
They wanted to test this using invasive electrophysiological recordings in humans (known as "ECoG", from "electrocorticography") to see if they could observe the relative timing of neural activity in different frontal sub-regions. Because of my previous frontal lobe (<a href="http://blog.ketyov.com/2010/10/voytek-pnas-paper-prefrontal-cortex-and.html" >1</a>, <a href="http://blog.ketyov.com/2010/11/voytek-neuron-paper-dynamic.html" >2</a>) and ECoG (<a href="http://blog.ketyov.com/2010/11/voytek-frontiers-in-human-neuroscience.html" >1</a>, <a href="http://blog.ketyov.com/2012/09/neuroimage-paper-method-for-event.html" >2</a>) work, this matched my interests nicely and I came on board to analyze the data.
<br><br>
Initially my goal was to replicate the previous work that had been done in <a href="http://www.mitpressjournals.org/doi/abs/10.1162/jocn.2007.19.12.2082" >fMRI</a> and <a href="http://www.nature.com/neuro/journal/v12/n4/full/nn.2277.html" >lesion</a> experiments by looking at the magnitude of the high gamma response across different frontal lobe sub-regions. We care about this "high gamma" activity (which is electrophysiological activity above around 80 Hz or so) because it's a strong correlate of local neuronal population spiking activity (<a href="http://www.sciencemag.org/content/309/5736/951.long" >1</a>, <a href="http://www.jneurosci.org/content/29/43/13613.full" >2</a>), but it's really best detected not in scalp EEG, but invasively under the skull (see <a href="http://blog.ketyov.com/2010/11/voytek-journal-of-cognitive.html" >my strangest paper ever</a>). Essentially if the population under the ECoG electrode is more active, high gamma is higher.
<br><br>
Ultimately we had ECoG data from four participants, each of whom did a variant of the Badre tasks simplified to accommodate the limitations of the ECoG recording environment (remember, these people had just undergone brain surgery mere days beforehand). The version of the task used here consisted of four trial conditions, parametrically increasing in task abstraction.
<br><br>
Because of the spatial limitations of ECoG--the electrodes are placed solely based on individual patient medical necessity--we were really only able to sub-divide the frontal lobes into two broad territories: pre/primary motor (M1/PMC) and prefrontal (PFC) cortices, as seen here:
<br><br>
<figure>
  <img src="{{'/assets/images/posts/Voytek-NatureNeuro2015-Fig1C.jpg' | relative_url }}" alt="Voytek et al., Nature Neuroscience Figure 1C" width="2100" height="584" />
  <figcaption> Voytek et al., Nature Neuroscience Figure 1C.</figcaption>
</figure>
The electrodes outlined in white showed high gamma task selectivity, meaning that there was a significant, sustained, event-related relationship between high gamma amplitude and task condition, irrespective of the direction of the effect (high gamma increasing <em>or</em> decreasing with task abstraction) or to the timing relative to the stimulus onset. This selection procedure is similar to that used in, say, single-unit non-human primate experiments. It allows us to then ask: okay, for regions that show a task effect, when, relative to trial onset, does that effect occur, how strong is the high gamma response, and are there differences in these across frontal sub-regions?
<br><br>
Here are the average high gamma time courses across each task condition, broken out by frontal sub-region, relative to stimulus onset (where <strong>R1</strong> is simple stimulus/response and <b>D2</b> is much more abstract):
<br><br>
<figure>
  <img src="{{'/assets/images/posts/Voytek-NatureNeuro2015-Fig2AB.jpg' | relative_url }}" alt="Voytek et al., Nature Neuroscience Figure 2A,B" width="2100" height="771" />
  <figcaption>Voytek et al., Nature Neuroscience Figure 2A,B.</figcaption>
</figure>
And here are the results further reduced, looking at average high gamma amplitude at the peak, and the timing of that peak:
<br><br>
<figure>
  <img src="{{'/assets/images/posts/Voytek-NatureNeuro2015-Fig2CD.jpg' | relative_url }}" alt="Voytek et al., Nature Neuroscience Figure 2C,D" width="2100" height="771" />
  <figcaption>Voytek et al., Nature Neuroscience Figure 2C,D.</figcaption>
</figure>
From these, you can see that high gamma activity peaks later in M1/PMC with increasing task abstraction, but decreases in amplitude, whereas in the PFC there's a weak effect of task on high gamma timing with no effect on amplitude. We also found that these activity peak times occur <em>much </em>earlier than response times, which is nice, as this suggests that they are more likely indexing task processing rather than post-monitoring.
<br><br>
(Note I'm glossing over a quite a few control analyses, etc. here and in what follows.)
<br><br>
This is essentially where the analyses were at by the time my first child was born, but the results left me feeling unfulfilled and full of questions:
<ul>
	<li>Why don't we see task-related increases in PFC high gamma?</li>
	<li>Isn't that PFC population doing <em>something</em> during this task?</li>
	<li>Why does PFC activity peak <em>after</em> M1/PMC activity?</li>
</ul>
Of course, it hit me rather quickly that, by definition, each of these PFC electrodes is task responsive, so the obvious interpretation is that averaging across heterogenous electrodes is likely washing out any directional effects. This makes the M1/PMC results that much more compelling! While it's somewhat obvious given that behavioral response times increase parametrically with task abstraction, and thus motor activity peaks later, it's nice to be able to see activity track behavior so nicely:
<br><br>
<figure>
  <img src="{{'/assets/images/posts/Voytek-NatureNeuro2015-FigS2.jpg' | relative_url }}" alt="Voytek et al., Nature Neuroscience Figure S2" width="400" height="307" />
  <figcaption>Voytek et al., Nature Neuroscience Figure S2.</figcaption>
</figure>
The slightly more interesting analysis was to put the four high gamma variables of interest--sub-region timing and amplitude--into a simple linear regression model to see if we could predict trial-by-trial response times. We found that we could account for about 8% of the variance in RT which honestly is pretty nice given our limited coverage and simplistic model.
<br><br>
Even more interesting was that if we regressed out the effect of the task, and just looked at residual response times controlling for task abstraction, we found that delays in PFC time-to-peak drive slower response times <em>independent of task abstraction</em>. Meaning trial-by-trial cortical "processing delays" slow responses.
<br><br>
As an aside here, because of the massive change in my post-parenthood lifestyle, I was spending a <em>lot</em> less time in the lab and a lot more time with my family, so a lot of the final analyses in this paper were run on my laptop, which got dragged around all over the place. For example, on vacation with the grandparents or on a solo road trip as I drove my cats and stuff down to San Diego for my move:
<br><br>
<figure>
  <img src="{{'/assets/images/posts/voytek_nn_wiw1.jpg' | relative_url }}" alt="Voytek et al., Nature Neuroscience, analyzing 1" width="576" height="432" />
  <figcaption>Analyzing 1.</figcaption>
</figure>
<figure>
  <img src="{{'/assets/images/posts/voytek_nn_wiw2.jpg' | relative_url }}" alt="Voytek et al., Nature Neuroscience, analyzing 2" width="576" height="768" />
  <figcaption>Analyzing 2.</figcaption>
</figure>
Eventually as the fog of parenthood began to lift and my cognitive faculties began to improve as I got to sleep through more nights, I began to dig deeper into those lingering questions above. Most importantly:
<br><br>
<strong><em>We know that PFC and M1/PMC are likely increasingly communicating with one another with increasing task abstraction, so how can I get measure that?</em></strong>
<br><br>
This resulted in what is my favorite published figure to date (originally made in crayon on a giant piece of paper, under the design guidance of my wife (and <a href="http://linkinghub.elsevier.com/retrieve/pii/S0165-0270(12)00151-3" >one-time co-author</a>!) <a href="https://www.linkedin.com/in/jvoytek" >Jessica</a>):
<br><br>
<figure>
  <img src="{{'/assets/images/posts/Voytek-NatureNeuro2015-Fig3.jpg' | relative_url }}" alt="Voytek et al., Nature Neuroscience Figure 3" width="2100" height="986" />
  <figcaption>Voytek et al., Nature Neuroscience Figure 3.</figcaption>
</figure>
There's a lot happening here, so to unpack it as simply I can, the logic is this:
<ol>
	<li>Similar to the high gamma analyses, we can look at whether pairwise phase differences between all possible electrode pairs encodes information about the task (<strong>A</strong>).</li>
	<li>If a pair shows significant, sustained phase encoding, we can then see if that pair crosses <em>between</em> M1/PMC and PFC, or stays within either M1/PMC or within PFC.</li>
	<li>We find the exact millisecond when that encoding pair begins to encode task in their phase coupling (<strong>B</strong>).</li>
	<li>We then look at what high gamma activity is doing around that encoding moment, and whether pairwise phase differences predict high gamma amplitude (<strong>C</strong> and <strong>D</strong>).</li>
	<li>We can say, if the pair crosses between M1/PMC and PFC, we can look at whether M1/PMC phase is a better predictor of PFC high gamma, or vice versa.</li>
</ol>
<strong>Steps 4 and 5</strong> in the above are forms of phase/amplitude coupling, which is a particular interest of mine and of my lab (<a href="http://blog.ketyov.com/2010/11/voytek-frontiers-in-human-neuroscience.html">1</a>, <a href="http://blog.ketyov.com/2012/09/neuroimage-paper-method-for-event.html">2</a>), which states that the phase of a low(er) frequency oscillation can bias population spiking probabilities and may act as a mechanism by which a network of brain regions can coordinate information transfer.
<br><br>
What's funny is that <a href="http://blog.ketyov.com/2012/09/neuroimage-paper-method-for-event.html">my 2013 <em>NeuroImage </em>paper</a> actually came about as I struggled with how to address the analytical issues I was running into for <em>this</em> paper.
<br><br>
So the idea here is that, as task abstraction increases, there should be increasing communication between PFC and M1/PFC, but because there's a lot of temporal variability in when this communication occurs, we need a way to account for that. Which is what <strong>Step 3</strong> was designed to address, in the form of looking at oscillatory theta (4-8 Hz) activity.
<br><br>
What we found was that with increasing task abstraction, theta phase to high gamma amplitude coupling <em>around the time of inter-electrode phase encoding</em> increased within the PFC, and well as between M1/PMC and PFC, but not within M1/PMC.
<br><br>
<figure>
  <img src="{{'/assets/images/posts/Voytek-NatureNeuro2015-Fig5AB.jpg' | relative_url }}" alt="Voytek et al., Nature Neuroscience Figure 5AB" width="1803" height="723" />
  <figcaption>Voytek et al., Nature Neuroscience Figure 5AB.</figcaption>
</figure>
<br><br>
But the <em>coolest thing</em> was that for the inter-regional effect where phase encoding occurred between M1/PMC and PFC sites, there was also a <em>directional</em> effect such that PFC theta phase predicted M1/PMC high gamma stronger than M1/PMC phase predicted PFC high gamma. This makes sense from the view that PFC is "processing" the task goals and then "passing" that information to M1/PMC for motor response execution. Remember that all of these phase/amplitude coupling effects are relative specific to each electrode pairs' different encoding times. When we looked at this directional effect, for example, relative to stimulus onset instead, it disappears entirely.
<br><br>
<figure>
  <img src="{{'/assets/images/posts/Voytek-NatureNeuro2015-Fig5C.jpg' | relative_url }}" alt="Voytek et al., Nature Neuroscience Figure 5C" width="400" height="391" />
  <figcaption>Voytek et al., Nature Neuroscience Figure 5C.</figcaption>
</figure>
Another neat thing about these results is that they suggest that not all effects of interest are strictly "neural activity increases with task" as is done in nearly every neuroimaging/fMRI and single-unit study. Rather, we may be missing some of the special features of neural communication by not looking at how activity is modulated relative to heterogeneity in internal encoding/communication timings and potential "carrier" signals, such as oscillations.
<br><br>
Okay, so there are quite a few caveats here. This paper is far from perfect. Most notably, we're talking about effects seen across four people with epilepsy whose brains, by definition, have an electrophysiological pathology. Of course we couldn't get these data otherwise, and we take a great deal of care in not including in the analyses any electrodes that show epileptic activity, but there may be other more widespread electrophysiological changes affecting the results. The counter to that, however, is that these people are cognitively normal otherwise. Also the effect sizes here are pretty small: just a few percent of variance explained, or even less for the directionality analyses. To counter <em>that </em>though, this was truly our first-pass effort with limited data, new analysis methods designed to avoid false positives, and very limited spatial coverage. Also, such effect sizes are far from outside the norm in neurophysiology.
<br><br>
This all means that I have high hopes that as my lab starts digging in more, refining my crude attempts and challenging/improving on these assumptions, the science will quickly improve. And who knows, maybe this really is a tiny clue as to how in the heck our 86 billions or so neurons can possibly do any meaningful communication.
<br><br>
<span class="Z3988" title="ctx_ver=Z39.88-2004&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&rft.jtitle=Nature+neuroscience&rft_id=info%3Apmid%2F26214371&rfr_id=info%3Asid%2Fresearchblogging.org&rft.atitle=Oscillatory+dynamics+coordinating+human+frontal+networks+in+support+of+goal+maintenance.&rft.issn=1097-6256&rft.date=2015&rft.volume=&rft.issue=&rft.spage=&rft.epage=&rft.artnum=&rft.au=Voytek+B&rft.au=Kayser+AS&rft.au=Badre+D&rft.au=Fegen+D&rft.au=Chang+EF&rft.au=Crone+NE&rft.au=Parvizi+J&rft.au=Knight+RT&rft.au=D%27Esposito+M&rfe_dat=bpr3.included=1;bpr3.tags=Neuroscience%2CCognitive+Neuroscience%2C+Computational+Neuroscience">Voytek B, Kayser AS, Badre D, Fegen D, Chang EF, Crone NE, Parvizi J, Knight RT, & D'Esposito M (2015). Oscillatory dynamics coordinating human frontal networks in support of goal maintenance. <span style="font-style: italic;">Nature neuroscience</span> PMID: <a rev="review" href="http://www.ncbi.nlm.nih.gov/pubmed/26214371">26214371</a></span>
</html>
