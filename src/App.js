import {Nav, GridView, CardView} from "./components"

const data  = [
  {
    title: "Image",
    description: "Description",
    image: "https://media.wired.com/photos/5a593a7ff11e325008172bc2/master/pass/pulsar-831502910.jpg"
  },
  {
    title: "Image",
    description: "Description",
    image: "https://media.wired.com/photos/5a593a7ff11e325008172bc2/master/pass/pulsar-831502910.jpg"
  },
  {
    title: "Image",
    description: "Description",
    image: "https://media.wired.com/photos/5a593a7ff11e325008172bc2/master/pass/pulsar-831502910.jpg"
  },
  {
    title: "Image",
    description: "Description",
    image: "https://media.wired.com/photos/5a593a7ff11e325008172bc2/master/pass/pulsar-831502910.jpg"
  },
  {
    title: "Image",
    description: "Description",
    image: "https://media.wired.com/photos/5a593a7ff11e325008172bc2/master/pass/pulsar-831502910.jpg"
  }
]

function App() {
  return (<>
    <div class="App">
      <Nav/>
      <GridView data={data} cardView={CardView}/>
    </div>
  </>);
}

export default App;
