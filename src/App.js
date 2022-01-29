import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import ProjectChallenge from './ProjectChallenge';
import Slide from './Slide';

function App() {
  // const API_URL = 'http://localhost:3500/items';
  const [name, setName] = useState('Jone');
  const [count, setCount] = useState(0);
  // const [item, setItems] = useState(JSON.parse(localStorage.getItem('myListItem')) || []);
  const [item, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [listSearch, setListSearch] = useState('');
  const [color, setColor] = useState('');
  const [isBlackText, setIsBlackText] = useState(true);
  const [date, setDate] = useState(new Date());
  const myText = "เพียงเท่านี้";
  // const [dataSlide, setDataSlide] = useState([
  //   {
  //     imgUrl: 'https://picsum.photos/1920/768'
  //   }
  // ]);

  // useEffect(() => {
  //   // localStorage.setItem('myListItem', JSON.stringify(item));
  //   const fetchItems = async () => {
  //     try {
  //       const response = await fetch(API_URL);
  //       const listItems = await response.json();
  //       // console.log(listItems);
  //       setItems(listItems);
  //     } catch (err) {
  //       // console.log(err.stack);
  //     }
  //   }

  //   (async () => {
  //     return await fetchItems();
  //   })();
  // }, [])

  const randomName = () => {
    const arrName = ['Jone','Sam','Mook'];
    const int = Math.floor(Math.random() * 3);
    setName(arrName[int]);
  };

  const countClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  const handleClick1 = (name) => {
    console.log(`Hello ${name}`)
  };

  const handleClick2 = () => {
    console.log('You click me!')
  };

  const handleCheckbox = (id) => {
    // console.log(id);
    // console.log(item);
    const listItems = item.map(ele => (ele.id === id ? { ...ele, checked: !ele.checked} : ele));
    // console.log(listItems);
    setItems(listItems);
  };

  const handleDelect = (id) => {
    const listItems = item.filter((ele) => ele.id !== id);
    setItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  const addItem = (myItem) => {
    const id = item.length ? item[item.length - 1].id + 1 : 1;
    const myNewItem = {id, checked: false, textItem: myItem};
    // console.log(myNewItem);
    const listItems = [...item, myNewItem];
    setItems(listItems);
  }

  // const word = () => {
  //   const myTextSplit = myText.split('');
  //   const newText = '';
  //   for (let i = 0; i < myTextSplit.length; i++) {
  //     m
  //   }
  // }
  // console.log(myText.split(''));

  setInterval(() => {
    setDate(new Date());
  }, 1000);

  return (
    <div className="App">
      <Header />
        <Slide />
        <Content
          name={name}
          count={count}
          item={item.filter(ele => ((ele.textItem).toLowerCase().indexOf(listSearch.toLowerCase()) > -1))}
          newItem={newItem}
          setNewItem={setNewItem}
          randomName={randomName}
          countClick={countClick}
          handleClick1={handleClick1}
          handleClick2={handleClick2}
          handleCheckbox={handleCheckbox}
          handleDelect={handleDelect}
          handleSubmit={handleSubmit}
          listSearch={listSearch}
          setListSearch={setListSearch}
        />
        <ProjectChallenge color={color} setColor={setColor} isBlackText={isBlackText} setIsBlackText={setIsBlackText} />
      <Footer date={date} />
    </div>
  );
}

export default App;
