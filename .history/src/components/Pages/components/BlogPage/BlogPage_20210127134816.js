import React from 'react';
import './BlogPage.css';
import Page from '../../../Page';
import PageTitle from '../../../PageTitle';
// import Item from './components/Item';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import imgURL from './components/Item/assets/webdesign.png';

const BlogPage = ({
	active,
}) => (
	<Page
		active={active}
		header={(<PageTitle title="Blog"/>)}
	>
		<CardGroup>
			



			<Card bg="primary" text="white" className=>
				<Card.Img variant="top" src={imgURL} />
				<Card.Body>
					<Card.Title>Bootstrap is the Most Popular Framework</Card.Title>
					<Card.Text>
						
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<small className="text-muted">Last updated 3 mins ago</small>
				</Card.Footer>
			</Card>

			
		</CardGroup>
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