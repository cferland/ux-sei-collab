import React, { Component } from 'react'

//custom component
import MenuItem from './MenuItem'


class Menu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: "dinner",
      smallPlates: [
        {
          title: "Oysers on The Half Shell",
          price: "MP",
          description: "pistachios, pomegranate, sage, toasted sourdough"
        },
        {
          title: "Local Burrata & Pickled Figs",
          price: "$24",
          description: "pistachios, pomegranate, sage, toasted sourdough"
        },
        {
          title: "Wedge Salad",
          price: "$20",
          description: "Maytag blue dressing, bacon lardons, crispy onions, chives"
        },
        {
          title: "Roasted Beets & Candied Walnuts",
          price: "$21",
          description: "baby arugula, goat cheese, mustard vinigrette"
        },
        {
          title: "Fall Kale, Apple & Frisee Salad",
          price: "$21",
          description: "celery, granny smith, pepita seeds, parmesean ~ caesar dressing"
        },
        {
          title: "House-Made Country Pâté",
          price: "$25",
          description: "Berkshire pork, cornichon, herb salad, mustard, grilled bread"
        },
        {
          title: "Grilled Spanish Octopus",
          price: "$27",
          description: "chickpea sesame tahini puree, green olive ~ salsa verde, lemon"
        },
        {
          title: "Crab Cakes",
          price: "$29",
          description: "caper-herb tartar sauce, celery root coleslaw"
        },
        {
          title: "Cheese plate",
          price: "$23",
          description: "Monte Enebro goat, Mistoa sheep, Arethusa blue cow, memimo almonds, walnut raisin bread"
        },
      ],
      largePlates: [
        {
          title: "Waverly Chicken Pot Pie",
          price: "$28",
          description: "mirepoix, veloute, savory herbs"
        },
        {
          title: "Roasted Amish Chicken",
          price: "$37",
          description: "creamy polenta, heirloomcharred onions, basil ~ lemon juice",
        },
        {
          title: "Red Squash & Coconut Curry Sauce",
          price: "$35",
          description: "braised mustard green lentils, apple chutney, peanuts, basil",
        },
        {
          title: "Scottish Salmon",
          price: "$38",
          description: "corn puree sautéed kernels, grilled peaches, shishito peppers, aged balsamic",
        },
        {
          title: "Seared Sea Bass",
          price: "$46",
          description: " italian eggplant squash caponata, pine nuts, parsley agro dolce"
        },
        {
          title: "Sautéed Dover Sole",
          price: "$65",
          description: "haricot vert, hollandaise, lemon"
        },
        {
          title: "Slow Roasted Duck Breast",
          price: "$48",
          description: "duck confit black pepper spaetzle, butternut puree, brussels sprouts"
        },
        {
          title: "Grilled Strip Steak",
          price: "$62",
          description: "rosemary potato cake, baby kale sprouts, au poivre sauce"
        },
        {
          title: "Aged Côte de Boeuf for Two",
          price: "$135",
          description: "wine merchant butter, onion rings, fingerling potatoes"
        },
        {
          title: "Waverly All-Natural Cheeseburger",
          price: "$26",
          description: `caramelized onions,gruyere, aioli, brioche, fries add bacon 4.5`
        },
      ],
      sides: [
        {
          title: "Mashed Potatoes",
          price: "$10",
          description: ""
        },
        {
          title: "French Fries",
          price: "$11",
          description: "parsley, tarragon"
        },
        {
          title: "Creamless Creamed Corn",
          price: "$13",
          description: "everything spice, scallions"
        },
        {
          title: "Brussels Sprouts",
          price: "$13",
          description: "thai vinaigrette, sesame seeds"
        },
        {
          title: "Sautéed Spinach",
          price: "$11",
          description: "shallots, chili flake"
        },
        {
          title: "Onion Rings",
          price: "$12",
          description: "paprika aioli, herbs, sea salt"
        },
      ],
      desserts: [
        {
          title: "Chocolate Mousse",
          price: "$14",
          description: "layers of dark milk chocolate, hazelnut crunch, candied violets ginger, chocolate pearls, vanilla ice cream"
        },
        {
          title: "Bananas Foster",
          price: "$14",
          description: "vanilla ice cream, rum caramel sauce"
        },
        {
          title: "Fresh Mixed Berries",
          price: "$14",
          description: "whipped cream, mint"
        },
        {
          title: "Peach Blackberry Crumble",
          price: "$14",
          description: "almond ~ cinnamon streusel, amaretto ice cream"
        },
        {
          title: "Gelato & Sorbet",
          price: "$14",
          description: "Daily Selection"
        },
        {
          title: "Cheese Plate",
          price: "$23",
          description: "Monte Enebro goat, Mistoa sheep, Arethusa Blue cow membrillo, marcona almonds, walnut raisin bread"
        },
        {
          title: "Coffee",
          price: "",
          description: "Americano 4.5, Espresso 4.5, Cappuccino 5.5, Latte 6"
        },
        {
          title: "Artisanal Teas",
          price: "$6",
          description: "earl grey, sencha green tea, 5 o'clock, peppermint, chamomile"
        },
      ]
    }
  }

  toggleCategory = (e) => {
    const dinnerdiv = document.querySelector('#dinner');
    const dessertdiv = document.querySelector('#dessert');
    if (!e.target.classList.contains('selected')) {
      dinnerdiv.classList.toggle('selected');
      dessertdiv.classList.toggle('selected');

      if (this.state.selected === "dinner") {
        this.setState({
          selected: 'dessert'
        })
      } else {
        this.setState({
          selected: 'dinner'
        })
      }
    }
  }

  render() {
    return (
      <div className="menu">

        <h1 className="menu-title">WINTER MENU</h1>
        <div className="menu-categories">
          <h2 id="dinner" onClick={this.toggleCategory} className="menu-category selected">DINNER</h2>
          <h2 id="dessert" onClick={this.toggleCategory} className="menu-category">DESSERT</h2>
        </div>
        {this.state.selected === 'dinner' &&
          <div className="menu-wrapper">
            <h4 className="menu-section-title">Small Plates</h4>
            <div className="menu-smallplates menu-section">

              {this.state.smallPlates.map((item, key) =>
                <div key={key}>
                  <MenuItem
                    title={item.title}
                    price={item.price}
                    description={item.description}
                  />
                </div>
              )}
            </div>

            <h4 className="menu-section-title">Large Plates</h4>
            <div className="menu-largeplates menu-section">
              {this.state.largePlates.map((item, key) =>
                <div key={key}>
                  <MenuItem
                    title={item.title}
                    price={item.price}
                    description={item.description}
                  />
                </div>
              )}
            </div>

            <h4 className="menu-section-title">Sides</h4>
            <div className="menu-largeplates menu-section">
              {this.state.sides.map((item, key) =>
                <div key={key}>
                  <MenuItem
                    title={item.title}
                    price={item.price}
                    description={item.description}
                  />
                </div>
              )}
            </div>
          </div>
        }
        {this.state.selected === "dessert" &&
          <div className="menu-wrapper">
            <h4 className="menu-section-title">Dessert</h4>
            <div className="menu-dessert menu-section">

              {this.state.desserts.map((item, key) =>
                <div key={key}>
                  <MenuItem
                    title={item.title}
                    price={item.price}
                    description={item.description}
                  />
                </div>
              )}
            </div>
          </div>
        }
      </div >
    )
  }
}

export default Menu