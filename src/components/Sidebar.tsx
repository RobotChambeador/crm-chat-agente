
import { NavLink, Link } from "react-router-dom";
import { Bell, Home, LineChart, Package, ShoppingCart, Users, Ticket, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "./ui/badge";

const Sidebar = () => {
  const commonLinkClasses = "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary";
  const activeLinkClasses = "bg-muted text-primary";

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <Ticket className="h-6 w-6" />
            <span className="">CRM de Soporte</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <NavLink to="/" end className={({ isActive }) => `${commonLinkClasses} ${isActive ? activeLinkClasses : ''}`}>
              <Home className="h-4 w-4" />
              Dashboard
            </NavLink>
            <NavLink to="/tickets" className={({ isActive }) => `${commonLinkClasses} ${isActive ? activeLinkClasses : ''}`}>
              <Ticket className="h-4 w-4" />
              Tickets
            </NavLink>
            <NavLink to="/customers" className={({ isActive }) => `${commonLinkClasses} ${isActive ? activeLinkClasses : ''}`}>
              <Users className="h-4 w-4" />
              Clientes
            </NavLink>
          </nav>
        </div>
        <div className="mt-auto p-4">
            <Button size="sm" className="w-full" variant="outline" asChild>
                <Link to="/login">
                    <LogOut className="mr-2 h-4 w-4" />
                    Cerrar Sesión
                </Link>
            </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
