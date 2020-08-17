## Preloading v0.js on Origins

This experiment synthetically tests if using a meta preload tag assists LCP (Largest Contentful Paint) for a specific Wordpress Blog output using AMP.

If you'd like to try locally, here are the steps:
1. Clone this repo
2. `yarn install` to install `tachometer` and `chromedriver`.
3. `yarn bench` to run the experiment locally using Headless Chrome.

The results look pretty clear, the meta preload tag hurts LCP for this sample.

![No Preload is the fastest result by a few percentage points](example.jpg)

**Please Note** This is only intended to help inform, not prescribe an approach.