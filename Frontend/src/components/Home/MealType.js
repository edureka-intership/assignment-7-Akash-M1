import React from 'react'

export default function MealType(mealType) {
  return (
    <div>
        <div id="headtext">Quick Searches</div>
        <div id="subtext">Discover restaurants by type of meal</div>
        <div className="row wrapper">
            <div className="row d-lg-flex flex-md-row mb-3 justify-content-md-around">
                {
                  mealType.items.map(item=>{
                      return (
                        <div className="card mb-2 p-2 m-3" Style="width: 18rem;">
                          <img src={require("../../" + item.image)} className="card-img-top" alt="..."/>
                          <div className="card-body">
                            <h5 className="card-title ctitle">{item.name}</h5>
                            <p className="card-text ctext">{item.content}</p>
                          </div>
                        </div>
                      )
                  })
                }
            </div>
        </div>
    </div>
  )
}
