import {useState} from 'react';
import st, {keyframes} from 'styled-components';
import {Logo} from './Logo';
import {Link} from '@components/Link';
import {Button} from '@components/Button';
import {useRouter} from "next/router";
import {LangList} from '@components/LangList'
import {
	MenuIcon,
	CloseIcon,
} from '@icons';
import useTranslation from 'next-translate/useTranslation';

export const Navbar = () => {
	const {pathname, locale} = useRouter();
	const [openMenu, setOpenMenu] = useState(false);
	let {t} = useTranslation();
	const menuList = [
		{
			title: `${t("common:navbar.main")}`,
			path: '/',
		},
		{
			title: `${t("common:navbar.ourPrinciples")}`,
			path: '/ourPrinciples',
		},
		{
			title: `${t("common:navbar.contact")}`,
			path: '/contact',
		},
	];
	const List = () => (
		<>
			{menuList.map((item) => (
				<Item key={item.path} isActive={pathname === item.path} >
					<Link href={item.path}  locale={locale}>
						{item.title}
					</Link>
				</Item>
			))}
			<Link href='/contact' locale={locale}>
				<Button text={t("common:navbar.button")} />
			</Link>
			<LangList />
		</>
	);

	return (
		<Parent>
			<Link href='/' locale={locale}>
				<Logo/>
			</Link>
			<MenuDesktop>
				<List/>
			</MenuDesktop>
			<Mobile>
				{openMenu && 
					<MenuMobile>
						<MobileLogo>
							<Link href='/' locale={locale}>
								<Logo/>
							</Link>
						</MobileLogo>
						<List/>
						<CloseIconBlock onClick={() => setOpenMenu(false)}/>
					</MenuMobile>
				}
				{!openMenu && 
					<MenuIconBlock onClick={() => setOpenMenu(true)} />
				}
			</Mobile>
		</Parent>
	)};

const Parent = st.div`
	display: flex;
	justify-content: space-between;
	margin: 0 0 30px 0;
`;

const MenuDesktop = st.div`
	@media(max-width: ${({theme}) => theme.media.tablet}) {
		display: none;
	}
	display: flex;
	align-items: center;
`;

const fadeIn = keyframes`
	from {
		top: 100%;
	}

	to {
		top: 0px;
	}
`;

const Mobile = st.div`
	z-index: 100;
	@media(max-width: ${({theme}) => theme.media.tablet}) {
		display: block;
	}
	display: none;
`;


const MenuMobile = st.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	box-sizing: border-box;
	padding: 90px 20px;
	flex-direction: column;
	background: ${({theme}) => theme.color.white};
    left: 0;
    top: 0;
	animation: ${fadeIn} 250ms cubic-bezier(0.25, 0.8, 0.25, 1);
	overflow: scroll;
    height: 100%;
	width: 100%;
    position: fixed;

`;

const MobileLogo = st.div`
	position: absolute;
	top: 10px;
	left: 30px;
`;


const Item = st.div`
	position: relative;
	padding: 5px;
	margin: 0 35px 0 0;
	width: fit-content;
	&:before {
		display: ${({isActive}) => isActive ? 'block' : 'none'};
		content: ' ';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background: ${({theme}) => theme.color.primary.main};
	}

	@media(max-width: ${({theme}) => theme.media.tablet}) {
		margin: 0 0 40px 0;
	}
`;

const MenuIconBlock = st(MenuIcon)`
	margin: 30px 7px 0 0;
	cursor: pointer;
`;

const CloseIconBlock = st(CloseIcon)`
	position: absolute;
	right: 40px;
	top: 40px;
	cursor: pointer;
`;
