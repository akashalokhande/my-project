import {Route,Routes} from "react-router-dom"
import Home from"./Components/home/Home"
import QuickSearch from"./Components/filter/QuickSearch"
import Restaurant from"./Components/Restaurants/Restaurant"

function APP() {
    return(
        <>
         <main className="container-fluid">  
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quick-search/:meal_id" element={<QuickSearch />} />
          <Route path="/restaurant" element={<Restaurant />} />
        </Routes>
         </main>
        </>
    )
}

export default APP