import {Home, Users, Star, FileText, BookOpen} from 'lucide-react';
import type {NavItem} from "@/lib/schema/types.ts";

export const navItems: NavItem[] = [
    {
        id: 'home',
        label: 'Home',
        path: '#home',
        icon: <Home className="w-5 h-5"/>
    },
    {
        id: 'about',
        label: 'About Us',
        path: '#about',
        icon: <Users className="w-5 h-5"/>
    },
    {
        id: 'reviews',
        label: 'Reviews',
        path: '#reviews',
        icon: <Star className="w-5 h-5"/>
    },
    {
        id: 'procedures',
        label: 'Procedures',
        path: '#procedures',
        icon: <FileText className="w-5 h-5"/>
    },
    {
        id: 'blog',
        label: 'Blog',
        path: '#blog',
        icon: <BookOpen className="w-5 h-5"/>
    }
];