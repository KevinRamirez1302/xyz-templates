import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import TrailStatusBadge from '../components/ui/TrailStatusBadge';
import { 
  LayoutDashboard, 
  Map as MapIcon, 
  CloudSun, 
  Bell, 
  Calendar, 
  Home, 
  Plus, 
  Trash2, 
  Save, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle,
  Thermometer,
  Wind,
  Droplets,
  Zap,
  Info,
  LogOut
} from 'lucide-react';
import type { AlertType, Trail, CalendarEvent, Accommodation } from '../types';

const Dashboard: React.FC = () => {
  const { 
    data, 
    updateWeather, 
    updateTrailStatus, 
    addAlert, 
    toggleAlert, 
    deleteAlert,
    updateEvent,
    deleteEvent,
    updateAccommodation,
  } = useData();

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [successMsg, setSuccessMsg] = useState('');

  const handleLogout = () => {
    localStorage.removeItem('lapalma_admin_auth');
    navigate('/');
  };

  const showSuccess = (msg: string) => {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  // Sidebar Items
  const sidebarItems = [
    { id: 'overview', label: 'Resumen', icon: LayoutDashboard },
    { id: 'weather', label: 'Clima', icon: CloudSun },
    { id: 'trails', label: 'Senderos', icon: MapIcon },
    { id: 'alerts', label: 'Alertas', icon: Bell },
    { id: 'events', label: 'Eventos', icon: Calendar },
    { id: 'accommodation', label: 'Alojamiento', icon: Home },
  ];

  return (
    <div className="dash-layout">
      {/* Sidebar */}
      <aside className="dash-sidebar">
        <div style={{ padding: '32px 24px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 32, height: 32, background: 'var(--green-700)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <LayoutDashboard size={18} color="white" />
            </div>
            <span style={{ fontWeight: 800, fontFamily: 'var(--font-heading)', fontSize: '1.1rem' }}>Admin Panel</span>
          </div>
        </div>
        
        <nav className="dash-nav">
          {sidebarItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`dash-nav-item ${activeTab === item.id ? 'active' : ''}`}
            >
              <item.icon size={18} color={activeTab === item.id ? 'var(--green-500)' : 'currentColor'} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="dash-sidebar-footer">
          <div className="version-tag">
            v1.0.0 Stable
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dash-main">
        {/* Header */}
        <header className="dash-header">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '1.75rem', marginBottom: 4, fontWeight: 600 }}>
                {sidebarItems.find(i => i.id === activeTab)?.label}
              </h1>
              <p style={{ color: 'var(--gray-400)', fontSize: '0.9rem' }} suppressHydrationWarning>
                Última actualización: {new Date(data.meta.lastUpdated).toLocaleDateString()} {new Date(data.meta.lastUpdated).toLocaleTimeString()}
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              {successMsg && (
                <div className="dash-success-alert">
                  <CheckCircle2 size={16} /> {successMsg}
                </div>
              )}
              <button 
                onClick={handleLogout}
                className="btn btn-secondary btn-sm"
                style={{ color: 'var(--red-alert)', borderColor: 'rgba(230,57,70,0.2)', display: 'flex', alignItems: 'center', gap: 6 }}
              >
                <LogOut size={16} /> Salir
              </button>
            </div>
          </div>
        </header>

        {/* Tab Content */}
        <div className="animate-fade-in">
          {activeTab === 'overview' && <OverviewTab data={data} />}
          {activeTab === 'weather' && <WeatherTab weather={data.weather} onUpdate={updateWeather} onNotify={() => showSuccess('Clima actualizado')} />}
          {activeTab === 'trails' && <TrailsTab trails={data.trails} onUpdateStatus={updateTrailStatus} onNotify={() => showSuccess('Estado de sendero actualizado')} />}
          {activeTab === 'alerts' && <AlertsTab alerts={data.meta.alerts} onAdd={addAlert} onToggle={toggleAlert} onDelete={deleteAlert} onNotify={(m: string) => showSuccess(m)} />}
          {activeTab === 'events' && <EventsTab events={data.events} onUpdate={updateEvent} onDelete={deleteEvent} onNotify={(m: string) => showSuccess(m)} />}
          {activeTab === 'accommodation' && <AccommodationTab accommodation={data.accommodation} onUpdate={updateAccommodation} onNotify={() => showSuccess('Disponibilidad actualizada')} />}
        </div>
      </main>
    <style>{`
      .dash-nav { padding: 20px 12px; flex: 1; }
      .dash-nav-item {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 16px;
        border-radius: var(--radius-sm);
        margin-bottom: 4px;
        color: var(--gray-400);
        background: transparent;
        transition: var(--transition);
        font-weight: 400;
        border: none;
        cursor: pointer;
        text-align: left;
      }
      .dash-nav-item.active {
        color: var(--white);
        background: rgba(82, 183, 136, 0.15);
        font-weight: 600;
      }
      .dash-sidebar-footer { padding: 20px; border-top: 1px solid var(--border); }
      .version-tag {
        font-size: 0.75rem;
        color: var(--gray-600);
        text-transform: uppercase;
        letter-spacing: 0.1em;
      }
      .dash-success-alert {
        background: rgba(45, 198, 83, 0.15);
        border: 1px solid rgba(45, 198, 83, 0.3);
        color: var(--green-open);
        padding: 8px 16px;
        border-radius: var(--radius-sm);
        font-size: 0.85rem;
        display: flex;
        align-items: center;
        gap: 8px;
        animation: fadeUp 0.3s ease;
      }
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `}</style>
  </div>
);
};

// --- Tab Components ---

const OverviewTab: React.FC<{ data: any }> = ({ data }) => (
  <div>
    <div className="grid-4">
      <div className="dash-stat-card">
        <div style={{ color: 'var(--gray-400)', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: 8 }}>Turistas / Mes</div>
        <div style={{ fontSize: '1.8rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>{data.stats.visitorsThisMonth.toLocaleString()}</div>
        <div style={{ color: 'var(--green-500)', fontSize: '0.75rem', marginTop: 4 }}>+12.4% vs mes anterior</div>
      </div>
      <div className="dash-stat-card">
        <div style={{ color: 'var(--gray-400)', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: 8 }}>Ocupación Media</div>
        <div style={{ fontSize: '1.8rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>{data.stats.avgOccupancy}%</div>
        <div style={{ width: '100%', height: 4, background: 'var(--surface)', borderRadius: 2, marginTop: 12 }}>
          <div style={{ width: `${data.stats.avgOccupancy}%`, height: '100%', background: 'var(--gold-500)', borderRadius: 2 }} />
        </div>
      </div>
      <div className="dash-stat-card">
        <div style={{ color: 'var(--gray-400)', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: 8 }}>Senderos Abiertos</div>
        <div style={{ fontSize: '1.8rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>{data.stats.activeTrails} / {data.trails.length}</div>
        <div style={{ color: 'var(--blue-500)', fontSize: '0.75rem', marginTop: 4 }}>Operatividad del {Math.round((data.stats.activeTrails/data.trails.length)*100)}%</div>
      </div>
      <div className="dash-stat-card">
        <div style={{ color: 'var(--gray-400)', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: 8 }}>Alertas Activas</div>
        <div style={{ fontSize: '1.8rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: data.meta.alerts.filter((a: any) => a.active).length > 0 ? 'var(--yellow-alert)' : 'var(--white)' }}>
          {data.meta.alerts.filter((a: any) => a.active).length}
        </div>
        <div style={{ color: 'var(--gray-600)', fontSize: '0.75rem', marginTop: 4 }}>En los últimos 7 días</div>
      </div>
    </div>
    
    <div style={{ marginTop: 28 }} className="dash-panel">
      <div className="dash-panel-header">
        <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>Actividad Reciente</h3>
        <button className="btn btn-secondary btn-sm">Ver todo</button>
      </div>
      <div className="dash-panel-body">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[
            { id: 'l1', action: 'Cambio de estado', target: 'Ruta de los Volcanes', user: 'Admin', time: 'hace 2 horas' },
            { id: 'l2', action: 'Nueva alerta', target: 'Viento fuerte en cumbres', user: 'Sistema', time: 'hace 5 horas' },
            { id: 'l3', action: 'Actualización clima', target: 'Santa Cruz', user: 'Sistema', time: 'hace 10 horas' },
          ].map((log) => (
            <div key={log.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 12, borderBottom: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', gap: 12 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--green-500)', marginTop: 6 }} />
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{log.action}: <span style={{ color: 'var(--green-300)' }}>{log.target}</span></div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--gray-600)' }}>Por {log.user}</div>
                </div>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--gray-600)' }}>{log.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const WeatherTab: React.FC<{ weather: any, onUpdate: any, onNotify: any }> = ({ weather, onUpdate, onNotify }) => {
  const [form, setForm] = useState(weather);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(form);
    onNotify();
  };

  return (
    <div className="dash-panel" style={{ maxWidth: 600 }}>
      <div className="dash-panel-header">
        <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>Editor de Clima</h3>
      </div>
      <div className="dash-panel-body">
        <form onSubmit={handleSubmit}>
          <div className="grid-2">
            <div className="form-group">
              <label htmlFor="weather-temp" className="form-label">Temperatura (°C)</label>
              <div style={{ position: 'relative' }}>
                <Thermometer size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--gray-600)' }} />
                <input id="weather-temp" type="number" className="form-control" style={{ paddingLeft: 36 }} value={form.temp} onChange={e => {
                  const val = Number(e.target.value);
                  setForm((prev: any) => ({...prev, temp: val}));
                }} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="weather-cond" className="form-label">Condición</label>
              <select id="weather-cond" className="form-control" value={form.condition} onChange={e => {
                const val = e.target.value;
                setForm((prev: any) => ({...prev, condition: val}));
              }}>
                <option value="Soleado">Soleado</option>
                <option value="Parcialmente nublado">Parcialmente nublado</option>
                <option value="Nublado">Nublado</option>
                <option value="Lluvia débil">Lluvia débil</option>
                <option value="Tormenta">Tormenta</option>
                <option value="Niebla">Niebla</option>
              </select>
            </div>
          </div>
          
          <div className="grid-3">
            <div className="form-group">
              <label htmlFor="weather-hum" className="form-label">Humedad (%)</label>
              <div style={{ position: 'relative' }}>
                <Droplets size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--gray-600)' }} />
                <input id="weather-hum" type="number" className="form-control" style={{ paddingLeft: 36 }} value={form.humidity} onChange={e => {
                  const val = Number(e.target.value);
                  setForm((prev: any) => ({...prev, humidity: val}));
                }} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="weather-wind" className="form-label">Viento (km/h)</label>
              <div style={{ position: 'relative' }}>
                <Wind size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--gray-600)' }} />
                <input id="weather-wind" type="number" className="form-control" style={{ paddingLeft: 36 }} value={form.wind} onChange={e => {
                  const val = Number(e.target.value);
                  setForm((prev: any) => ({...prev, wind: val}));
                }} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="weather-icon" className="form-label">Icono</label>
              <select id="weather-icon" className="form-control" value={form.icon} onChange={e => {
                const val = e.target.value;
                setForm((prev: any) => ({...prev, icon: val}));
              }}>
                <option value="sun">Sol</option>
                <option value="partly-cloudy">Nubes/Sol</option>
                <option value="cloud">Nubes</option>
                <option value="rain">Lluvia</option>
                <option value="storm">Tormenta</option>
                <option value="fog">Niebla</option>
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn-primary" style={{ marginTop: 12 }}>
            <Save size={18} /> Guardar cambios
          </button>
        </form>
      </div>
    </div>
  );
};

const TrailsTab: React.FC<{ trails: Trail[], onUpdateStatus: any, onNotify: any }> = ({ trails, onUpdateStatus, onNotify }) => {
  return (
    <div className="dash-panel">
      <div className="dash-panel-header">
        <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>Gestión de Senderos</h3>
      </div>
      <table className="dash-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Sendero</th>
            <th>Estado Actual</th>
            <th>Nota de Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {trails.map(trail => (
            <tr key={trail.id}>
              <td style={{ fontWeight: 600 }}>{trail.name}</td>
              <td><TrailStatusBadge status={trail.status} size="sm" /></td>
              <td style={{ fontSize: '0.85rem', color: 'var(--gray-400)', maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {trail.statusNote}
              </td>
              <td>
                <div style={{ display: 'flex', gap: 6 }}>
                  <button onClick={() => { onUpdateStatus(trail.id, 'open', 'Acceso normal'); onNotify(); }} className="btn btn-secondary btn-icon" title="Abrir">
                    <CheckCircle2 size={16} color="var(--green-open)" />
                  </button>
                  <button onClick={() => { onUpdateStatus(trail.id, 'caution', 'Precaución por desprendimientos'); onNotify(); }} className="btn btn-secondary btn-icon" title="Precaución">
                    <AlertTriangle size={16} color="var(--yellow-alert)" />
                  </button>
                  <button onClick={() => { onUpdateStatus(trail.id, 'closed', 'Cerrado por mantenimiento'); onNotify(); }} className="btn btn-secondary btn-icon" title="Cerrar">
                    <XCircle size={16} color="var(--red-alert)" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const AlertsTab: React.FC<{ alerts: any[], onAdd: any, onToggle: any, onDelete: any, onNotify: any }> = ({ alerts, onAdd, onToggle, onDelete, onNotify }) => {
  const [msg, setMsg] = useState('');
  const [type, setType] = useState<AlertType>('info');

  const handleAdd = () => {
    if (!msg) return;
    onAdd({ message: msg, type, active: true });
    setMsg('');
    onNotify('Alerta creada con éxito');
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 24 }}>
      <div className="dash-panel">
        <div className="dash-panel-header">
          <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>Historial de Alertas</h3>
        </div>
        <div className="dash-panel-body">
          {alerts.length === 0 ? (
            <p style={{ color: 'var(--gray-600)', textAlign: 'center', padding: '40px 0' }}>No hay alertas registradas</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {alerts.map(alert => (
                <div key={alert.id} style={{ 
                  padding: '16px', 
                  background: 'var(--blue-900)', 
                  border: '1px solid var(--border)', 
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  opacity: alert.active ? 1 : 0.5
                }}>
                  <div style={{ 
                    width: 32, height: 32, borderRadius: 8, 
                    background: alert.type === 'danger' ? 'rgba(230,57,70,0.1)' : alert.type === 'warning' ? 'rgba(255,183,3,0.1)' : 'rgba(78,168,222,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    {alert.type === 'danger' ? <Zap size={16} color="var(--red-alert)" /> : alert.type === 'warning' ? <AlertTriangle size={16} color="var(--yellow-alert)" /> : <Info size={16} color="var(--blue-500)" />}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.9rem' }}>{alert.message}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--gray-600)', marginTop: 4 }}>{new Date(alert.createdAt).toLocaleString()}</div>
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <label className="toggle" aria-label={`Activar/Desactivar alerta: ${alert.message}`}>
                      <input type="checkbox" checked={alert.active} onChange={() => { onToggle(alert.id); onNotify('Estado de alerta cambiado'); }} />
                      <span className="toggle-slider"></span>
                    </label>
                    <button onClick={() => { onDelete(alert.id); onNotify('Alerta eliminada'); }} className="btn btn-danger btn-icon" style={{ padding: 6 }}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="dash-panel">
        <div className="dash-panel-header">
          <h3 style={{ fontSize: '0.9rem', fontWeight: 600 }}>Nueva Alerta</h3>
        </div>
        <div className="dash-panel-body">
          <div className="form-group">
            <label htmlFor="alert-type" className="form-label">Tipo</label>
            <select id="alert-type" className="form-control" value={type} onChange={e => setType(e.target.value as AlertType)}>
              <option value="info">Información (Azul)</option>
              <option value="warning">Aviso (Amarillo)</option>
              <option value="danger">Crítica (Rojo)</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="alert-msg" className="form-label">Mensaje</label>
            <textarea 
              id="alert-msg"
              className="form-control" 
              rows={4} 
              placeholder="Ej: Acceso cortado en..." 
              value={msg}
              onChange={e => setMsg(e.target.value)}
              style={{ resize: 'none' }}
            />
          </div>
          <button onClick={handleAdd} className="btn btn-primary" style={{ width: '100%' }}>
            <Plus size={18} /> Publicar Alerta
          </button>
        </div>
      </div>
    </div>
  );
};

const EventsTab: React.FC<{ events: CalendarEvent[], onUpdate: any, onDelete: any, onNotify: any }> = ({ events, onUpdate, onDelete, onNotify }) => {
  return (
    <div className="dash-panel">
      <div className="dash-panel-header">
        <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>Agenda Cultural</h3>
        <button className="btn btn-primary btn-sm">
          <Plus size={16} /> Nuevo Evento
        </button>
      </div>
      <table className="dash-table" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Evento</th>
            <th>Fecha</th>
            <th>Categoría</th>
            <th>Visibilidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.id}>
              <td>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <img src={event.image} alt="" style={{ width: 40, height: 40, borderRadius: 6, objectFit: 'cover' }} />
                  <span style={{ fontWeight: 600 }}>{event.title}</span>
                </div>
              </td>
              <td style={{ fontSize: '0.85rem' }}>{new Date(event.date).toLocaleDateString()}</td>
              <td><span className="tag" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--white)' }}>{event.category}</span></td>
              <td>
                <label className="toggle" aria-label={`Cambiar visibilidad de ${event.title}`}>
                  <input type="checkbox" checked={event.active} onChange={() => { onUpdate(event.id, { active: !event.active }); onNotify('Visibilidad actualizada'); }} />
                  <span className="toggle-slider"></span>
                </label>
              </td>
              <td>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button className="btn btn-secondary btn-icon" style={{ padding: 6 }}><Save size={14} /></button>
                  <button onClick={() => { onDelete(event.id); onNotify('Evento eliminado'); }} className="btn btn-danger btn-icon" style={{ padding: 6 }}><Trash2 size={14} /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const AccommodationTab: React.FC<{ accommodation: Accommodation[], onUpdate: any, onNotify: any }> = ({ accommodation, onUpdate, onNotify }) => {
  return (
    <div className="grid-2">
      {accommodation.map(acc => (
        <div key={acc.id} className="dash-panel">
          <div className="dash-panel-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <img src={acc.image} alt="" style={{ width: 32, height: 32, borderRadius: 4, objectFit: 'cover' }} />
              <h3 style={{ fontSize: '0.9rem', fontWeight: 600 }}>{acc.name}</h3>
            </div>
            <label className="toggle">
              <span className="sr-only">Disponibilidad de {acc.name}</span>
              <input type="checkbox" checked={acc.available} onChange={() => { onUpdate(acc.id, { available: !acc.available }); onNotify(); }} />
              <span className="toggle-slider"></span>
            </label>
          </div>
          <div className="dash-panel-body">
            <div className="form-group">
              <label htmlFor={`occ-${acc.id}`} className="form-label">Ocupación Actual: {acc.occupancy}%</label>
              <input 
                id={`occ-${acc.id}`}
                type="range" 
                min="0" max="100" 
                value={acc.occupancy} 
                onChange={e => { 
                  const val = Number(e.target.value);
                  onUpdate(acc.id, { occupancy: val }); 
                  onNotify(); 
                }} 
                style={{ width: '100%', accentColor: 'var(--green-500)' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--gray-600)', marginTop: 4 }}>
                <span>Vacío</span>
                <span>Completo</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
