import re

with open('app/globals.css', 'r') as f:
    css = f.read()

# We want to find block patterns that contain :hover
# Since CSS parsing is hard, we can just find lines with :hover {
# and match brackets, but it's simpler to do:
lines = css.split('\n')
out = []
in_hover_block = False
brace_count = 0

for line in lines:
    if not in_hover_block:
        if ':hover' in line and '{' in line and '@' not in line: # start of a block
            out.append('@media (hover: hover) and (pointer: fine) {')
            out.append(line)
            in_hover_block = True
            brace_count = line.count('{') - line.count('}')
        else:
            out.append(line)
    else:
        out.append(line)
        brace_count += line.count('{') - line.count('}')
        if brace_count == 0:
            out.append('}')
            in_hover_block = False

with open('app/globals.css', 'w') as f:
    f.write('\n'.join(out))
