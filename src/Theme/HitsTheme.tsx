import styled from "styled-components";
// eslint-disable-next-line object-curly-newline
import { ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material";

const StyleImageList = styled(ImageList)(() => ({
	"&.MuiImageList-root": {
		overflowY: "hidden",
		display: "flex",
		flexWrap: "wrap",
		margin: "0 6px 60px 6px",
		justifyContent: "center",
	},
}));

const StyleImageListItemBar = styled(ImageListItemBar)(({ theme }) => ({
	"&.MuiImageListItemBar-root": {
		fontFamily: theme.fontFamily.list,
		margin: 8,
		"& .MuiImageListItemBar-titleWrap": {
			padding: 0,
			overflow: "inherit",
		},
		"& .MuiImageListItemBar-title": {
			color: theme.colorText.title,
			fontWeight: 700,
			letterSpacing: 0.24,
			fontSize: 12,
			lineHeight: "normal",
			marginBottom: 6,
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
		"& .MuiImageListItemBar-title": {
			padding: 0,
			color: theme.colorText.primary,
			fontFamily: theme.fontFamily.list,
			fontSize: 10,
			fontWeight: 400,
			textTransform: "capitalize",
			display: "inline-flex",
		},
		"& .MuiImageListItemBar-titleWrap": {
			padding: 0,
		},
	},
}));

const StyleImageListItem = styled(ImageListItem)(() => ({
	margin: "10px 8px",
	border: "1px solid #F5F5F5",
	boxShadow:
		// eslint-disable-next-line max-len
		"0px 0px 0.91935px 0px rgba(0, 0, 0, 0.04), 0px 1.83871px 1.83871px 0px rgba(0, 0, 0, 0.04), 0px 3.67742px 1.83871px 0px rgba(0, 0, 0, 0.02), 0px 5.51613px 2.75806px 0px rgba(0, 0, 0, 0.01), 0px 9.19355px 2.75806px 0px rgba(0, 0, 0, 0.00)",
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
	},
}));

export {
	StyleImageList,
	StyleImageListItemBar,
	StyleImageListItem,
	StyleTypography,
	StyleImageListItemBadge,
};
