function Card({ title, value }) {
  return (
    <div style={{
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      width: "220px",
      background: "#fafafa"
    }}>
      <h4>{title}</h4>
      <p style={{
        fontSize: "26px",
        fontWeight: "bold",
        marginTop: "10px"
      }}>
        {value ?? 0}
      </p>
    </div>
  );
}

export default Card;