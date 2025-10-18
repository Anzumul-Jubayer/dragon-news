import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise=fetch('/categories.json').then((res)=>res.json())
const Categories = () => {
    const categories=use(categoryPromise)
    
    return (
        <div>
            <h2 className='font-bold mb-4'>All Categories</h2>
           <div className='grid grid-cols-1 gap-2 text-accent'>
             {
                categories.map(category=><NavLink key={category.id} className={'btn border-0 bg-base-100 hover:bg-base-200 font-semibold text-accent'} to={`/category-news/${category.id}`} >{category.name}</NavLink>)
            }
           </div>
        </div>
    );
};

export default Categories;