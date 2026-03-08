import os
import glob

def replace_in_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        new_content = content
        replacements = [
            ("Saudi Arabia", "Oman"),
            ("saudi arabia", "oman"),
            ("SAUDI ARABIA", "OMAN"),
            ("Saudi", "Oman"),
            ("saudi", "oman"),
            ("SAUDI", "OMAN"),
            ("Vision 2030", "Oman Vision 2040"),
            ("vision 2030", "oman vision 2040"),
            ("MISA", "Invest Oman"),
            ("misa", "invest oman"),
            ("Kingdom", "Sultanate")
        ]
        
        for old, new in replacements:
            new_content = new_content.replace(old, new)
            
        if content != new_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated content in {filepath}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

src_dir = os.path.join(os.getcwd(), 'src')

# First, rename files and directories
rename_pairs = []
for root, dirs, files in os.walk(src_dir, topdown=False):
    for name in dirs:
        if 'saudi' in name.lower():
            old_path = os.path.join(root, name)
            new_name = name.replace('saudi', 'oman').replace('Saudi', 'Oman').replace('SAUDI', 'OMAN')
            new_path = os.path.join(root, new_name)
            rename_pairs.append((old_path, new_path))
    
    for name in files:
        if 'saudi' in name.lower() and (name.endswith('.tsx') or name.endswith('.ts')):
            old_path = os.path.join(root, name)
            new_name = name.replace('saudi', 'oman').replace('Saudi', 'Oman').replace('SAUDI', 'OMAN')
            new_path = os.path.join(root, new_name)
            rename_pairs.append((old_path, new_path))

for old, new in rename_pairs:
    os.rename(old, new)
    print(f"Renamed {old} to {new}")

# Now, open all tsx and ts files and replace the text inside
for root, dirs, files in os.walk(src_dir):
    for file in files:
        if file.endswith(('.tsx', '.ts')):
            replace_in_file(os.path.join(root, file))

print("Conversion complete.")
