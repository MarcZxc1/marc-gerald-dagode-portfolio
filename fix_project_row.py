import re

with open('app/globals.css', 'r') as f:
    css = f.read()

# Remove transition: padding...
css = re.sub(r'transition:\s*padding\s+var\(--duration-fast\)\s+var\(--ease-default\);', '', css)

# Replace project-row:hover padding-inline with transform
css = css.replace(
    '.project-row:hover {\n  padding-inline: 8px;\n}',
    '.project-row:hover .project-row__body {\n  transform: translateX(6px);\n}'
)

css = css.replace(
    '.project-row:hover {\n    padding-inline: 0;\n  }',
    '.project-row:hover .project-row__body {\n    transform: translateX(0);\n  }'
)

# Add transition to project-row__body
body_idx = css.find('.project-row__heading')
if body_idx != -1:
    css = css[:body_idx] + '.project-row__body {\n  transition: transform var(--duration-fast) var(--ease-default);\n}\n\n' + css[body_idx:]

with open('app/globals.css', 'w') as f:
    f.write(css)
