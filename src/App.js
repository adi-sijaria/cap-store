import logo from './logo.svg';
import './App.css';
// import './Categories.style.scss'

// import Categoryitem from './Components/Category-item/Categoryitem';
import Directory from './Components/directory/Directory.component';
const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
      url:"https://i.ibb.co/cvpntL1/hats.png"

    },
    {
      id: 2,
      title: 'Jackets',
      url:"https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      id: 3,
      title: 'Sneakers',
      url:"https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      id: 4,
      title: 'Womens',
      url:"https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      id: 1,
      title: 'Mens',
      url:"https://i.ibb.co/R70vBrQ/men.png"
    },

  ];

  return (
    
  <Directory categories={categories}/>
  );
};

export default App;
