function Home({logoutComponent}) {
    return(
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
           <ul style={{display:"flex",gap:"10px" ,listStyle:"none"}}>
            <li>Home</li>
            <li>about</li>
            <li>contact</li>
           </ul>
        </div>
        <div>
           {logoutComponent}
        </div>
      </div>
    )
  }

  export default Home;