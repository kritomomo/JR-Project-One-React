import React from 'react';
import './BlogPage.css';
import Page from '../../../Page';
import PageTitle from '../../../PageTitle';
// import Item from './components/Item';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import CardDeck from 'react-bootstrap/CardDeck'



const BlogPage = ({
	active,
}) => (
	<Page
		active={active}
		header={(<PageTitle title="Blog"/>)}
	>
	
	<CardDeck>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

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