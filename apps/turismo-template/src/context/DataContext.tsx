import React, { createContext, use, useState, useEffect, useCallback } from 'react';
import type { LaPalmaData, Trail, CalendarEvent, Accommodation, Alert, Stats } from '../types';
import defaultData from '../data/lapalma.json';

const STORAGE_KEY = 'lapalma_platform_data';

interface DataContextType {
  data: LaPalmaData;
  updateWeather: (weather: LaPalmaData['weather']) => void;
  updateTrailStatus: (id: string, status: Trail['status'], note: string) => void;
  addAlert: (alert: Omit<Alert, 'id' | 'createdAt'>) => void;
  toggleAlert: (id: string) => void;
  deleteAlert: (id: string) => void;
  addEvent: (event: Omit<CalendarEvent, 'id'>) => void;
  updateEvent: (id: string, event: Partial<CalendarEvent>) => void;
  deleteEvent: (id: string) => void;
  updateAccommodation: (id: string, data: Partial<Accommodation>) => void;
  updateStats: (stats: Partial<Stats>) => void;
  resetToDefaults: () => void;
}

const DataContext = createContext<DataContextType | null>(null);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<LaPalmaData>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) return JSON.parse(stored) as LaPalmaData;
    } catch {
      // fallback to default
    }
    return defaultData as LaPalmaData;
  });

  // Persist to localStorage on every change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const updateWeather = useCallback((weather: LaPalmaData['weather']) => {
    setData(prev => ({
      ...prev,
      weather: { ...weather, updatedAt: new Date().toISOString() },
      meta: { ...prev.meta, lastUpdated: new Date().toISOString() },
    }));
  }, []);

  const updateTrailStatus = useCallback((id: string, status: Trail['status'], note: string) => {
    setData(prev => {
      const openCount = prev.trails.filter(t => t.id !== id && t.status === 'open').length + (status === 'open' ? 1 : 0);
      return {
        ...prev,
        trails: prev.trails.map(t => t.id === id ? { ...t, status, statusNote: note } : t),
        stats: { ...prev.stats, activeTrails: openCount },
        meta: { ...prev.meta, lastUpdated: new Date().toISOString() },
      };
    });
  }, []);

  const addAlert = useCallback((alert: Omit<Alert, 'id' | 'createdAt'>) => {
    const newAlert: Alert = {
      ...alert,
      id: `a${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    setData(prev => ({
      ...prev,
      meta: {
        ...prev.meta,
        alerts: [newAlert, ...prev.meta.alerts],
        lastUpdated: new Date().toISOString(),
      },
    }));
  }, []);

  const toggleAlert = useCallback((id: string) => {
    setData(prev => ({
      ...prev,
      meta: {
        ...prev.meta,
        alerts: prev.meta.alerts.map(a => a.id === id ? { ...a, active: !a.active } : a),
      },
    }));
  }, []);

  const deleteAlert = useCallback((id: string) => {
    setData(prev => ({
      ...prev,
      meta: {
        ...prev.meta,
        alerts: prev.meta.alerts.filter(a => a.id !== id),
      },
    }));
  }, []);

  const addEvent = useCallback((event: Omit<CalendarEvent, 'id'>) => {
    const newEvent: CalendarEvent = { ...event, id: `ev${Date.now()}` };
    setData(prev => ({
      ...prev,
      events: [...prev.events, newEvent],
      stats: { ...prev.stats, upcomingEvents: prev.stats.upcomingEvents + 1 },
      meta: { ...prev.meta, lastUpdated: new Date().toISOString() },
    }));
  }, []);

  const updateEvent = useCallback((id: string, eventData: Partial<CalendarEvent>) => {
    setData(prev => ({
      ...prev,
      events: prev.events.map(e => e.id === id ? { ...e, ...eventData } : e),
      meta: { ...prev.meta, lastUpdated: new Date().toISOString() },
    }));
  }, []);

  const deleteEvent = useCallback((id: string) => {
    setData(prev => ({
      ...prev,
      events: prev.events.filter(e => e.id !== id),
      stats: { ...prev.stats, upcomingEvents: Math.max(0, prev.stats.upcomingEvents - 1) },
    }));
  }, []);

  const updateAccommodation = useCallback((id: string, acData: Partial<Accommodation>) => {
    setData(prev => ({
      ...prev,
      accommodation: prev.accommodation.map(a => a.id === id ? { ...a, ...acData } : a),
      meta: { ...prev.meta, lastUpdated: new Date().toISOString() },
    }));
  }, []);

  const updateStats = useCallback((stats: Partial<Stats>) => {
    setData(prev => ({ ...prev, stats: { ...prev.stats, ...stats } }));
  }, []);

  const resetToDefaults = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setData(defaultData as LaPalmaData);
  }, []);

  return (
    <DataContext.Provider value={{
      data, updateWeather, updateTrailStatus,
      addAlert, toggleAlert, deleteAlert,
      addEvent, updateEvent, deleteEvent,
      updateAccommodation, updateStats, resetToDefaults,
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => {
  const ctx = use(DataContext);
  if (!ctx) throw new Error('useData must be used within DataProvider');
  return ctx;
};
