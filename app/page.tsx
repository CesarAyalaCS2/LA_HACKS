"use client";
import { useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/Table';

export default function Home() {
  const [showTable, setShowTable] = useState(false);
  const [rows, setRows] = useState([{ weight: '', reps: '', difficulty: '' }]);

  const handleButtonClick = () => setShowTable(true);

  const addRow = () => {
    setRows([...rows, { weight: '', reps: '', difficulty: '' }]);
  };

  const handleWeightChange = (value, index) => {
    const newRows = [...rows];
    newRows[index].weight = value;
    setRows(newRows);
  };

  const handleRepsChange = (value, index) => {
    const newRows = [...rows];
    newRows[index].reps = value;
    setRows(newRows);
  };

  const handleDifficultyChange = (value, index) => {
    const newRows = [...rows];
    newRows[index].difficulty = value;
    setRows(newRows);
  };

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
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell><input type="text" value={row.weight} onChange={(e) => handleWeightChange(e.target.value, index)} /></TableCell>
                <TableCell><input type="text" value={row.reps} onChange={(e) => handleRepsChange(e.target.value, index)} /></TableCell>
                <TableCell className="text-right">
                  <select value={row.difficulty} onChange={(e) => handleDifficultyChange(e.target.value, index)}>
                    <option value="">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <button onClick={addRow}>Add Row</button>
    </main>
  );
}
