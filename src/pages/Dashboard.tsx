
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Ticket, Clock, CheckCircle, BarChart } from "lucide-react";

const mockTickets = [
    { id: '#3210', subject: 'Sin conexión a internet', customer: 'Juan Perez', status: 'abierto', priority: 'alta', created_at: '2025-06-15' },
    { id: '#3209', subject: 'Velocidad de descarga lenta', customer: 'Maria Garcia', status: 'en_progreso', priority: 'media', created_at: '2025-06-15' },
    { id: '#3208', subject: 'Duda sobre la última factura', customer: 'Carlos Rodriguez', status: 'resuelto', priority: 'baja', created_at: '2025-06-14' },
    { id: '#3207', subject: 'El servicio se corta intermitentemente', customer: 'Ana Lopez', status: 'abierto', priority: 'urgente', created_at: '2025-06-14' },
    { id: '#3206', subject: 'No puedo acceder a mi cuenta online', customer: 'Luis Martinez', status: 'cerrado', priority: 'media', created_at: '2025-06-13' },
];

const priorityVariantMap: { [key: string]: "default" | "secondary" | "destructive" | "outline" } = {
    baja: "secondary",
    media: "default",
    alta: "outline",
    urgente: "destructive",
};


const statusVariantMap: { [key: string]: "default" | "secondary" | "destructive" | "outline" } = {
    abierto: "destructive",
    en_progreso: "default",
    resuelto: "secondary",
    cerrado: "secondary",
};


const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Una vista general de tus tickets de soporte.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tickets Abiertos</CardTitle>
            <Ticket className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 esta semana</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">En Progreso</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Atendidos por 3 agentes</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resueltos Hoy</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">+12% desde ayer</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Creados Hoy</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">Desde el chatbot</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Tickets Recientes</CardTitle>
            <CardDescription>
              Los últimos tickets generados en el sistema.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asunto</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prioridad</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {mockTickets.map((ticket) => (
                            <tr key={ticket.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{ticket.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.subject}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.customer}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <Badge variant={statusVariantMap[ticket.status] || 'default'}>{ticket.status}</Badge>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <Badge variant={priorityVariantMap[ticket.priority] || 'default'}>{ticket.priority}</Badge>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Análisis</CardTitle>
            <CardDescription>Gráficos de tickets por estado y prioridad.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 items-center justify-center h-full pb-8">
            <BarChart className="w-16 h-16 text-muted-foreground" />
            <p className="text-muted-foreground">Los gráficos se mostrarán aquí.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
