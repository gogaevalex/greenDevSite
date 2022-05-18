import React, {useRef, useState, useEffect}  from 'react';
import st, {keyframes} from 'styled-components';
import pt from 'prop-types';

export const Select = ({
	data,
	onChange,
	margin,
	active,
	isFullWidth,
}) => {
	const positionListRef = useRef(null);
	const [openList, setOpen] = useState(false);
	const [directUp, setDirectUp] = useState(false);

	useEffect(() => {
		const distanceDown = window.innerHeight - positionListRef.current.getBoundingClientRect().top;
		if (distanceDown < 150) {
			setDirectUp(true);
		}
	}, []);

	return (
		<Parent 
			isFullWidth={isFullWidth}
			margin={margin}
		>
			<MainItem 
				onClick={() => setOpen(!openList)}
				ref={positionListRef}
			>
				<MainItemContent>
					{data[active]}
				</MainItemContent>
				<Triangle directUp={directUp}/>
			</MainItem>
			{openList && (
				<List directUp={directUp}>
					{Object.keys(data).map((key) => {
						if (key !== active) {
							return (
								<Item 
									key={key}
									onClick={() => {
										setOpen(!openList)
										onChange(key);
									}}
								>
									{data[key]}
								</Item>
							)}
					})}
				</List>
			)}
		</Parent>
	)
};

Select.propTypes = {
	/**
	 * Данные для полей Select
	 */
	data: pt.object.isRequired,
	/**
	 * Данные для полей Select
	 */
	active: pt.string.isRequired,
	/**
	 * Функция которая изменяет значение Select
	 */
	onChange: pt.func.isRequired,
	/**
	 * ширина
	 */
	 isFullWidth: pt.bool,
	/**
	 * margin всего компонента
	 */
	margin: pt.string,
};

Select.defaultValue = {
	isFullWidth: false,
	margin: '0',
};

const show = keyframes`
	from {
		transform: translate(0, 10px);
	}
	to {
		transform: rotate(0, 0);
	}
`;

const Parent = st.div`
	width: 220px;
	${({isFullWidth}) => isFullWidth && `
		width: 100%;
	`};
	margin: ${({margin}) => margin};
	position: relative;
`;

const MainItem = st.div`
	position: relative;
	max-height: 32px;
	display: flex;
	border-radius: 100px;
	cursor: pointer;
	justify-content: space-between;
	padding: 6px 10px 3px 13px;
	margin: 8px 0 8px 0;
	background: ${({theme}) => theme.color.dark.bg};
	border: 1px solid ${({theme}) => theme.color.dark.main};
	&:hover {
		transition: all 0.1s;
		background: ${({theme}) => theme.color.dark.bgHover};
	}
`;

const MainItemContent = st.div`
	width: calc(100% - 20px);
`;

const Triangle = st.div`
	position: absolute;
	border: 5px solid transparent;
	border-top: ${({theme}) => `7px solid ${theme.color.dark.main}`};
	right: 10px;
	top: calc(50% - 3px);
	${({directUp}) => directUp ? 'transform: translate(0, -50%) rotate(180deg)' : ''}
`;

const List = st.div`
	background: ${({theme}) => theme.color.white};
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
	position: absolute;
	width: 100%;
	max-height: 150px;
	animation: ${show} 250ms cubic-bezier(0.25, 0.8, 0.25, 1);
	${({directUp}) => directUp ? 'bottom: calc(100% + 10px)' : 'top: calc(100% + 10px)'}
`;

const Item = st.div`
	background: ${({theme}) => theme.color.dark.bg};
	cursor: pointer;
	padding: 5px 18px;
	transition: all 0.1s;
	&:hover {
		background: ${({theme}) => theme.color.dark.bgHover};
	}
`;
