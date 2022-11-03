import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './../pages/Home';
import Error from './../pages/Error';
import Navbar from './../pages/layouts/Navbar';
import BooksView from './../redux/books/BooksView';
import AddBook from './../redux/books/AddBook';
import EditBook from './../redux/books/EditBook';

const Index = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/show-books' element={<BooksView />} />
					<Route path='/add-book' element={<AddBook />} />
					<Route path='/edit-book' element={<EditBook />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
};

export default Index;
