import {useState,useEffect} from 'react';

import {getProfile} from '../../../apis/users.api';


export const Home = () => {
	const [username, setUsername] = useState("");

	useEffect(() => {
		getProfile()
		.then(data => {
			if (data && data.username) setUsername(data.username);
		});
	}, [])

	return <p>{username}さん</p>
		
}
