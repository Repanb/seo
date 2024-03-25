import React from 'react';
import style from './Navbar.css';
import Link from 'next/Link';
import Image from 'next/image';

const Navbar = () => {
    return (     
      <main class="cd__main">
        <nav id="navbar" class="nav-transparent">
            <div class="nav-wrapper">
                <div class="logo">
                    <Link href="/"><img src="../../assets/logoR-SEO.png" alt="seo specialist logo" width={100} height={40}/></Link>
                </div>

                <ul id="menu">
                    <li><Link href="/pages/service.html">What I do</Link></li>
                    <li><Link href="/pages/approach.html">Approach</Link></li>
                    <li><Link href="/pages/blog.html">Blogs</Link></li>
                    <li><Link href="/pages/bio.html">Bio</Link></li>
                    <li><Link href="/pages/contact.html">Contact</Link></li>
                </ul>
            </div>
        </nav>

        <div class="menuIcon">
            <span class="icon icon-bars"></span>
            <span class="icon icon-bars overlay"></span>
        </div>

        <div class="overlay-menu">
            <ul id="menu">
                <li><Link href="/pages/service.html">What I do</Link></li>
                <li><Link href="/pages/approach.html">Approach</Link></li>
                <li><Link href="/pages/blog.html">Blogs</Link></li>
                <li><Link href="/pages/bio.html">Bio</Link></li>
                <li><Link href="/pages/contact.html">Contact</Link></li>
            </ul>
        </div>
    </main>
    );
};

export default Navbar;