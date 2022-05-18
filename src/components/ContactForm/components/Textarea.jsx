import st from 'styled-components';
import {useRef} from 'react';

export const Textarea = ({
	value,
	onChange,
	error,
	placeholder,
}) => {
	const isError = Boolean(error.length);
	const areaRef = useRef(null);

	return (
		<Parent>
			<TitleMessage onClick={() => areaRef.current.focus()}>
				{placeholder}
			</TitleMessage>
			<Area isError={isError} value={value} onChange={onChange} ref={areaRef}/>
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
	bottom: -11px;
`;

const TitleMessage = st.div`
	color: ${({theme}) => theme.color.dark.second};
	margin: 0px 0px 5px 15px;
`;

const Area = st.textarea`
	width: 100%;
	height: 50px;
	border: none;
	outline: none;
	color: ${({theme}) => theme.color.dark.main};
	border-bottom: 1px solid ${({theme, isError}) => isError ? theme.color.error.main : theme.color.dark.bgHover};
	resize: none;
	overflow : auto;
	font-size: ${({theme}) => theme.fontSize.body1};

	&:focus {
		border-bottom: 1px solid ${({theme}) => theme.color.dark.main};
	}
	::-webkit-scrollbar {
		width: 4px;
		border-radius: 10px;
		background: ${({theme}) => theme.color.dark.bgHover}; 
		margin: 2px;
	}
	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
		background: ${({theme}) => theme.color.dark.second}; 
	}
`;