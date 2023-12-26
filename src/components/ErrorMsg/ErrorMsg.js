const ErrorMsg = ({children}) => {
  return (
    <div style={{
        width: 500,
        padding: 10,
        backgroundColor: "orangered",
        textAlign: "center",
        borderRadius: 5,
        marginBottom:20,
        fontSize: 20
    }}>
        {children}
    </div>
  )
};

export default ErrorMsg;