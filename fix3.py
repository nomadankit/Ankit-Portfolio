import glob
files = ["c:/Users/ankit/Downloads/Ankit/deservo/index.html", "c:/Users/ankit/Downloads/Ankit/pinchnip/index.html", "c:/Users/ankit/Downloads/Ankit/project/index.html"]
for f in files:
    with open(f, "r", encoding="utf-8") as file:
        content = file.read()
    content = content.replace("\x90", "")
    with open(f, "w", encoding="utf-8") as file:
        file.write(content)
