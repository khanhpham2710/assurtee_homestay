type DownloadProps = {
    text: string;
    href: string;
    fileName?: string;
};

function Download({ text, href, fileName }: DownloadProps) {
    return (
        <a
            href={href}
            download={fileName || null}
            className="btn btn--round w-sm"
        >
            {text}
            <i className="ico ico-down"></i>
        </a>
    );
}

export default Download;
