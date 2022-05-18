import {useState} from 'react';
import st from 'styled-components';
import axios from 'axios';
import {SubjectSelect} from './components/SubjectSelect';
import {ContactInput} from './components/ContactInput';
import {Textarea} from './components/Textarea';
import useTranslation from 'next-translate/useTranslation';
import {Button} from '@components/Button';

export const ContactForm = () => {
	let {t} = useTranslation();
	const [data, setData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const [error, setError] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	
	const handleValue = (title, e) => {
		setData(prevData => ({
			...prevData,
			[title]: e.target.value
		}));
	};
	const handleSubject = (value) => {
		setData(prevData => ({
			...prevData,
			subject: value,
		}))
	}
	const sendData = () => {
		let send = true;
		Object.keys(data).forEach((item) => {
			if (!data[item].length) {
				send = false;
				setError(prevData => ({
					...prevData,
					[item]: t("common:contactForm.errorRequired"),
				}))
			} else {
				if (item === 'email' && !data.email.match(/\S+@\S+\.\S+/)) {
					send = false;
					setError(prevData => ({
						...prevData,
						email: t("common:contactForm.errorMail"),
					}))
				} else {
					setError(prevData => ({
						...prevData,
						[item]: '',
					}))
				}
			}
		})
		if (send) {
			axios.post('/api/feedback', data).then((res) => {
				console.log(res.data);
			})
		}
	}

	return (
		<Parent>
			<Title>
				Contact Us
			</Title>
			<Form>
				<TopBlock>
					<NameInput>
						<ContactInput 
							error={error.name}
							value={data.name}
							onChange={(e) => handleValue('name', e)}
							placeholder={t("common:contactForm.name")}
						/>
					</NameInput>
					<MailInpit>
						<ContactInput
							error={error.email}
							value={data.email}
							onChange={(e) => handleValue('email', e)}
							placeholder={t("common:contactForm.mail")}
						/>
					</MailInpit>
				</TopBlock>
				<SubjectSelect 
					error={error.subject}
					changeValue={handleSubject}
					value={data.subject}
				/>
				<Textarea
					placeholder={t("common:contactForm.message")}
					error={error.message} value={data.message}
					onChange={(e) => handleValue('message', e)}
				/>
				<SendButton>
					<Button
						text={t("common:contactForm.button")}
						onClick={sendData}
						fullWidth={true}
					/>
				</SendButton>
			</Form>
		</Parent>
	);
}

const Parent = st.div`
	margin: 0px 0px 0px auto;
	max-width: 470px;
	width: 100%;
	@media(max-width: ${({theme}) => theme.media.laptop}) {
		margin: 0px auto;
	}
`;

const Title = st.h1`
	font-size: ${({theme}) => theme.fontSize.h1};
    text-align: center;
	font-weight: ${({theme}) => theme.fontWeight.normal};
`;

const Form = st.div`
	display: flex;
    flex-direction: column;
	box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
	padding: 50px 40px 20px 40px;
	border-radius: 20px;
`;

const TopBlock = st.div`
	display: flex;
	margin: 0px 0px 50px 0px;
`;

const NameInput = st.div`
	width: calc(50% - 15px);
	margin: 0px 30px 0px 0px;
`;

const MailInpit = st.div`
	width: calc(50% - 15px);
`;

const SendButton = st.div`
	margin: 40px auto 0px auto;
	width: 220px;
	HEIGHT: 40px;
`;