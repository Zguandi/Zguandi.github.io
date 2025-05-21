---
tags:
  - unWISE_sz
  - Observational_cosmology
---

The [[CMB Power Spectrum]] of [[Compton Y]] auto correlation form my calculation contrasted with the ACT paper digitized result.

I did several tests with the DR6 notebook as discussed last time, and here are some problems I find.
1. yy result comparison to digitized plot in ACT paper Fig 15 and Fig. 11.The yy result shows that the default sample provided in the notebook has very similar peak profile at ~ ell=1700. However, the tail of ell>2000 shows disagreement.

2. I applied manual changes to the mask to test if the mask is properly handled in `nmt.NmtField(ymask,[ymap],wcs=ymap.wcs,beam = beam,n_iter=0)`. This is probably fine, but its not a good way to test this.

3. I then changed the downgrade multiplier (from 4 to 2) to see how the cl change at higher map resolution. The result shows difference in the tail, but higher definition map gives a higher tail at ell>2000.In addition, I would like to ask how to correct for pixel window function in car projection maps, since the DR6 example notebook did not apply the pixel window function to cl results either.
4. Y map sample problemIn previous testing, I only used samples in the directory ([https://portal.nersc.gov/project/act/dr6_nilc/ymaps_20230220/deprojections/](https://portal.nersc.gov/project/act/dr6_nilc/ymaps_20230220/deprojections/)) and I have skipped the default map until now.A comparison test shows that the recommended map used in the DR6 notebook (_[https://phy-act1.princeton.edu/public/data/dr6_ilc_v1//ilc_SZ_yy.fits](https://phy-act1.princeton.edu/public/data/dr6_ilc_v1//ilc_SZ_yy.fits)_) is the same map as the default nilc result in the previously used directory ([https://portal.nersc.gov/project/act/dr6_nilc/ymaps_20230220/](https://portal.nersc.gov/project/act/dr6_nilc/ymaps_20230220/)).This could partly explain my previous results' disagreement with the act paper. 

![ACT_paper_compare_downgrade](/assets/pictures/ACT_paper_compare_downgrade.png)
![manually_change_mask](/assets/pictures/manually_change_mask.png)

---
# Comments
Overall I think your pipeline seems to be agreeing decently with the ACT digitized power spectrum.

OK, it's a bit hard to interpret the result of the mask test without errorbars, but if the difference is indeed significant, this could be telling us that the noise on yy is anisotropic--that wouldn't be too surprising if it's related to foregrounds. I'm not sure what else we should take away from this test. The mask-deconvolution correction for smaller fsky seems to be ok because you changed fsky by a lot and the power spectrum is largely the same.

# testing of pixwin

The pixel window function [[Pixel Window Function]] is showing a very marginal effect on overall cl.

![pixwin_contrast_downgrade1](/assets/pictures/pixwin_contrast_downgrade1.png)
![beam_contrast_downgrade1](/assets/pictures/beam_contrast_downgrade1.png)

- Also apply the inpainted masks other than the footprint mask.
- CAR conversion of mask

The composite mask:
**![composite_ACT_mask](/assets/pictures/composite_ACT_mask.png)**