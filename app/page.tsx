"use client";

import { useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/Table';

export default function Home() {
  const [showTable, setShowTable] = useState(false);
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const handleButtonClick = () => setShowTable(true);

  return (
    <main>
      <h1>hi</h1>
      <button onClick={handleButtonClick}>BUTTON TO RENDER!</button>
      
      {showTable && ( // this will render if showTable is true
        <Table>
          <TableCaption>YOUR WORKOUT SUMMARY!!</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Set</TableHead>
              <TableHead>Weight</TableHead>
              <TableHead>Reps</TableHead>
              <TableHead className="text-right">Difficulty</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell><input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} /></TableCell>
              <TableCell><input type="text" value={reps} onChange={(e) => setReps(e.target.value)} /></TableCell>
              <TableCell className="text-right"><input type="text" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} /></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )}
    </main>
  );
}
