import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const variant = {
	medium: {
		padding: '8px 18px',
		fontSize: '16px',
	},
	small: {
		padding: '6px 16px',
		fontSize: '14px',
	},
};

export const Button = ({
	text,
	onClick,
	disabled,
	size,
	startIcon,
	endIcon,
	fullWidth,
	color,
}) => {
	return (
		<Content
			disabled={disabled}
			onClick={onClick}
			fullWidth={fullWidth}
			color={color}
			{...variant[size]}
		>
			{startIcon && (
				<StartIcon>
					{startIcon}
				</StartIcon>
			)}
			{text}
			{endIcon && (
				<EndIcon>
					{endIcon}
				</EndIcon>
			)}
		</Content>
	);
};

Button.propTypes = {
	/**
	 * Содержимое(текст) кнопки
	 */
	text: PropTypes.string.isRequired,
	/**
	 * События клика на кнопку
	 */
	onClick: PropTypes.func,
	/**
	 * Размер кнопки
	 */
	size: PropTypes.oneOf(['small', 'medium', 'custom']),
	/**
	 * Цвет
	 */
	color: PropTypes.oneOf(['primary', 'error', 'success']),
	/**
	 * Неактиваня кнопка, добавляет pinter-events none и opacity
	 */
	disabled: PropTypes.bool,
	/**
	 * Ширина на 100% родительского блока
	 */
	fullWidth: PropTypes.bool,
	/**
	 * Иконка до текста
	 */
	startIcon: PropTypes.element,
	/**
	 * Иконка после текста
	 */
	endIcon: PropTypes.element,
};

Button.defaultProps = {
	size: 'medium',
	disabled: false,
	fullWidth: false,
	startIcon: null,
	endIcon: null,
	color: 'primary',
	onClick: () => {},
};

const Content = styled.button`
	height: 100%;
	padding: ${(props) => props.padding};
	text-align: center;
	font-weight: ${({theme}) => theme.fontWeight.normal};
	font-size: ${(props) => props.fontSize};
	line-height: 16px;
	cursor: pointer;
	opacity: ${(props) => (props.disabled ? 0.4 : 1)};
	pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
	border-radius: 100px;
	position: relative;
	width: ${({fullWidth}) => fullWidth ? '100%' : 'auto'};
	border: none;
	box-shadow: none;
	outline: none;
	${({theme, color}) => {
		const colorsData = {
			primary: {
				main: theme.color.primary.main,
				text: theme.color.white,
				hover: theme.color.primary.bgHover,
				active: theme.color.primary.bgHover,
			},
			success: {
				main: theme.color.success.main,
				text: theme.color.white,
				hover: theme.color.success.bgHover,
				active: theme.color.success.bgHover,
			},
			error: {
				main: theme.color.error.main,
				text: theme.color.white,
				hover: theme.color.error.bgHover,
				active: theme.color.error.bgHover,
			},
		};
		const colorData = colorsData[color];

		return (`
			color: ${colorData.text};
			background: ${colorData.main};
			&:hover {
				background: ${colorData.hover};
			}
			&:active {
				background: ${colorData.active};
			}
		`);
	}}
`;

const StartIcon = styled.span`
	display: inline-block;
	margin: 0 8px 0 0;
`;

const EndIcon = styled.span`
	display: inline-block;
	margin: 0 0 0 8px;
`;

