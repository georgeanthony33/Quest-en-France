import React, { useState } from "react";
import config from "../../util/Config";

const HomesFrance = (props) => {
  const homeImagesLarge = props.images.filter(
    (image, index) => index === 6 || index === 7,
  );
  const homeImagesSmall = props.images.filter((image, index) => index <= 5);

  const [selectedInventory, setSelectedInventory] = useState("all");

  if (!homeImagesLarge || !homeImagesSmall) return null;

  return (
    <div id="HomeFrance">
      <section className="section has-background-white homes-large-image-section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {homeImagesLarge.map((image, index) => (
              <div
                key={index}
                className="column is-half-desktop is-full-tablet is-full-mobile"
              >
                <div className="homes-homecard-container">
                  <img
                    src={image.image}
                    className="homes-alice-image"
                    alt="Homes France"
                  />
                  <div
                    className={
                      "homes-homecard-text-container columns is-vcentered"
                    }
                  >
                    <div className="column">
                      <p className="has-text-centered has-text-white is-uppercase is-size-6">
                        {image.home_type}
                      </p>
                      <h3 className="has-text-centered has-text-white is-size-4 homes-image-home-type">
                        {image.room}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {homeImagesSmall.map((image, index) => (
              <div
                key={index}
                className="column is-one-third-desktop is-half-tablet is-full-mobile homes-homecard-outer-container-small"
              >
                <div className="homes-homecard-container-small">
                  <img
                    src={image.image}
                    className="homes-alice-image"
                    alt="Homes France"
                  />
                  <div
                    className={
                      "homes-homecard-text-container columns is-vcentered"
                    }
                  >
                    <div className="column">
                      <p className="has-text-centered has-text-white is-uppercase is-size-6 homes-image-home-type">
                        {image.home_type}
                      </p>
                      <h3 className="has-text-centered has-text-white is-size-4">
                        {image.room}
                      </h3>
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
              <p className="homes-rooms-checklist-info">
                The modern lounge / dining area has a table and seating for up
                to 6 people, including seating that will convert into a double
                bed. The lounge also benefits from electric heating.
              </p>

              <div className="homes-rooms-checklist">
                <span className="icon">
                  <i className="fas fa-check-square"></i>
                </span>
                <h2 className="has-text-weight-bold">Bedrooms</h2>
              </div>
              <p className="homes-rooms-checklist-info">
                The 2 bedroom home has a double bedroom and a twin bedroom ,
                both bedrooms have wardrobes. The 3 bedroom mobile home has one
                double bedroom and 2 twin bedrooms, all with wardrobes.
              </p>

              <div className="homes-rooms-checklist">
                <span className="icon">
                  <i className="fas fa-check-square"></i>
                </span>
                <h2 className="has-text-weight-bold">Bathroom</h2>
              </div>
              <p className="homes-rooms-checklist-info">
                There is a standard flush toilet, washbasin and shower. All of
                the homes have seperate WC’s.
              </p>
            </div>

            <div className="column homes-rooms-checklist-column is-half-desktop is-half-tablet is-full-mobile">
              <div className="homes-rooms-checklist">
                <span className="icon">
                  <i className="fas fa-check-square"></i>
                </span>
                <h2 className="has-text-weight-bold">Kitchen</h2>
              </div>
              <p className="homes-rooms-checklist-info">
                The mobile home has a fully fitted kitchen with plenty of
                cupboards. All have a full size cooker with hob, oven and grill
                together with a Fridge/freezer or large fridge and a microwave.
              </p>

              <div className="homes-rooms-checklist">
                <span className="icon">
                  <i className="fas fa-check-square"></i>
                </span>
                <h2 className="has-text-weight-bold">Outside Furniture</h2>
              </div>
              <p className="homes-rooms-checklist-info">
                All mobiles have a patio table and chairs, and parasol for a
                home with open veranda.
              </p>

              <div className="homes-rooms-checklist">
                <span className="icon">
                  <i className="fas fa-check-square"></i>
                </span>
                <h2 className="has-text-weight-bold">BBQs</h2>
              </div>
              <p className="homes-rooms-checklist-info">
                {
                  "Gas barbecues can be hired from our couriers for a 20 euro fee for the duration of your holiday. (A 5 euro refundable deposit will also be charged, but refunded if the grill part is returned in a clean condition)."
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section has-background-white">
        <div className="container">
          <article className="panel is-danger has-background-light">
            <p className="panel-heading" id="heading">
              <h3 className="title has-text-weight-bold is-size-3 has-text-white">
                Inventory
              </h3>
            </p>
            <p className="panel-tabs inventoryTabs">
              <button
                className={selectedInventory === "all" && "is-active"}
                id="all"
                onClick={(e) => setSelectedInventory(e.target.id)}
              >
                All
              </button>
              <button
                className={selectedInventory === "general" && "is-active"}
                id="general"
                onClick={(e) => setSelectedInventory(e.target.id)}
              >
                General
              </button>
              <button
                className={selectedInventory === "cutlery" && "is-active"}
                id="cutlery"
                onClick={(e) => setSelectedInventory(e.target.id)}
              >
                Cutlery
              </button>
              <button
                className={selectedInventory === "crockery" && "is-active"}
                id="crockery"
                onClick={(e) => setSelectedInventory(e.target.id)}
              >
                Crockery
              </button>
              <button
                className={
                  selectedInventory === "cookingEquipment" && "is-active"
                }
                id="cookingEquipment"
                onClick={(e) => setSelectedInventory(e.target.id)}
              >
                Cooking Equipment
              </button>
              <button
                className={selectedInventory === "bedding" && "is-active"}
                id="bedding"
                onClick={(e) => setSelectedInventory(e.target.id)}
              >
                Bedding
              </button>
              <button
                className={selectedInventory === "outside" && "is-active"}
                id="outside"
                onClick={(e) => setSelectedInventory(e.target.id)}
              >
                Outside
              </button>
            </p>

            {/* <div className="panel-block">
              <p className="control has-icons-left">
                <input className="input is-danger" type="text" placeholder="Search">
                <span className="icon is-left">
                  <i className="fas fa-search" aria-hidden="true"/></i>
                </span>
                </input>
              </p>
            </div> */}
            <div className="inventory-items-container">
              {config.inventoryFrance[selectedInventory].map((item, index) => (
                <div key={index} className="panel-block inventoryItem">
                  <span className="panel-icon">
                    <i className="fas fa-check-square" aria-hidden="true"></i>
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HomesFrance;
