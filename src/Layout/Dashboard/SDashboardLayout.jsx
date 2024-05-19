import { Outlet } from "react-router-dom"
import Sidebar from "../../Components/Dashboard_courses/Sidebar"

const SDashboardLayout = ({setToken}) => {
  return (
    <section className="flex gap-12 overflow-hidden h-screen bg-slate-100 ">
      <section>
        <Sidebar setToken={setToken} />
      </section>

      <Outlet />
    </section>
  )
}

export default SDashboardLayout
