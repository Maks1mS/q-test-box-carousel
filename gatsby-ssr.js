const React = require("react");
const QAPI = require("./qapi").default;
const { RawHtml } = require("@quarkly/components");
 const insideHeadRawHtmls = [<link
href="https://cdn.jsdelivr.net/npm/swiper@8.4.7/swiper-bundle.min.css"
rel="stylesheet"
/>];
const beforeBodyRawHtmls = [];
 export const onRenderBody = (
    {
        setHeadComponents,
        setPostBodyComponents,
    }
) => {
  const components = RawHtml.getComponents();
  setHeadComponents([
    <style>{`
        body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
        }
    `}</style>,
    ...components.headItems,
    ...insideHeadRawHtmls,
    
  ]);
   setPostBodyComponents([
    <script
        key="QAPI"
        dangerouslySetInnerHTML={{
            __html: `window.QAPI = ${JSON.stringify(QAPI || {})}`
        }}
    />,
    ...components.bodyItems,
    ...beforeBodyRawHtmls,
  ]);
}
