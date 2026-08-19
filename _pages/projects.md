---
title: "Projects"
permalink: /projects/
layout: single
toc: true
---

My research bridges computational neuroscience, cardiovascular physiology, and endocrine biology. I develop open-source tools and statistical models to extract interpretable metrics from physiological signals — with a focus on heart-brain interactions and how sex hormones shape neural dynamics.

![Analysis framework: hormones, MEG spectral features, and heart-brain coupling](/assets/images/hormone-1f-framework.svg)

---

## Hormones, 1/f Dynamics & Heart–Brain Coupling {#hormones-1f-dynamics}

This project investigates how sex hormones relate to large-scale neural dynamics and cardiac-evoked cortical activity, using multi-session magnetoencephalography (MEG) paired with endocrine measurements in female and male adults.

### Three linked analysis streams

**1. Aperiodic (1/f) neural dynamics**  
Using SpecParam on source-reconstructed ROI power spectra, I model how within-subject hormone fluctuations associate with aperiodic exponent and offset across Yeo-8 cortical networks. Bayesian hierarchical models reveal sex-dissociated effects — for example, estradiol and progesterone associate with aperiodic flattening in females but show distinct or absent patterns in males.

**2. Oscillatory spectral parameters**  
Complementary analyses target periodic spectral features (e.g., alpha peak frequency) using the same network-level Bayesian framework, characterizing hormone-linked shifts in oscillatory structure across cortex.

**3. Cardiac-evoked potentials (TRF-HEP)**  
Heart-brain coupling is quantified via temporal response function (TRF) kernels: a cardiac regressor predicts MEG sensor activity, and kernel morphology features — peak lag, amplitude, voltage rise, and decay — are related to session-level hormone variability. Primary models use hierarchical random intercepts and slopes across Global and Yeo-8 networks, with a frozen 24-fit grid (2 sexes × 3 hormones × 4 features).

### Methods highlights

- Multi-session MEG design with within-subject hormone z-scoring at session grain
- Source reconstruction with HCP-MMP1 parcellation mapped to Yeo-8 networks
- Cardiac artifact removal (ICA) before TRF fitting
- Bayesian hierarchical models (PyMC) with Student-t likelihoods and network-specific population slopes
- Sex-dissociation analyses comparing female and male hormone–neural associations

---

## PyHEARTS: Beat-by-Beat ECG Analysis Toolbox {#pyhearts}

In collaboration with Eena Kosik (UCSD Cognitive Science PhD student), I developed **PyHEARTS** — a Python toolbox for beat-by-beat ECG morphology analysis. Version 1.0 was released in July 2026.

**PyHEARTS** (Python Heart Evaluation and Analysis for Rhythm and Temporal Shape) takes a single-lead ECG, detects cardiac cycles, fits physiologically constrained Gaussian waveforms, and returns a structured feature table for each beat.

### What it does

1. Detects R- and P-peaks, segments cycles, and fits symmetric Gaussians for P, Q, R, S, and T waves
2. Applies record-level T-wave detection at the end of analysis
3. Exports ~136 morphology, interval, and fit-quality features per cardiac cycle
4. Supports human and mouse species presets

### Key capabilities

- **Beat-to-beat Gaussian modeling** — fit, simulate, and manipulate individual waveform components
- **Record-level T detection** — global T-wave fiducial with Gaussian morphology fallback
- **R-peak auto-polarity** — handles inverted QRS / lead polarity automatically
- **Reproducible output** — CSV feature tables plus metadata JSON with pipeline version and resolved config
- **Validation** — held-out evaluation on LUDB (200 records, 1831 manual beats); development benchmarks on QTDB and SPH

### Recent updates (2026)

- Fitbounds clip fix for Gaussian `curve_fit` stability
- Record-T merge fusion improving T-wave sensitivity on LUDB
- Frozen held-out validation protocol under `validation/`
- Mouse morphology T-search improvements
- HRV metrics now computed from pre-morphology R-peak intervals

### Getting started

```python
from pyhearts import PyHEARTS

analyzer = PyHEARTS(sampling_rate=500.0, species="human")
features, cycles = analyzer.analyze_ecg(ecg_signal)
```

Requires Python 3.10+. See the repository for installation, example notebooks, and full documentation.

[PyHEARTS on GitHub](https://github.com/PyHEARTS-toolbox/pyhearts){: .btn .btn--primary}

---

## Toward Precision Biomarkers for Health & Aging

Together, these projects aim to:

- Advance understanding of heart-brain coupling and its hormonal modulation
- Improve modeling of ECG waveforms for interpretable cardiovascular phenotyping
- Enable more accurate physiological biomarkers for research and health monitoring

---

*More tools and code on GitHub:*  
[https://github.com/morganfitzgerald](https://github.com/morganfitzgerald){: .btn .btn--primary}
