import Navbar from "./Navbar/Navbar"
import Sidebar from "./Sidebar/Sidebar"

export default function Layout({ children }) {
	return (
		<>
			<div className="h-screen w-full ">
				<div className="h-full flex flex-col">
					<div className="flex-initial">
						<Navbar />
					</div>
					<div className="flex-auto flex bg-indigo-50 py-5 px-8">
						<Sidebar />
						<div className="flex-1 mx-5 h-full">{children}</div>
					</div>
				</div>
			</div>
		</>
	)
}
