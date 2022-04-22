import './App.css';
// https://schema.org/version/latest/schemaorg-current-https.jsonld
import data from './schemaorg-current-https.json';
const { '@graph': graph } = data;

console.dir(graph);

function App() {
  return (
    <div className="App">
      <pre>
        {graph
          .filter((item) => {
            // https://schema.org/Recipe
            const {
              'schema:domainIncludes': {
                '@id': domainIncludes,
              } = {},
            } = item;
            return domainIncludes === 'schema:Recipe';
          })
          .map((item) => `${JSON.stringify(item, null, 2)}\n\n`)}
      </pre>
    </div>
  );
}

export default App;
