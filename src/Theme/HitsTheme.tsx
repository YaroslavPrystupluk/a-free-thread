import styled from "styled-components";
// eslint-disable-next-line object-curly-newline
import { ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material";

const StyleImageList = styled(ImageList)(({ theme }) => ({
	"&.MuiImageList-root": {
		maxWidth: theme.breakpoints.xl,
		overflowY: "hidden",
		display: "flex",
		flexWrap: "wrap",
		margin: "0 6px 60px 6px",
		justifyContent: "center",
		[`@media screen and (min-width: ${theme.breakpoints.sm}px)`]: {
			height: 300,
			margin: "0 12px 60px 12px",
		},
		[`@media screen and (min-width: ${theme.breakpoints.lg}px)`]: {
			height: 480,
		},
	},
}));

const StyleImageListItemBar = styled(ImageListItemBar)(({ theme }) => ({
	"&.MuiImageListItemBar-root": {
		fontFamily: theme.fontFamily.list,
		margin: 8,
		fontWeight: 400,
		lineHeight: "normal",
		[`@media screen and (min-width: ${theme.breakpoints.sm}px)`]: {
			margin: "12px 16px",
		},
		"& .MuiImageListItemBar-titleWrap": {
			padding: 0,
			overflow: "inherit",
		},
		"& .MuiImageListItemBar-subtitle": {
			[`@media screen and (min-width: ${theme.breakpoints.sm}px)`]: {
				leadingTrim: "both",
				fontSize: 14,
			},
			[`@media screen and (min-width: ${theme.breakpoints.lg}px)`]: {
				fontSize: 16,
			},
		},
		"& .MuiImageListItemBar-title": {
			color: theme.colorText.title,
			fontWeight: 700,
			marginBottom: 6,
			[`@media screen and (min-width: ${theme.breakpoints.sm}px)`]: {
				leadingTrim: "both",
				fontSize: 16,
				marginBottom: 12,
			},
			[`@media screen and (min-width: ${theme.breakpoints.lg}px)`]: {
				fontSize: 20,
			},
		},
	},
}));

const StyleImageListItemBadge = styled(ImageListItemBar)(({ theme }) => ({
	"&.MuiImageListItemBar-root": {
		padding: "4px 6px",
		height: 20,
		top: 8,
		right: "auto",
		background: "rgba(255, 255, 255, 0.70)",
		[`@media screen and (min-width: ${theme.breakpoints.sm}px)`]: {
			top: 12,
			height: 25,
			padding: "6px 12px",
		},
		[`@media screen and (min-width: ${theme.breakpoints.lg}px)`]: {
			top: 24,
			height: 32,
			padding: "8px 16px",
		},
		"& .MuiImageListItemBar-title": {
			padding: 0,
			color: theme.colorText.primary,
			fontFamily: theme.fontFamily.list,
			fontSize: 10,
			fontWeight: 400,
			textTransform: "capitalize",
			display: "inline-flex",
			[`@media screen and (min-width: ${theme.breakpoints.sm}px)`]: {
				fontSize: 12,
			},
			[`@media screen and (min-width: ${theme.breakpoints.lg}px)`]: {
				fontSize: 14,
			},
		},
		"& .MuiImageListItemBar-titleWrap": {
			padding: 0,
		},
	},
}));

const StyleImageListItem = styled(ImageListItem)(({ theme }) => ({
	width: 132,
	margin: "10px 10px",
	border: "1px solid #F5F5F5",
	boxShadow: `
	  0px 0px 0.91935px 0px rgba(0, 0, 0, 0.04),
	  0px 1.83871px 1.83871px 0px rgba(0, 0, 0, 0.04),
	  0px 3.67742px 1.83871px 0px rgba(0, 0, 0, 0.02),
	  0px 5.51613px 2.75806px 0px rgba(0, 0, 0, 0.01),
	  0px 9.19355px 2.75806px 0px rgba(0, 0, 0, 0.00)`,
	[`@media screen and (min-width: ${theme.breakpoints.sm}px)`]: {
		width: 160,
	},
	[`@media screen and (min-width: ${theme.breakpoints.lg}px)`]: {
		width: 265,
	},
	"&.MuiImageListItem-root .MuiImageListItem-img": {
		height: 180,
		[`@media screen and (min-width: ${theme.breakpoints.sm}px)`]: {
			height: 230,
		},
		[`@media screen and (min-width: ${theme.breakpoints.lg}px)`]: {
			height: 380,
		},
	},
}));

const StyleTypography = styled(Typography)(({ theme }) => ({
	"&.MuiTypography-h4": {
		fontFamily: theme.fontFamily.title,
		fontSize: 20,
		fontWeight: 500,
		lineHeight: "32px",
		letterSpacing: 0.4,
		textTransform: "uppercase",
		margin: "20px auto",
		textAlign: "center",
		[`@media screen and (min-width: ${theme.breakpoints.sm}px)`]: {
			fontSize: 24,
			letterSpacing: 0.48,
		},
		[`@media screen and (min-width: ${theme.breakpoints.lg}px)`]: {
			fontSize: 40,
			letterSpacing: 0.8,
		},
	},
}));

export {
	StyleImageList,
	StyleImageListItemBar,
	StyleImageListItem,
	StyleTypography,
	StyleImageListItemBadge,
};
