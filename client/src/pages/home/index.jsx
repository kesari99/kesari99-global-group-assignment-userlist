import { LogOut, MenuIcon, SearchSlash, User, XCircleIcon, XIcon } from "lucide-react"
import GetListing from "../get-listings"
import AboutPage from "../about"
import { Button } from "@/components/ui/button"
import { AuthContext } from "@/context/auth-context"
import { useContext, useState } from "react"
import { Tabs, TabsContent } from "@/components/ui/tabs"

const Listings = () => {
  const { resetCredentials } = useContext(AuthContext)
  const [activeTab, setActiveTab] = useState('get-list')
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    {
      icon: User,
      label: 'Get List',
      value: 'get-list',
      component: <GetListing />
    },
    {
      icon: SearchSlash,
      label: 'About',
      value: 'about',
      component: <AboutPage />
    },
    {
      icon: LogOut,
      label: 'Logout',
      value: 'logout',
      component: null
    }
  ]

  const handleLogout = () => {
    resetCredentials()
    sessionStorage.clear()
  }

  const toggleSidebar = () => setIsOpen(!isOpen)

  const handleButtonClick = (value, action) => {
    setActiveTab(value)
    setIsOpen(false)
    if (action) action()
  }

  return (
    <div className="flex h-full min-h-screen bg-gray-50 flex-col md:flex-row">
      <aside className="fixed top-0 left-0 h-full w-64 p-5 shadow-md hidden md:block bg-white">
        <h2 className="font-extrabold text-3xl mb-5">Dash Board</h2>
        <nav>
          {menuItems.map(eachItem => (
            <Button
              key={eachItem.value}
              className="w-full mb-2 justify-start"
              variant={activeTab === eachItem.value ? "secondary" : "ghost"}
              onClick={eachItem.value === 'logout' ? handleLogout : () => setActiveTab(eachItem.value)}
            >
              <eachItem.icon className="mr-2 h-4 w-4" />
              <span>{eachItem.label}</span>
            </Button>
          ))}
        </nav>
      </aside>

      {/* Mobile view */}
      <div className="md:hidden">
        <Button
          onClick={toggleSidebar}
          variant="ghost"
          className=" p-8 flex items-center"
        >
          {isOpen ? (
            <XCircleIcon className="h-40 w-40" />
          ) : <MenuIcon className="h-40 w-40" />}
        </Button>

        <aside
          className={`${isOpen ? "translate-x-0" : "-translate-x-full"} w-64 shadow-md fixed bg-white h-full top-0 left-0 md:translate-x-0 transition-transform duration-300 z-50`}
        >
          <h2 className="font-extrabold text-2xl mt-5 mb-5">Dash Board</h2>
          <nav>
            {menuItems.map((eachItem) => (
              <Button
                key={eachItem.value}
                className="w-full mb-2 justify-start"
                variant={activeTab === eachItem.value ? "secondary" : "ghost"}
                onClick={() => handleButtonClick(eachItem.value, eachItem.value === "logout" ? handleLogout : null)}
              >
                <eachItem.icon className="mr-2 h-4 w-4" />
                <span>{eachItem.label}</span>
              </Button>
            ))}
          </nav>
        </aside>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
            onClick={toggleSidebar}
          ></div>
        )}
      </div>

      <main className="flex-1 h-screen p-8 w-full md:ml-64">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            {menuItems.map(eachItem => (
              <TabsContent value={eachItem.value} key={eachItem.value}>
                {eachItem.component && eachItem.component}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
    </div>
  )
}

export default Listings
