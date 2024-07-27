import os
import re
import datetime

directory = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), 'projects')

projects = {}
for filename in os.listdir(directory):
    if not filename.endswith('.html'): continue

    date = None
    with open(os.path.join(directory, filename), encoding="UTF-8") as file:
        date = file.readline().strip('<!->\n').split('/')
        date = datetime.datetime(int(date[2]), int(date[1]), int(date[0])).strftime("%Y-%m-%d")
        category = file.readline().strip('<!->\n').split('/')
        while True:
            try:
                line = file.readline()
                if re.match(r'^\s*<title>', line):
                    title = re.sub(r'^\s*<title>(.*)</title>\s*$', r'\1', line)
                    break
            except:
                break
        projects[re.sub(r'\.html$', '', filename)] = {'date': date, 'category': category[0], 'title': title}

sorted_projects = dict(sorted(projects.items(), key=lambda item: item[1]['date'], reverse=True))
    
with open(os.path.join(os.path.dirname(directory), 'assets', 'js', 'populate_projects.js'), 'r', encoding="UTF-8") as file:
    data = ''.join(file.readlines()[1:])

with open(os.path.join(os.path.dirname(directory), 'assets', 'js', 'populate_projects.js'), 'w', encoding="UTF-8") as file:
    file.write('const projects = ')
    file.write(str(sorted_projects))
    file.write(';\n')
    file.write(data)