import React from "react";
import theme from "theme";
import { Theme, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.BoxCarousel
			showPagination="dotsout"
			slidesCount="4"
			slidesPerView="2"
			spaceBetween="100"
			height="auto"
		>
			<Override slot="Bullet Button" background="#c7c7c7" hover-background="#222" />
			<Override slot="Bullet Button :active" background="#222" />
			<Override slot="Arrow" background="rgb(232, 232, 232)" focus-box-shadow="none" />
			<Override slot="Slide 1">
				<Image src="https://optim.tildacdn.net/tild3065-3566-4333-b939-306564393265/-/cover/860x550/center/center/-/format/webp/Screenshot_2024-02-0.png" display="block" max-width="100%" height="auto" />
			</Override>
			<Override slot="Slide 2">
				<Image src="https://optim.tildacdn.net/tild3965-3935-4765-b634-616236613262/-/cover/860x550/center/center/-/format/webp/Screenshot_2024-02-0.png" display="block" width="100%" />
			</Override>
			<Override slot="Slide 3">
				<Image src="https://optim.tildacdn.net/tild3734-6339-4962-b265-326334386138/-/cover/860x550/center/center/-/format/webp/Screenshot_2024-02-0.png" display="block" width="100%" />
			</Override>
			<Override slot="Slide 4">
				<Image src="https://optim.tildacdn.net/tild3934-3039-4337-b666-346130306466/-/cover/860x550/center/center/-/format/webp/Screenshot_2024-02-0.png" display="block" width="100%" />
			</Override>
			<Override
				slot="Slide"
				filter="opacity(50%)"
				display="flex"
				align-items="center"
				justify-content="center"
			/>
			<Override slot="Slide :active" filter="none" />
			<Override slot="Navigation Container Right" left="73%" />
			<Override slot="Navigation Container Left" right="73%" flex-direction="row" />
			<Override slot="Navigation Container" justify-content="flex-end" flex-direction="row-reverse" />
		</Components.BoxCarousel>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6620addd8e2e8e00217af5b1"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});