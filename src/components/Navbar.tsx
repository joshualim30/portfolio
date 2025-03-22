import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/projects', label: 'Projects' },
        { path: '/resume', label: 'Resume' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-default-200">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="text-xl font-bold text-foreground">
                        JL
                    </Link>
                    <div className="hidden md:flex items-center space-x-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`relative px-3 py-2 text-sm font-medium transition-colors ${location.pathname === item.path
                                    ? 'text-primary'
                                    : 'text-default-500 hover:text-foreground'
                                    }`}
                            >
                                {item.label}
                                {location.pathname === item.path && (
                                    <motion.div
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                                        layoutId="navbar-indicator"
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 