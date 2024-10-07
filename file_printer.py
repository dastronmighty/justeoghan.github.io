import os


def print_directory_contents(root_dir, output_file, ignored_dirs, ignored_files):
    """
    Recursively print the directory structure and file contents into the output file.

    Parameters:
    - root_dir: The directory to start scanning from (typically the root of the project).
    - output_file: The file where the directory structure and file contents will be written.
    - ignored_dirs: List of directories to ignore (e.g., node_modules, etc.).
    - ignored_files: List of specific files to ignore (e.g., .gitignore, package.json, etc.).
    """

    with open(output_file, "w", encoding="utf-8") as f:
        for dirpath, dirnames, filenames in os.walk(root_dir):
            # Filter out ignored directories
            dirnames[:] = [d for d in dirnames if d not in ignored_dirs]

            # Write the current directory name
            indent_level = dirpath.count(os.sep) - root_dir.count(os.sep)
            f.write(f"{'  ' * indent_level}Directory: {os.path.basename(dirpath)}\n")

            for filename in filenames:
                # Skip ignored files
                if filename in ignored_files:
                    continue

                file_path = os.path.join(dirpath, filename)

                # Write the file name
                f.write(f"{'  ' * (indent_level + 1)}File: {filename}\n")
                try:
                    # Write the file contents
                    with open(file_path, "r", encoding="utf-8") as file_content:
                        contents = file_content.read()
                        f.write(f"{'  ' * (indent_level + 2)}Contents:\n")
                        for line in contents.splitlines():
                            f.write(f"{'  ' * (indent_level + 3)}{line}\n")
                except Exception as e:
                    f.write(
                        f"{'  ' * (indent_level + 2)}Error reading file: {str(e)}\n"
                    )


if __name__ == "__main__":
    # Specify the root directory (where the script is located)
    root_directory = os.path.dirname(os.path.abspath(__file__))

    # Specify the output file to save the directory structure and contents
    output_file_path = os.path.join(
        root_directory, "directory_structure_and_contents.txt"
    )

    # List of directories to ignore (e.g., 'node_modules' or any other directory you want to exclude)
    directories_to_ignore = [
        "node_modules",
        "dist",
        "venv",
        "__pycache__",
        ".snapshots",
        "misc",
        ".mypy_cache",
        ".alpackages",
        ".git",
        "build",
        "icons",
        "public",
    ]

    # List of specific files to ignore
    files_to_ignore = [
        ".gitignore",
        "package.json",
        "package-lock.json",
    ]

    # Call the function to print the directory structure and file contents
    print_directory_contents(
        root_directory, output_file_path, directories_to_ignore, files_to_ignore
    )

    print(f"Directory structure and file contents saved to {output_file_path}")
