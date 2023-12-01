import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Card from "./Card";


const LeftSidedNav = () => {
    const [categories,setCategories]=useState([]);
    const [news,setNews]=useState([])
    useEffect(()=>{
        fetch('/categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    useEffect(
      ()=>{
        fetch('/news.json')
        .then(res=>res.json())
        .then(data=>setNews(data))
      },[]  
    )
    return (
        <div className="text-xl font-semibold ">
            <div>
            <h1>All Category {categories.length}</h1>
            {
                categories.map(category=><NavLink
                     key={category.id}
                     className="block px-10 py-4"
                     to={`/category/${category.id}`}>{category.name}</NavLink>)
            }
            </div>
            <div>
                <h1 className="text-[#9F9F9F] font-semibold">All News {news.length}</h1>
                {
                    news.slice(0,3).map(unit=><Card key={unit.category_id} props={unit}></Card>)
                }
            </div>

        </div>
    );
};

export default LeftSidedNav;