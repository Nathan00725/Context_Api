import React from 'react';
import { Alumnos_Probador } from './components/Hooks/Hooks_Estudiantes';
import Total from './components/Total';

const App: React.FC = () => {
  return (
    <Alumnos_Probador>
      <Total />
    </Alumnos_Probador>
  );
};

export default App;
