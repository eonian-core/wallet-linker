import express from 'express';
import { Server, createServer } from 'http'
import { AddressInfo } from 'net'
import { format } from 'url';

export async function startExpress(app: express.Express, port: number): Promise<{ url: string }> {
    const httpServer: Server = createServer(app);

    // Wait for server to start listening
    await new Promise<void>((resolve) => {
        httpServer.listen({ port }, resolve);
    });

    return { url: urlForHttpServer(httpServer) };
}

export function urlForHttpServer(httpServer: Server): string {
    const { address, port } = httpServer.address() as AddressInfo;

    // Convert IPs which mean "any address" (IPv4 or IPv6) into localhost
    // corresponding loopback ip. Note that the url field we're setting is
    // primarily for consumption by our test suite. If this heuristic is wrong for
    // your use case, explicitly specify a frontend host (in the `host` option
    // when listening).
    const hostname = address === '' || address === '::' ? 'localhost' : address;

    return format({
        protocol: 'http',
        hostname,
        port,
        pathname: '/',
    });
}
