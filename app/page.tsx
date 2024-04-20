"use client";
import React, { useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/Table';

export default function Home() {
  const [showWeightliftingTable, setShowWeightliftingTable] = useState(false);
  const [showRunningTable, setShowRunningTable] = useState(false);
  const [weightliftingRows, setWeightliftingRows] = useState([{ weight: '', reps: '', difficulty: '' }]);
  const [runningRows, setRunningRows] = useState([{ interval: '', distance: '', time: '', difficulty: '' }]);
  const [weightliftingJsonData, setWeightliftingJsonData] = useState('');
  const [runningJsonData, setRunningJsonData] = useState('');

  const handleWeightliftingButtonClick = () => {
    setShowWeightliftingTable(true);
    setWeightliftingRows([{ weight: '', reps: '', difficulty: '' }]);
  };

  const handleRunningButtonClick = () => {
    setShowRunningTable(true);
    setRunningRows([{ interval: '', distance: '', time: '', difficulty: '' }]);
  };

  const addWeightliftingRow = () => {
    setWeightliftingRows([...weightliftingRows, { weight: '', reps: '', difficulty: '' }]);
  };

  const addRunningRow = () => {
    setRunningRows([...runningRows, { interval: '', distance: '', time: '', difficulty: '' }]);
  };

  const handleWeightliftingWeightChange = (value: string, index: number) => {
    const newRows = [...weightliftingRows];
    newRows[index].weight = value;
    setWeightliftingRows(newRows);
  };

  const handleWeightliftingRepsChange = (value: string, index: number) => {
    const newRows = [...weightliftingRows];
    newRows[index].reps = value;
    setWeightliftingRows(newRows);
  };

  const handleWeightliftingDifficultyChange = (value: string, index: number) => {
    const newRows = [...weightliftingRows];
    newRows[index].difficulty = value;
    setWeightliftingRows(newRows);
  };

  const handleRunningIntervalChange = (value: string, index: string | number) => {
    const newRows = [...runningRows];
    newRows[Number(index)].interval = value;
    setRunningRows(newRows);
  };

  const handleRunningDistanceChange = (value: string, index: number) => {
    const newRows = [...runningRows];
    newRows[index].distance = value;
    setRunningRows(newRows);
  };

  const handleRunningTimeChange = (value: string, index: number) => {
    const newRows = [...runningRows];
    newRows[index].time = value;
    setRunningRows(newRows);
  };

  const handleRunningDifficultyChange = (value: string, index: number) => {
    const newRows = [...runningRows];
    newRows[index].difficulty = value;
    setRunningRows(newRows);
  };

  const generateWeightliftingJsonData = () => {
    const data = JSON.stringify(weightliftingRows);
    setWeightliftingJsonData(data);
  };

  const generateRunningJsonData = () => {
    const data = JSON.stringify(runningRows);
    setRunningJsonData(data);
  };

  const clearWeightliftingJsonData = () => {
    setWeightliftingJsonData('');
  };

  const clearRunningJsonData = () => {
    setRunningJsonData('');
  };

  return (
    <main>
      <button id="button" onClick={handleWeightliftingButtonClick}>Weightlifting</button>

      {showWeightliftingTable && (
        <div>

          <Table>
            <TableCaption>WEIGHTLIFTING WORKOUT SUMMARY!!\n ideally this is where the AI will interpret the results based offs the user inputs</TableCaption>
            <TableHeader className="THeader">
              <TableRow>
                <TableHead >Set</TableHead>
                <TableHead>Weight (lbs)</TableHead>
                <TableHead>Reps</TableHead>
                <TableHead className="text-right">Difficulty</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {weightliftingRows.map((row, index) => (
                <TableRow id="genRow" key={index}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell><input type="text" value={row.weight} onChange={(e) => handleWeightliftingWeightChange(e.target.value, index)} /></TableCell>
                  <TableCell><input type="text" value={row.reps} onChange={(e) => handleWeightliftingRepsChange(e.target.value, index)} /></TableCell>
                  <TableCell className="text-right">
                    <select value={row.difficulty} onChange={(e) => handleWeightliftingDifficultyChange(e.target.value, index)}>
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
          {showWeightliftingTable && <button id="button" onClick={addWeightliftingRow}>Add Weightlifting Row</button>}
          {showWeightliftingTable && <button id="button" onClick={generateWeightliftingJsonData}>Display Weightlifting JSON</button>}
          {weightliftingJsonData && <><button id="button" onClick={clearWeightliftingJsonData}>Clear Weightlifting JSON</button><pre>{weightliftingJsonData}</pre></>}
        </div>
      )}
      <br></br>
      <button id="button" onClick={handleRunningButtonClick}>Running</button>
      {showRunningTable && (
        <Table>
          <TableCaption>RUNNING WORKOUT SUMMARY!!\n ideally this is where the AI will interpret the results based off sthe user inputs</TableCaption>
          <TableHeader className='THeader'>
            <TableRow>
              <TableHead className="w-[100px]">Interval</TableHead>
              <TableHead>Distance (miles)</TableHead>
              <TableHead>Time (mins)</TableHead>
              <TableHead className="text-right">Difficulty</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {runningRows.map((row, index) => (
              <TableRow id="genRow" key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell><input type="text" value={row.distance} onChange={(e) => handleRunningDistanceChange(e.target.value, index)} /></TableCell>
                <TableCell><input type="text" value={row.time} onChange={(e) => handleRunningTimeChange(e.target.value, index)} /></TableCell>
                <TableCell className="text-right">
                  <select value={row.difficulty} onChange={(e) => handleRunningDifficultyChange(e.target.value, index)}>
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

      {showRunningTable && <button id="button" onClick={addRunningRow}>Add Running Row</button>}
      {showRunningTable && <button id="button" onClick={generateRunningJsonData}>Display Running JSON</button>}
      {runningJsonData && <><button id="button" onClick={clearRunningJsonData}>Clear Running JSON</button><pre>{runningJsonData}</pre></>}
    </main>
  );
}
