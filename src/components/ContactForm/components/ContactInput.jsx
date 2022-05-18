import st from 'styled-components';

export const ContactInput = ({
	value,
	onChange,
	placeholder,
	error,
}) => {
	const isError = Boolean(error.length);
	return (
		<Parent>
			<Input isError={isError} value={value} onChange={onChange} placeholder={placeholder}/>
			{isError && (
				<Error>
					{error}
				</Error>
			)}
		</Parent>
	)
}

const Parent  = st.div`
	position: relative;
`;

const Error = st.div`
	position: absolute;
	color: ${({theme}) => theme.color.error.main};
	font-size: ${({theme}) => theme.fontSize.body3};
	bottom: -15px;
`;


const Input = st.input`
	width: 100%;
	box-sizing: border-box;
	border: none;
	outline: none;
	border-bottom: 1px solid ${({theme, isError}) => isError ? theme.color.error.main : theme.color.dark.bgHover};
	background: white;
	padding: 6px 0 4px 10px;
	font-size: ${({theme}) => theme.fontSize.body1};
	&:focus {
		border-bottom: 1px solid ${({theme}) => theme.color.dark.main};
	}
`;