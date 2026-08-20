---
title: "Projects"
permalink: /projects/
layout: single
toc: true
---

My research asks what physiological signals can tell us about cognitive state. I develop open-source tools and statistical models to disentangle overlapping cardiac and neural sources and to quantify how autonomic, hormonal, and arousal-related physiology shape cortical activity.

![Conceptual map linking hormones, brain activity patterns, and heart-brain coupling across the menstrual cycle](/assets/images/hormone-connecting-ideas.png)

*Conceptual overview: how hormone fluctuations relate to background brain activity and the brain's response to the heartbeat.*

---

## Physiological Signals & Cognitive State {#hormones-1f-dynamics}

The heart can influence neural activity, but cardiac signals can also contaminate the brain recordings used to measure cognition. This project investigates how sex hormones and autonomic physiology relate to large-scale neural dynamics and cardiac-evoked cortical activity, with the goal of understanding how physiological state tracks with, and potentially indexes, cognitive function.

Using multi-session magnetoencephalography (MEG) paired with endocrine measurements, I model how within-subject hormone and arousal-related fluctuations associate with neural dynamics across Yeo-8 cortical networks.

### Three linked analysis streams

**1. Aperiodic (1/f) neural dynamics**  
Using SpecParam on source-reconstructed ROI power spectra, I model how hormone fluctuations associate with aperiodic exponent and offset across cortical networks. Bayesian hierarchical models reveal sex-dissociated effects on the neural background activity that supports cognitive processing.

**2. Oscillatory spectral parameters**  
Complementary analyses target periodic spectral features (e.g., alpha peak frequency) using the same network-level Bayesian framework, characterizing hormone-linked shifts in oscillatory structure linked to attention and arousal.

**3. Cardiac-evoked potentials (TRF-HEP)**  
Heart-brain coupling is quantified via temporal response function (TRF) kernels: a cardiac regressor predicts MEG sensor activity, and kernel morphology features (peak lag, amplitude, voltage rise, and decay) are related to session-level hormone variability. This provides a direct link between cardiac physiology and cortical responses relevant to cognitive state.

![How estradiol relates to brain background activity and heart-linked brain responses](/assets/images/hormone-analysis-framework.png)

*In short: we asked whether estradiol tracks with two kinds of brain signals (background neural activity and the brain's response to the heartbeat), and whether those two signals tend to change together.*

### Methods highlights

- Multi-session MEG design with within-subject hormone z-scoring at session grain
- Source reconstruction with HCP-MMP1 parcellation mapped to Yeo-8 networks
- Cardiac artifact removal (ICA) before TRF fitting, separating contamination from coupling
- Bayesian hierarchical models (PyMC) with Student-t likelihoods and network-specific population slopes
- Machine learning and reproducible pipelines for large-scale physiological datasets

---

## PyHEARTS: Cardiac Signal Analysis at Scale {#pyhearts}

In collaboration with Eena Kosik (UCSD Cognitive Science PhD student), I co-developed **PyHEARTS**, an open-source Python toolbox for beat-by-beat ECG morphology analysis. The framework has been validated across more than 30,000 individuals and is currently under review at *Nature Computational Science*.

**PyHEARTS** (Python Heart Evaluation and Analysis for Rhythm and Temporal Shape) was built to answer a core question in cognitive neuroscience: when we measure brain activity, how much of what we see reflects true neural dynamics versus cardiac contamination? By providing precise, beat-level cardiac phenotyping, PyHEARTS helps disentangle overlapping physiological sources at scale.

### What it does

1. Detects R- and P-peaks, segments cycles, and fits symmetric Gaussians for P, Q, R, S, and T waves
2. Applies record-level T-wave detection at the end of analysis
3. Exports ~136 morphology, interval, and fit-quality features per cardiac cycle
4. Supports human and mouse species presets

### Key capabilities

- **Beat-to-beat Gaussian modeling**: interpretable cardiac features for linking physiology to cognition
- **Record-level T detection**: global T-wave fiducial with Gaussian morphology fallback
- **R-peak auto-polarity**: handles inverted QRS / lead polarity automatically
- **Reproducible output**: CSV feature tables plus metadata JSON with pipeline version and resolved config
- **Large-scale validation**: validated across 30,000+ individuals; held-out evaluation on LUDB (200 records, 1831 manual beats)

### Getting started

```python
from pyhearts import PyHEARTS

analyzer = PyHEARTS(sampling_rate=500.0, species="human")
features, cycles = analyzer.analyze_ecg(ecg_signal)
```

Requires Python 3.10+. See the repository for installation, example notebooks, and full documentation.

[PyHEARTS on GitHub](https://github.com/PyHEARTS-toolbox/pyhearts){: .btn .btn--primary}

---

## Toward Interpretable Physiology for Cognitive Neuroscience

Together, these projects aim to:

- Clarify what physiological data can tell us about attention, memory, and cognitive state
- Disentangle cardiac influence from neural contamination in brain recordings
- Build scalable, reproducible tools for linking autonomic and endocrine physiology to cortical dynamics

---

*More tools and code on GitHub:*  
[https://github.com/morganfitzgerald](https://github.com/morganfitzgerald){: .btn .btn--primary}
