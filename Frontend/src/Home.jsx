import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <>
<nav>
        <div classNameName="logo">CMS</div>
        <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Posts</a></li>
            <li><a href="#">Users</a></li>
            <li><a href="#">Logout</a></li>
        </ul>
    </nav>

    <header className="hero">
        <h1>Welcome to the CMS</h1>
        <p>Manage your content efficiently with our easy-to-use dashboard.</p>
        <a href="#" className="btn">Get Started</a>
    </header>

    <section className="dashboard">
        <div className="dashboard-card">
            <h2>Total Posts</h2>
            <p>120</p>
        </div>
        <div className="dashboard-card">
            <h2>Total Users</h2>
            <p>45</p>
        </div>
        <div className="dashboard-card">
            <h2>New Comments</h2>
            <p>15</p>
        </div>
    </section>    </>
  )
}


export default Home