import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="empty-state section">
      <h3>404 — Page Not Found</h3>
      <p>This page may have been moved or doesn't exist.</p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
}
