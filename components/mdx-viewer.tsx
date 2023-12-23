import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import React, { ReactNode } from 'react';
import { highlight } from 'sugar-high';
import Link from 'next/link';
function Table({
    data,
}: {
    data: { headers: Array<string>; rows: Array<Array<string>> };
}) {
    let headers = data.headers.map((header, index) => (
        <th key={index}>{header}</th>
    ));
    let rows = data.rows.map((row, index) => (
        <tr key={index}>
            {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
            ))}
        </tr>
    ));

    return (
        <table>
            <thead>
                <tr>{headers}</tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

function CustomLink({
    href,
    children,
    ...props
}: {
    href: string;
    children: ReactNode;
}) {
    if (href.startsWith('/')) {
        return (
            <Link href={href} {...props}>
                {children}
            </Link>
        );
    }

    if (href.startsWith('#')) {
        return <a {...props} />;
    }

    return <a target='_blank' rel='noopener noreferrer' {...props} />;
}

// function Callout({emoji,children}:{emoji : string,children : ReactNode}) {
//     return (
//         <div className="px-4 py-3 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm flex items-center text-neutral-900 dark:text-neutral-100 mb-8">
//             <div className="flex items-center w-4 mr-4">{emoji}</div>
//             <div className="w-full callout">{children}</div>
//         </div>
//     );
// }

function Code({ children, ...props }: { children: string }) {
    let codeHTML = highlight(children);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function slugify(str: string) {
    return str
        .toString()
        .toLowerCase()
        .trim() // Remove whitespace from both ends of a string
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
        .replace(/--+/g, '-'); // Replace multiple - with single -
}

function createHeading(level: number) {
    // eslint-disable-next-line react/display-name
    return ({ children }: { children: string }) => {
        let slug = slugify(children);
        return React.createElement(
            `h${level}`,
            { id: slug },
            [
                React.createElement('a', {
                    href: `#${slug}`,
                    key: `link-${slug}`,
                    className: 'anchor',
                }),
            ],
            children
        );
    };
}

let components = {
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
    a: CustomLink,
    code: Code,
    Table,
};
export function MdxViewer({ source, components, ...props }: MDXRemoteProps) {
    return (
        <MDXRemote
            source={source}
            components={{ ...components, ...(components || {}) }}
            {...props}
        />
    );
}
