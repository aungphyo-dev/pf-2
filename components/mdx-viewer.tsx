import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
export function MdxViewer({ source, ...props }: MDXRemoteProps) {
    return <MDXRemote source={source} {...props} />;
}
