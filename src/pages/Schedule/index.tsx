import React from 'react';
import { SEO } from '../../components/SEO';
import { ScheduleSearch } from './components/ScheduleSearch';
import { ScheduleResults } from './components/ScheduleResults';
import { useScheduleRoutes } from './hooks/useScheduleRoutes';

const Schedule = () => {
  const { 
    routes, 
    selectedIsland, 
    setSelectedIsland, 
    selectedDate, 
    setSelectedDate 
  } = useScheduleRoutes();

  return (
    <>
      <SEO 
        title="Ferry Schedules & Timetables"
        description="View complete ferry schedules and timetables for all Cyclades islands. Plan your Greek island hopping journey with real-time updates and live tracking."
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 pt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Ferry Schedule</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find all available ferry routes and schedules between the Cyclades islands
            </p>
          </div>

          <ScheduleSearch
            selectedIsland={selectedIsland}
            selectedDate={selectedDate}
            onIslandChange={setSelectedIsland}
            onDateChange={setSelectedDate}
          />

          {routes.length > 0 && (
            <ScheduleResults
              routes={routes}
              selectedIsland={selectedIsland}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Schedule;