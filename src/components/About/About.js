import React from "react";

const About = () => {
  return (
    <div className="bg-slate-200 h-[100vh] pb-10 text-gray-800">
      <section className="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-25">
          <div className="mr-5">
            <h1 className="mb-6 text-2xl font-mono font-bold">
              Basic Questions
            </h1>
            <div>
              <h3 className="mb-2 font-bold font-sans ">
                What is accessibility?
              </h3>
              <p>
                This article starts off the module with a good look at what
                accessibility is — this includes what groups of people we need
                to consider and why, what tools different people use to interact
                with the web, and how we can make accessibility part of our web
                development workflow.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-bold font-sans mt-10 ">
                HTML: A good basis for accessibility?
              </h3>
              <p>
                A great deal of web content can be made accessible just by
                making sure the correct HTML elements are always used for the
                correct purpose.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-bold font-sans mt-10 ">
                CSS and JavaScript accessibility best practices?
              </h3>
              <p>
                CSS and JavaScript, when used properly, also have the potential
                to allow for accessible web experiences, but if misused they can
                significantly harm accessibility. This article outlines some CSS
                and JavaScript best practices that should be considered to
                ensure that even complex content is as accessible as possible.
              </p>
            </div>
          </div>
          <div>
            <h1 className="mb-6 text-2xl font-mono font-bold">
              Advanced Questions
            </h1>
            <div>
              <h3 className="mb-2 font-bold font-sans ">
                WAI-ARIA basics, WAI-ARIA basics, WAI-ARIA basics, WAI-ARIA
                basics?
              </h3>
              <p>
                Following on from the previous article, sometimes making complex
                UI controls that involve unsemantic HTML and dynamic
                JavaScript-updated content can be difficult. WAI-ARIA is a
                technology that can help with such problems by adding in further
                semantics that browsers and assistive technologies can recognize
                and use to let users know what is going on. Here we'll show how
                to use it at a basic level to improve accessibility.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-bold font-sans mt-10 ">
                Accessible multimedia?
              </h3>
              <p>
                Another category of content that can create accessibility
                problems is multimedia — video, audio, and image content need to
                be given proper textual alternatives, so they can be understood
                by assistive technologies and their users. This article shows
                how.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-bold font-sans mt-10">
                Mobile accessibility?
              </h3>
              <p>
                With web access on mobile devices being so popular, and popular
                platforms such as iOS and Android.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
