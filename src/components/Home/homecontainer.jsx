import React from 'react';

import { withAuthorization } from '../Session';

const HomeContainer = () => (
	<div>
		<h1>Home Page</h1>
	</div>
);

/* The condition under which the page is accessible, in this case, 
by anyone who is logged in. 
TODO: Make it finegrained to distinguish admin from patient
 */

const condition = (authUser) => !!authUser;
const Home = withAuthorization(condition)(HomeContainer);

export default Home;