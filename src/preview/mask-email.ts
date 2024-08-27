export const maskEmailForPreview = (email: string) => {
    const [name, url] = email.split('@');
    const urlSplited = url.split('.');
    // take the root from the end to ignore middle domain, like sub.example.com
    const root = urlSplited[urlSplited.length - 1];
    const domain = urlSplited[0];

    return `${name.slice(0, 3)}***@${domain.slice(0, 1)}***.${root ?? ''}`;
}