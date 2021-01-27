import React from 'react';
import './BlogPage.css';
import Page from '../../../Page';
import PageTitle from '../../../PageTitle';
import Item from './components/Item';

import CardDeck from 'react-bootstrap/CardDeck'



const BlogPage = ({
	active,
}) => (
	<Page
		active={active}
		header={(<PageTitle title="Blog"/>)}
	>
	
	<CardDeck>
  


</CardDeck>






	</Page>
)










// const BlogPage = ({ 
// 	active,
// }) => (
// 	<Page 
// 	active={active}
// 	header={(<PageTitle title="Blog"/>)}
// 	>
// 		<div class="blog-masonry two-columns">
// 			<Item
// 				items={[{
// 					key: 'KEY',
// 					href: 'https://github.com/kritomomo',
// 					imgURL: './components/Item/assets/owl.JPG',
// 					alt: 'blog-post-1',
// 					day: '1 ',
// 					month: 'Jan ',
// 					year: '2020 ',
// 					categoryName:'Travel',
// 					title: 'Bootstrap is the Most Popular Framework',
// 				}, {
// 					key: 'KEY',
// 					href: 'https://github.com/kritomomo',
// 					imgURL: './components/Item/assets/owl.JPG',
// 					alt: 'blog-post-1',
// 					day: '1 ',
// 					month: 'Jan ',
// 					year: '2020 ',
// 					categoryName:'Travel',
// 					title: 'Bootstrap is the Most Popular Framework',
// 				}, {
// 					key: 'KEY',
// 					href: 'https://github.com/kritomomo',
// 					imgURL: './components/Item/assets/owl.JPG',
// 					alt: 'blog-post-1',
// 					day: '1 ',
// 					month: 'Jan ',
// 					year: '2020 ',
// 					categoryName:'Travel',
// 					title: 'Bootstrap is the Most Popular Framework',
// 				}, {
// 					key: 'KEY',
// 					href: 'https://github.com/kritomomo',
// 					imgURL: './components/Item/assets/owl.JPG',
// 					alt: 'blog-post-1',
// 					day: '1 ',
// 					month: 'Jan ',
// 					year: '2020 ',
// 					categoryName:'Travel',
// 					title: 'Bootstrap is the Most Popular Framework',
// 				}, {
// 					key: 'KEY',
// 					href: 'https://github.com/kritomomo',
// 					imgURL: './components/Item/assets/owl.JPG',
// 					alt: 'blog-post-1',
// 					day: '1 ',
// 					month: 'Jan ',
// 					year: '2020 ',
// 					categoryName:'Travel',
// 					title: 'Bootstrap is the Most Popular Framework',
// 				}, {
// 					key: 'KEY',
// 					href: 'https://github.com/kritomomo',
// 					imgURL: './components/Item/assets/owl.JPG',
// 					alt: 'blog-post-1',
// 					day: '1 ',
// 					month: 'Jan ',
// 					year: '2020 ',
// 					categoryName:'Travel',
// 					title: 'Bootstrap is the Most Popular Framework',
// 				}]}
// 			/>
// 		</div>
// 	</Page>
// )

export default BlogPage;