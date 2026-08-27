# serve_base.py
import http.server
import socketserver
import os
import sys

BASE_PATH = "/slidev"
PORT = 8090
DIRECTORY = "."  # your build output folder

class Handler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        # Strip base path before resolving to filesystem
        if path.startswith(BASE_PATH):
            path = path[len(BASE_PATH):]
        # Fall back to root if empty
        if not path or path == "/":
            path = "/index.html"
        return super().translate_path(path)
    
    def end_headers(self):
        # Optional: handle SPA routing (return index.html for 404s)
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()

os.chdir(DIRECTORY)

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at http://localhost:{PORT}{BASE_PATH}/")
    httpd.serve_forever()