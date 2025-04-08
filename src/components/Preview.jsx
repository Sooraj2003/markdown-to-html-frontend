const Preview = ({ html }) => {
  console.log(html);
  
  return (
    <div className="w-full  max-w-none">
      <div
  className="w-full"
  dangerouslySetInnerHTML={{ __html: html }}
/>

<style jsx>{`
  h1 { font-size: 2rem; font-weight: bold; }
  h2 { font-size: 1.5rem; font-weight: semi-bold; }
  p { margin-bottom: 1rem; }
`}</style>

    </div>
  );
};

export default Preview;
