import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import LeftSidedNav from '../components/LeftSidedNav';
import RightSideNav from '../components/RightSideNav';
import LatestNews from '../components/LatestNews';
import { useLoaderData } from 'react-router-dom';
import Card from '../components/Card';

const Home = () => {
    const news=useLoaderData();
    return (
        <div >
            <Header></Header>
            <LatestNews></LatestNews>
            <NavBar></NavBar>
            this is home
            <div className='grid gap-5 grid-cols-1 lg:grid-cols-4'>
                <div className=' border'><LeftSidedNav></LeftSidedNav></div>
                <div className='lg:col-span-2 border'>
                    {news.map(aNews=><Card props={aNews}key={`news${aNews.category_id}`}></Card>)}
                </div>
                <div className=' border'> <RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;