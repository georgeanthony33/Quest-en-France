import React, { useState, useEffect } from 'react'
import axios from 'axios'

const HomesFrance = (props) => {

  const homeImagesLarge = props.images.filter((image, index) => index === 6 || index === 7)
  const homeImagesSmall = props.images.filter((image, index) => index <= 5)

  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    return () => {
      window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
    };
  }, [])

  const [ selectedInventory, setSelectedInventory ] = useState('all')
  const inventoryObject = {
    all: [
      'Fridge freezer or fridge',
      'Microwave',
      '1 pair of scissors',
      'Washing up bowl',
      'Clothes pegs',
      'Coat hangers',
      'Dustpan/brush',
      'Long handled broom',
      'Mop and bucket',
      'Lavatory brush',
      'Fire extinguisher',
      'Waste bin',
      'Clothes aire',
      '6 Knives, forks, spoons, tea spoons',
      '2 Serving spoons',
      '1 Bread knife',
      '1 Kitchen knife',
      '1 Bread knife',
      '1 Bottle opener',
      '1 Fish slice',
      '1 Tin opener',
      '1 Wooden spoon and spatula',
      '1 Potato peeler',
      'Cafetiere',
      '1 Frying pan',
      '6 large tumblers',
      '6 small wine glasses',
      '6 dinner plates',
      '6 side plates',
      '6 small plates',
      '6 beakers',
      '6 dessert/cereal bowls',
      '1 small and large bowl',
      'Water jug',
      '3 saucepans',
      '1 kettle',
      '1 measuring jug',
      '1 glass/plastic mixing bowl',
      '1 colander',
      '1 cheese grater',
      '1 bread board',
      '6 pillows',
      '1 double blanket per person',
      'Mattress protector',
      'Parasol (for home with open veranda)',
      'Patio table',
      '6 patio chairs'
    ],
    general: [
      'Fridge freezer or fridge',
      'Microwave',
      '1 pair of scissors',
      'Washing up bowl',
      'Clothes pegs',
      'Coat hangers',
      'Dustpan/brush',
      'Long handled broom',
      'Mop and bucket',
      'Lavatory brush',
      'Fire extinguisher',
      'Waste bin',
      'Clothes aire'
    ],
    cutlery: [
      '6 Knives, forks, spoons, tea spoons',
      '2 Serving spoons',
      '1 Bread knife',
      '1 Kitchen knife',
      '1 Bread knife',
      '1 Bottle opener',
      '1 Fish slice',
      '1 Tin opener',
      '1 Wooden spoon and spatula',
      '1 Potato peeler',
      'Cafetiere',
      '1 Frying pan'
    ],
    crockery: [
      '6 large tumblers',
      '6 small wine glasses',
      '6 dinner plates',
      '6 side plates',
      '6 small plates',
      '6 beakers',
      '6 dessert/cereal bowls',
      '1 small and large bowl',
      'Water jug'
    ],
    cookingEquipment: [
      '3 saucepans',
      '1 kettle',
      '1 measuring jug',
      '1 glass/plastic mixing bowl',
      '1 colander',
      '1 cheese grater',
      '1 bread board'
    ],
    bedding: [
      '6 pillows',
      '1 double blanket per person',
      'Mattress protector'
    ],
    outside: [
      'Parasol (for home with open veranda)',
      'Patio table',
      '6 patio chairs'
    ]
  }

  if (!homeImagesLarge || !homeImagesSmall) return null

  return (
    <div className="has-navbar-fixed-top">
      <section className="section has-background-white homes-large-image-section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {homeImagesLarge.map(image => (
              <div className="column is-half-desktop is-full-tablet is-full-mobile">         
                <div className="homes-homecard-container">
                  <img src={`https://res.cloudinary.com/drjzlxwhz/image/upload/v1591121129/Home%20Images/${image.image_location}`} className="homes-alice-image"/>
                  <div className={`homes-homecard-text-container columns is-vcentered`}>
                    <div className="column">
                      <p className="has-text-centered has-text-white is-uppercase is-size-6">{image.home_type}</p>
                      <h3 className="has-text-centered has-text-white is-size-4 homes-image-home-type">{image.room}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {homeImagesSmall.map(image => (
              <div className="column is-one-third-desktop is-half-tablet is-full-mobile homes-homecard-outer-container-small">         
                <div className="homes-homecard-container-small">
                  <img src={`https://res.cloudinary.com/drjzlxwhz/image/upload/v1591121129/Home%20Images/${image.image_location}`} className="homes-alice-image"/>
                  <div className={`homes-homecard-text-container columns is-vcentered`}>
                    <div className="column">
                      <p className="has-text-centered has-text-white is-uppercase is-size-6 homes-image-home-type">{image.home_type}</p>
                      <h3 className="has-text-centered has-text-white is-size-4">{image.room}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section has-background-light">
        <div className="container">
          <div className="columns is-mobile is-multiline">

            <div className="column homes-rooms-checklist-column is-half-desktop is-half-tablet is-full-mobile">
        
              <div className="homes-rooms-checklist">
                <span className="icon">
                  <i className="fas fa-check-square"></i>
                </span>
                <h2 className="has-text-weight-bold">Lounge</h2>
              </div>
              <p className="homes-rooms-checklist-info">The modern lounge / dining area has a table and seating for up to 6 people, including seating that will convert into a double bed. The lounge also benefits from electric heating.</p>

              <div className="homes-rooms-checklist">
                <span className="icon">
                  <i className="fas fa-check-square"></i>
                </span>
                <h2 className="has-text-weight-bold">Bedrooms</h2>
              </div>
              <p className="homes-rooms-checklist-info">The 2 bedroom home has a double bedroom and a twin bedroom , both bedrooms have wardrobes. The 3 bedroom mobile home has one double bedroom and 2 twin bedrooms, all with wardrobes.</p>

              <div className="homes-rooms-checklist">
                <span className="icon">
                  <i className="fas fa-check-square"></i>
                </span>
                <h2 className="has-text-weight-bold">Bathroom</h2>
              </div>
              <p className="homes-rooms-checklist-info">There is a standard flush toilet, washbasin and shower. All of the homes have seperate WC’s.</p>

            </div>

            <div className="column homes-rooms-checklist-column is-half-desktop is-half-tablet is-full-mobile">
              
              <div className="homes-rooms-checklist">
                <span className="icon">
                  <i className="fas fa-check-square"></i>
                </span>
                <h2 className="has-text-weight-bold">Kitchen</h2>
              </div>
              <p className="homes-rooms-checklist-info">The mobile home has a fully fitted kitchen with plenty of cupboards. All have a full size cooker with hob, oven and grill together with a Fridge/freezer or large fridge and a microwave.</p>

              <div className="homes-rooms-checklist">
                <span className="icon">
                  <i className="fas fa-check-square"></i>
                </span>
                <h2 className="has-text-weight-bold">Outside Furniture</h2>
              </div>
              <p className="homes-rooms-checklist-info">All mobiles have a patio table and chairs, and parasol for a home with open veranda.</p>

              <div className="homes-rooms-checklist">
                <span className="icon">
                  <i className="fas fa-check-square"></i>
                </span>
                <h2 className="has-text-weight-bold">BBQs</h2>
              </div>
              <p className="homes-rooms-checklist-info">{'Gas barbecues can be hired from our couriers for a 20 euro fee for the duration of your holiday. (A 5 euro refundable deposit will also be charged, but refunded if the grill part is returned in a clean condition).'}</p>

            </div>

          </div>
        </div>
      </section>

      <section className="section has-background-white">
        <div className="container">

          <article className="panel is-danger has-background-light">
            <p className="panel-heading">
              <h3 className="title has-text-weight-bold is-size-3 has-text-white">Inventory</h3>
            </p>
            {windowWidth > 730 &&
            <p className="panel-tabs">
              <a className={selectedInventory === 'all' && 'is-active'} id="all" onClick={e => setSelectedInventory(e.target.id)}>All</a>
              <a className={selectedInventory === 'general' && 'is-active'} id="general" onClick={e => setSelectedInventory(e.target.id)}>General</a>
              <a className={selectedInventory === 'cutlery' && 'is-active'}id="cutlery" onClick={e => setSelectedInventory(e.target.id)}>Cutlery</a>
              <a className={selectedInventory === 'crockery' && 'is-active'} id="crockery" onClick={e => setSelectedInventory(e.target.id)}>Crockery</a>
              <a className={selectedInventory === 'cookingEquipment' && 'is-active'} id="cookingEquipment" onClick={e => setSelectedInventory(e.target.id)}>Cooking Equipment</a>
              <a className={selectedInventory === 'bedding' && 'is-active'} id="bedding" onClick={e => setSelectedInventory(e.target.id)}>Bedding</a>
              <a className={selectedInventory === 'outside' && 'is-active'} id="outside" onClick={e => setSelectedInventory(e.target.id)}>Outside</a>
            </p>}
            {windowWidth <= 730 && windowWidth > 420 &&
            <>
            <p className="panel-tabs">
              <a className={selectedInventory === 'all' && 'is-active'} id="all" onClick={e => setSelectedInventory(e.target.id)}>All</a>
              <a className={selectedInventory === 'general' && 'is-active'} id="general" onClick={e => setSelectedInventory(e.target.id)}>General</a>
              <a className={selectedInventory === 'cutlery' && 'is-active'}id="cutlery" onClick={e => setSelectedInventory(e.target.id)}>Cutlery</a>
              <a className={selectedInventory === 'crockery' && 'is-active'} id="crockery" onClick={e => setSelectedInventory(e.target.id)}>Crockery</a>
            </p>
            <p className="panel-tabs">
              <a className={selectedInventory === 'cookingEquipment' && 'is-active'} id="cookingEquipment" onClick={e => setSelectedInventory(e.target.id)}>Cooking Equipment</a>
              <a className={selectedInventory === 'bedding' && 'is-active'} id="bedding" onClick={e => setSelectedInventory(e.target.id)}>Bedding</a>
              <a className={selectedInventory === 'outside' && 'is-active'} id="outside" onClick={e => setSelectedInventory(e.target.id)}>Outside</a>
            </p>
            </>
            }
            {windowWidth <= 420 &&
            <>
            <p className="panel-tabs">
              <a className={selectedInventory === 'all' && 'is-active'} id="all" onClick={e => setSelectedInventory(e.target.id)}>All</a>
              <a className={selectedInventory === 'general' && 'is-active'} id="general" onClick={e => setSelectedInventory(e.target.id)}>General</a>
              <a className={selectedInventory === 'cutlery' && 'is-active'}id="cutlery" onClick={e => setSelectedInventory(e.target.id)}>Cutlery</a>
            </p>
            <p className="panel-tabs">
              <a className={selectedInventory === 'crockery' && 'is-active'} id="crockery" onClick={e => setSelectedInventory(e.target.id)}>Crockery</a>
              <a className={selectedInventory === 'cookingEquipment' && 'is-active'} id="cookingEquipment" onClick={e => setSelectedInventory(e.target.id)}>Cooking Equipment</a>
            </p>
            <p className="panel-tabs">
              <a className={selectedInventory === 'bedding' && 'is-active'} id="bedding" onClick={e => setSelectedInventory(e.target.id)}>Bedding</a>
              <a className={selectedInventory === 'outside' && 'is-active'} id="outside" onClick={e => setSelectedInventory(e.target.id)}>Outside</a>
            </p>
            </>
            }
            {/* <div className="panel-block">
              <p className="control has-icons-left">
                <input className="input is-danger" type="text" placeholder="Search">
                <span className="icon is-left">
                  <i className="fas fa-search" aria-hidden="true"/></i>
                </span>
                </input>
              </p>
            </div> */}
            {inventoryObject[selectedInventory].map(item => (
                <a className="panel-block">
                  <span className="panel-icon">
                    <i className="fas fa-check-square" aria-hidden="true"></i>
                  </span>
                  {item}
                </a>
              ))
            }
          </article>
          
        </div>
      </section>

    </div>
  )
}

export default HomesFrance