import React, {useState, useEffect} from 'react';
import Card from './../hooks/Card'

const data = [
  {
    id: 1,
    title: "Token 1",
    to: "/tokens/token1",
    description: "Project in line to be loaded into the Rocketpad",
    swapRate: "1 USDT = 2010.405 METAV",
    cap: "10000",
    access: "Private",
    participants: "351",
  },
  {
    id: 2,
    title:"Token 2",
    to: "/tokens/token2",
    description: "Project in line to be loaded into the Rocketpad",
    swapRate: "1 USDT = 1010.101 CLH",
    cap: "40000",
    access: "Public",
    participants: "351",
  },
  {
    id: 3,
    title: "Token 3",
    to: "/tokens/token3",
    description: "Project in line to be loaded into the Rocketpad",
    swapRate: "1 USDT = 980.201 TKM",
    cap: "30000",
    access: "Private",
    participants: "241",
  },
  {
    id: 4,
    title: "Token 4",
    to: "/tokens/token4",
    description: "Project in line to be loaded into the Rocketpad",
    swapRate: "1 USDT = 1560.589 PQB",
    cap: "20000",
    access: "Public",
    participants: "389",
  }
]

const Article = () => {

  const [card, setCard] = useState(data);
  const [search, setSearch] = useState('');
  const handleChange=e=> {
    setSearch(e.target.value);
    let newData = data.filter(el => el.title.toLowerCase().includes(e.target.value.toLowerCase()))
    setCard(newData);
    // filter(e.target.value);
    console.log("Busqueda: ", e.target.value);
  }

  const filter = (e) => {
    let cardFilter = card.filter(card => {
      if (card.title.toString().toLowerCase().includes(search.toLowerCase())){
        return card;
      }
    });
    
    console.log(cardFilter);
    setCard(cardFilter);
    return cardFilter;
  }

  return(
      <article className='cards'>
        <div className="input-container">
        <input id="search-btn" value={search} onChange={handleChange} type="text" placeholder='Project name' />
        </div>
          
        <div className="cards-container">
          {Card ? card.map((el)=>(
            <Card
              title={el.title}
              to= {el.to}
              description={el.description} 
              swapRate= {el.swapRate}
              cap= {el.cap}
              access= {el.access}
              participants={el.participants}
            />
          )) : <></>}

          {/* <Card 
          title="Token 1"
          to= "/tokens/token1"
          description= "Project in line to be loaded into the Rocketpad"
          swapRate= "1 USDT = 2010.405 METAV"
          cap= "10000"
          access= "Private"
          participants= "351"
          />

          <Card 
          title="Token 2"
          to= "/tokens/token2"
          description= "Project in line to be loaded into the Rocketpad"
          swapRate= "1 USDT = 1010.101 CLH"
          cap= "40000"
          access= "Public"
          participants= "351"
          />
          
          <Card 
          title= "Token 3"
          to= "/tokens/token3"
          description= "Project in line to be loaded into the Rocketpad"
          swapRate= "1 USDT = 980.201 TKM"
          cap= "30000"
          access= "Private"
          participants= "241"
          />
          <Card 
          title= "Token 4"
          to= "/tokens/token4"
          description= "Project in line to be loaded into the Rocketpad"
          swapRate= "1 USDT = 1560.589 PQB"
          cap= "20000"
          access= "Public"
          participants= "389"
          /> */}
        </div>
        <div className="card-pagination">
          <div className="pagination-buttons">

          <button className="previous">Previous</button>
          <button className="page1">1</button>
          <button className="page2" >2</button>
          <button className="page3">3</button>
          <button className="next">Next</button>
        </div>
        </div>

     </article>
    )
};

export default Article;
