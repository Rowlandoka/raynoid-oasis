import styled from 'styled-components';
import { useUser } from '../features/authentication/useUser';
import Spinner from './Spinner';
import { useNavigate } from '@tanstack/react-query';
import { useEffect } from 'react';

const FullPage = styled.div`
	height: 100vh;
	background-color: var(--color-grey-50);
	display: flex;
	align-items: center;
	justify-content: center;
`;

function ProtectedRoute({ children }) {
	const navigate = useNavigate();
	//1. load the authenticated user
	const { user, isLoading } = useUser();

	//2.if there is no authenticated user, redirect to the login page
	useEffect(function () {
		if (!isAuthenticated && !isLoading) navigate('/login');
	}, []);

	//3. show a spinner
	if (isLoading)
		return (
			<FullPage>
				<Spinner />
			</FullPage>
		);

	//4. if there is a user render the app
	if (isAuthenticated) return children;
}

export default ProtectedRoute;
