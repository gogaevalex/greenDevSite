import st, {keyframes} from 'styled-components';
import {UseComponentVisible} from '@components/UseComponentVisible';
import useTranslation from 'next-translate/useTranslation';

export const SubjectSelect = ({changeValue, value, error}) => {
	let {t} = useTranslation();
	const {ref, isComponentVisible, setIsComponentVisible} = UseComponentVisible(false);
	const selectData = [
		t("common:contactForm.subject.one"),
		t("common:contactForm.subject.two"),
		t("common:contactForm.subject.three"),
		t("common:contactForm.subject.four"),
	];
	const isError = Boolean(error.length);
	return (
		<Select ref={ref}>
			<OptionMain 
				isError={isError}
				onClick={() => setIsComponentVisible(!isComponentVisible)}
				selected={value.length}
				isFocus={isComponentVisible}
			>
				{value.length ? value : t("common:contactForm.subject.placeholder")}
			</OptionMain>
			{isError && !isComponentVisible && (
				<Error>
					{error}
				</Error>
			)}
			{isComponentVisible && (
				<ListOption>
					{selectData.map((item) => (
						<OptionItem 
							key={item} 
							onClick={() => {
								changeValue(item);
								setIsComponentVisible(!isComponentVisible);
							}}
						>
							{item}
						</OptionItem>
					))}
				</ListOption>
			)}
		</Select>
	)
}

const Select = st.div`
	position: relative;
	padding: 5px 0px;
	width: 100%;
	margin: 0px 0px 50px 0px;
`;

const OptionItem = st.div`
	cursor: pointer;
	padding: 5px 18px;
	transition: all 0.1s;
	background: ${({theme}) => theme.color.dark.bg};
	&:hover {
		background: ${({theme}) => theme.color.dark.bgHover};
	}
`;

const OptionMain = st.div`
	position: relative;
	max-height: 32px;
	display: flex;
	border: none;
	outline: none;
	
	border-bottom: 1px solid ${({isFocus, theme, isError}) => {
		if (isError) {
			return theme.color.error.main;
		} else {
			if (isFocus) {
				return theme.color.dark.main;
			} else {
				return theme.color.dark.bgHover;
			}
		}
	}};
	cursor: pointer;
	justify-content: space-between;
	padding: 6px 0 4px 10px;
	margin: 8px 0 8px 0;
	background: ${({theme}) => theme.color.white};
	color: ${({selected, theme}) => selected ? theme.color.dark.main : theme.color.dark.second};
`;

const Error = st.div`
	position: absolute;
	color: ${({theme}) => theme.color.error.main};
	font-size: ${({theme}) => theme.fontSize.body3};
	bottom: -2px;
`;

const show = keyframes`
	from {
		transform: translate(0, 40px);
	}
	to {
		transform: rotate(0, 0);
	}
`;

const ListOption = st.div`
	z-index: 100;
	background: ${({theme}) => theme.color.white};
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
	position: absolute;
	width: 100%;
	max-height: 150px;
	overflow: hidden;
	animation: ${show} 250ms cubic-bezier(0.25, 0.8, 0.25, 1);
	top: 100%;
`;