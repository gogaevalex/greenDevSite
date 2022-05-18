import st from 'styled-components';
import pt  from 'prop-types';

export const ContentFiller = ({type, title, description, image}) => {
	return (
		<Parent type={type}>
			<FirstBlock type={type}>
				<Title>
					{title}
				</Title>
				<Description type={type}>
					{description}
				</Description>
			</FirstBlock>
			<SecondBlock type={type}>
				<ImageBlock>
					{image}
				</ImageBlock>
			</SecondBlock>
		</Parent>
	)
}

const Parent = st.div`
	display: flex;
	flex-direction: ${({type}) => type === 'rightImage' ? 'row-reverse' : 'row'};
	@media(max-width: ${({theme}) => theme.media.laptop}) {
		flex-direction: column-reverse;
		align-items: center;
		margin: 0px 0px 30px 0px;
	}
`;

const FirstBlock = st.div`
	width: 50%;
	justify-content: center;
	align-items: ${({type}) => type === 'rightImage' ? 'flex-end' : 'flex-start'};
    display: flex;
    flex-direction: column;
	margin: 0px 10px;
	@media(max-width: ${({theme}) => theme.media.laptop}) {
		align-items: center;
		width: 100%;
	}
`;

const Title = st.h2`
	font-size: ${({theme}) => theme.fontSize.h1};
	font-weight: ${({theme}) => theme.fontWeight.normal};
	margin: 0px 0px 30px 0px;
	@media(max-width: ${({theme}) => theme.media.laptop}) {
		text-align: center;
		margin: 20px 0px 0px 0px;
	}
	@media(max-width: ${({theme}) => theme.media.mobileL}) {
		font-size: ${({theme}) => theme.fontSize.h5};
	}
`;

const Description = st.h3`
	font-weight: ${({theme}) => theme.fontWeight.normal};
	color: ${({theme}) => theme.textColor.darkSecond};
	max-width: 600px;
	text-align: ${({type}) => type === 'rightImage' ? 'end' : 'start'};
	@media(max-width: ${({theme}) => theme.media.laptop}) {
		text-align: center;
	}
`;

const SecondBlock = st.div`
	justify-content: ${({type}) => type === 'rightImage' ? 'flex-start' : 'flex-end'};
	width: 50%;
    display: flex;
	margin: 0px 10px;
	@media(max-width: ${({theme}) => theme.media.laptop}) {
		width: 100%;
		margin: 0px auto;
	}
`;

const ImageBlock = st.div`
	width: 100%;
`;

ContentFiller.propTypes = {
	type: pt.oneOf(['leftImage', 'rightImage']).isRequired,
	title: pt.string.isRequired,
	description: pt.string.isRequired,
	image: pt.node.isRequired,
}

