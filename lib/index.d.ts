export = DeputyGateway;

declare class DeputyGateway
{
    constructor(subdomain: string, token: string);
    get(endpoint: string): Promise<any>;
}
