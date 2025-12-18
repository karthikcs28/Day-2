import "./App.css"

function App() {
  const profiles = [
    { id: 1, name: "Karthik", role: "Frontend Developer" },
    { id: 2, name: "Ajith", role: "Frontend Developer" },
    { id: 3, name: "Subramanian", role: "Senior Hr" },
    { id: 4, name: "Rakesh", role: "ML Engineer" }
  ]

  return (
    <div className="page-center">
      <div className="content">
        <h1 className="title">Coastal Seven Team Profile Cards</h1>

        <div className="grid-container">
          {profiles.map(profile => (
            <div className="card" key={profile.id}>
              <h2>{profile.name}</h2>
              <p>{profile.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
