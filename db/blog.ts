import fs from 'fs';
import path from 'path';

function getMDXFiles(dir: string) {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath: string) {
    return fs.readFileSync(filePath, 'utf-8');
}

function getMDXData(dir: string) {
    let mdxFiles = getMDXFiles(dir);
    return mdxFiles.map((file) => {
        let content = readMDXFile(path.join(dir, file));
        let slug = path.basename(file, path.extname(file));
        return {
            slug,
            content,
        };
    });
}

export function getBlogPosts() {
    return getMDXData(path.join(process.cwd(), 'content'));
}
