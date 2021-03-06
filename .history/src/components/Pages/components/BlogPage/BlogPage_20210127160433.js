import React from 'react';
import './BlogPage.css';
import Page from '../../../Page';
import PageTitle from '../../../PageTitle';
import Item from './components/Item';
import CardDeck from 'react-bootstrap/CardDeck'
import { CardColumns } from 'react-bootstrap';



const BlogPage = ({
	active,
}) => (
	<Page
		active={active}
		header={(<PageTitle title="Blog"/>)}
	>
		<CardColumns
		<CardDeck>
			<Item
				items={[{
					key: 'KEY',
					// img: '' ,
					url:'https://www.digitalocean.com/community/tutorials/react-axios-react',
					title: 'Using Axios with React',
					text: 'Axios is an easy to use HTTP client. Learn how to use it within your React applications.',
					footer:'Published on January 23, 2018',
				}, {
					key: 'KEY',
					// img: '' ,
					url:'https://www.digitalocean.com/community/tutorials/react-axios-react',
					title: 'Using Axios with React',
					text: 'Axios is an easy to use HTTP client. Learn how to use it within your React applications.',
					footer:'Published on January 23, 2018',
				}, {
					key: 'KEY',
					// img: '' ,
					url:'https://www.digitalocean.com/community/tutorials/react-axios-react',
					title: 'Using Axios with React',
					text: 'Axios is an easy to use HTTP client. Learn how to use it within your React applications.',
					footer:'Published on January 23, 2018',
				}, {
					key: 'KEY',
					// img: '' ,
					url:'https://www.digitalocean.com/community/tutorials/react-axios-react',
					title: 'Using Axios with React',
					text: 'Axios is an easy to use HTTP client. Learn how to use it within your React applications.',
					footer:'Published on January 23, 2018',
				}, {
					key: 'KEY',
					// img: '' ,
					url:'https://www.digitalocean.com/community/tutorials/react-axios-react',
					title: 'Using Axios with React',
					text: 'Axios is an easy to use HTTP client. Learn how to use it within your React applications.',
					footer:'Published on January 23, 2018',
				}, {
					key: 'KEY',
					// img: '' ,
					url:'https://www.digitalocean.com/community/tutorials/react-axios-react',
					title: 'Using Axios with React',
					text: 'Axios is an easy to use HTTP client. Learn how to use it within your React applications.',
					footer:'Published on January 23, 2018',
				}]}
			/>
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