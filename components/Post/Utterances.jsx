const Utterances = () => {
  return (
    // https://github.com/utterance/utterances/issues/161
    <div>
      <hr className="border-t border-neutral-300 my-8 sm:my-16" />
      <section
        ref={(element) => {
          if (!element) {
            return;
          }

          const scriptElement = document.createElement('script');
          scriptElement.setAttribute('src', 'https://utteranc.es/client.js');
          scriptElement.setAttribute('repo', '100paperkite/100paperkite.github.io');
          scriptElement.setAttribute('issue-term', 'title');
          scriptElement.setAttribute('label', '💬');
          scriptElement.setAttribute('theme', 'github-light');
          scriptElement.setAttribute('crossorigin', 'anonymous');
          scriptElement.setAttribute('async', 'true');
          element.replaceChildren(scriptElement);
        }}
      />
    </div>
  );
};

export default Utterances;
