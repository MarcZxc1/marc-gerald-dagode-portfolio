import re

with open('app/globals.css', 'r') as f:
    content = f.read()

# This is a bit tricky since blocks can contain nested braces or pseudo-elements.
# Let's just fix the expertise-section.tsx first.
