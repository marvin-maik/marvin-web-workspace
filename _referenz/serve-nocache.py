#!/usr/bin/env python3
"""Dev-Server ohne Browser-Caching. Loest die wiederkehrende Cache-Falle:
Chrome cacht HTML/CSS/JS und zeigt alte Staende. Dieser Server schickt bei
JEDER Datei no-store, damit im Review immer der echte Stand erscheint.

Nutzung:  python3 serve-nocache.py <port> <verzeichnis>
Beispiel: python3 serve-nocache.py 8933 projekte/routenwerk
"""
import sys
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    directory = sys.argv[2] if len(sys.argv) > 2 else "."
    handler = partial(NoCacheHandler, directory=directory)
    # ThreadingHTTPServer: mehrere parallele Requests (Fonts, d3, Modelle) blockieren nicht
    ThreadingHTTPServer(("", port), handler).serve_forever()
