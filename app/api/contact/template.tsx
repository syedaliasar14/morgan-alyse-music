interface Props {
  name: string;
  email: string;
  message: string;
  siteTitle: string;
}

export default function ContactEmail({ name, email, message, siteTitle }: Props) {
  const bodyStyle = {
    fontFamily: "Inter, Arial, Helvetica, sans-serif",
    padding: "20px",
    backgroundColor: "#ffffff",
    WebkitTextSizeAdjust: "100%",
    wordBreak: "break-word" as const,
  };

  const containerStyle = {
    maxWidth: "600px",
    margin: "0 auto",
    borderRadius: "8px",
    border: "1px solid #e0e0e0",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    padding: "20px",
  };

  const contentStyle = {
    color: "#271f30",
    fontSize: "16px",
    lineHeight: 1.5,
  };

  const footerStyle = {
    fontSize: "14px",
    textAlign: "center" as const,
    marginTop: "60px",
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{`New Message from ${name}`}</title>
      </head>
      <body style={bodyStyle}>
        <div style={containerStyle}>
          <div style={contentStyle}>
            <h2 style={{ margin: "0 0 12px" }}>New Message from {name}</h2>
            <p style={{ whiteSpace: "pre-wrap", margin: 0 }}>{message}</p>
          </div>
          <div style={footerStyle}>
            <p>Reply to this email to respond to {name}.</p>
            <p>You&apos;re receiving this email because someone contacted you through your website.</p>
            <p>&copy; {new Date().getFullYear()} {siteTitle}, all rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  );
}