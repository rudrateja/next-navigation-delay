


const DateTime = () => {
  const now = new Date();
  const options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    timeZone: 'Asia/Kolkata'
  };
    return (
        <p className="text-4xl font-semibold py-4 relative">{new Intl.DateTimeFormat('en-IN', options).format(now) }(IST) from Component</p>
    )
}

export default DateTime