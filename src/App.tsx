import { Button } from "@mui/material"

import { SOME_ENV_VARIABLE } from "@/config"
import { Component } from "@/shared/components"
import { useHook } from "@/shared/hooks"
import { Dashboard } from "@/pages/dashboard"
import { Header, HeaderMenu } from "@/layout/Header"

export const App = () => {
	const { hello } = useHook()
	console.log(hello)

	console.log(SOME_ENV_VARIABLE)

	return (
		<div>
			<Header />
			<HeaderMenu />
			<Button variant="contained">Hello World</Button>
			<Component />
			<Dashboard />
		</div>
	)
}

export default App
