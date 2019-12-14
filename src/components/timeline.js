import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Work History & Education</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Lambda School <span>2020</span></h2>
                        <p>Joined Lambda School to break into software engineering and to also enhance my analytical skills. My hope is that I will be able to join a tech company that’s mission driven, as a software engineer.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Shippa <span>March 2018 - April 2019</span></h2>
                        <ul>
                          <li>Ran Facebook Ads while entrusted with a monthly budget, increasing notice for company’s brand from under 5,000 views to more than 40,000 views</li>
                          <li>Redesigned the company’s website using HTML/CSS, which increased views for the company by 35%</li>
                          <li>Edited and wrote content on travel, commerce, and logistics, which was published on company’s blog</li>
                          <li>Created and hosted events to advertise awareness of the company, including casual happy hours to encourage public awareness</li>
                          <li>Led weekly email marketing campaigns, with consistent open rates beating industry average</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>SLAPP Systems <span>March 2016 - October 2016</span></h2>
                        <ul>
                          <li>Initiated product marketing campaigns which gathers and retains engaged consumers through use of Google Analytics, A/B tests, and social media platforms</li>
                          <li>Created the startup’s initial website using Bootstrap, HTML, CSS, and JavaScript</li>
                          <li>Recruited a founding team of two mobile developers, a UI/UX designer, and a finance analyst</li>
                          <li>Lead inbound marketing efforts using Facebook Ads, SEO research, and copywriting efforts through use of WordPress</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Facebook (Contractor) <span>September 2015 - March 2016</span></h2>
                        <ul>
                          <li>Analyzed Facebook Messenger’s video and audio ad tech to create a new bug identification process</li>
                          <li>Transcribed Messenger’s voice recordings/video ads with a 90%+ daily accuracy rating</li>
                          <li>Lead quality audits on an offshore transcription team, improving common errors (grammar, spelling, and timing)</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>University of San Diego <span>2010 - 2015</span></h2>
                        <p>Completed my undergraduate degree in International Business with a minor in Supply Chain Logistics. Received a rigorous and well rounded academics, in which I had the opportunity to attend interesting classes on the topics of Economics, Finance, Politics, Religion, and Philosophy.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
