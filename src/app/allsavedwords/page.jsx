// app/dashboard/page.jsx
'use client';

import SavedWords from '../../components/SavedWords/SavedWords';

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <SavedWords />
    </div>
  );
}
